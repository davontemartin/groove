import { useEffect, useState } from 'react';
import { XIcon, HeartIcon } from './Icon.jsx';
import { commentsByPost, quickReplies, currentUser, themes } from '../data/mockData.js';

export default function CommentsSheet({ open, post, onClose }) {
  const [draft, setDraft] = useState('');
  const [extra, setExtra] = useState([]);
  const [likedIds, setLikedIds] = useState(new Set());

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setDraft('');
      setExtra([]);
      setLikedIds(new Set());
    }
  }, [open]);

  if (!open || !post) return null;

  const t = themes[post.theme] || themes.violet;
  const baseComments = commentsByPost[post.id] || [];
  const comments = [...baseComments, ...extra];

  const send = (text) => {
    const value = (text ?? draft).trim();
    if (!value) return;
    setExtra((prev) => [
      ...prev,
      {
        id: `cnew_${Date.now()}`,
        user: currentUser,
        text: value,
        reactions: 0,
        createdAt: 'now',
        isMe: true,
      },
    ]);
    setDraft('');
  };

  const toggleLike = (id) =>
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Comments"
    >
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full md:max-w-xl md:rounded-[32px] rounded-t-[32px] overflow-hidden animate-slide-up sticker bg-ink-900">
        {/* Themed header */}
        <div
          className="relative p-4 pb-3"
          style={{ backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.via}, ${t.to})`, color: t.text }}
        >
          <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.12] mix-blend-overlay" />
          <div className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 h-1.5 w-10 rounded-full bg-white/40" />
          <div className="relative flex items-center gap-3 mt-2">
            <img src={post.song.cover} alt="" className="h-12 w-12 rounded-xl object-cover ring-2 ring-white/40" />
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-[0.22em] font-bold opacity-85">
                comments · {comments.length}
              </p>
              <p className="font-display font-bold truncate">
                {post.mood.emoji} {post.mood.text}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="btn-press h-9 w-9 grid place-items-center rounded-full bg-black/25 hover:bg-black/40"
            >
              <XIcon />
            </button>
          </div>
        </div>

        {/* Comments */}
        <div className="max-h-[55vh] overflow-y-auto no-scrollbar px-4 py-4 space-y-3">
          {comments.length === 0 && (
            <p className="text-center text-sm text-white/40 py-10">be first to drop a comment</p>
          )}
          {comments.map((c) => {
            const liked = likedIds.has(c.id);
            return (
              <div key={c.id} className="flex gap-3 animate-fade-in">
                <img src={c.user.avatar} alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/15" />
                <div className="min-w-0 flex-1">
                  <div className="rounded-2xl bg-white/[0.05] px-3 py-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-sm truncate">{c.user.displayName}</span>
                      <span className="text-[10px] text-white/40 uppercase tracking-widest">{c.createdAt}</span>
                    </div>
                    <p className="text-sm text-white/90 mt-0.5">{c.text}</p>
                  </div>
                  <div className="mt-1 flex items-center gap-3 px-1 text-xs text-white/55">
                    <button
                      onClick={() => toggleLike(c.id)}
                      className={`btn-press inline-flex items-center gap-1 ${liked ? 'text-accent-pink' : 'hover:text-white'}`}
                    >
                      <HeartIcon size={12} filled={liked} />
                      <span className="tabular-nums">{c.reactions + (liked ? 1 : 0)}</span>
                    </button>
                    <button className="hover:text-white">Reply</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick replies */}
        <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
          {quickReplies.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="btn-press shrink-0 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold hover:bg-white/[0.12]"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Composer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="px-3 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] border-t border-white/5 bg-ink-900 flex items-center gap-2"
        >
          <img src={currentUser.avatar} alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/15 shrink-0" />
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="add to the vibe..."
            className="flex-1 bg-white/[0.05] border border-white/10 rounded-full px-4 py-2.5 text-sm outline-none placeholder:text-white/30 focus:border-white/30"
          />
          <button
            type="submit"
            disabled={!draft.trim()}
            className={`btn-press px-4 py-2.5 rounded-full text-sm font-bold ${
              draft.trim() ? 'text-white' : 'bg-white/10 text-white/40'
            }`}
            style={draft.trim() ? { backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.to})` } : undefined}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

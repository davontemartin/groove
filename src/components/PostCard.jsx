import { useRef, useState } from 'react';
import { HeartIcon, CommentIcon, PlayIcon, PauseIcon } from './Icon.jsx';
import Equalizer from './Equalizer.jsx';
import ServiceLinks from './ServiceLinks.jsx';
import { themes, reactionPalette } from '../data/mockData.js';

function formatCount(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return `${n}`;
}

export default function PostCard({ post, onPlay, isPlaying, onOpenComments }) {
  const theme = themes[post.theme] || themes.violet;
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);
  const [bursts, setBursts] = useState([]);
  const [reactions, setReactions] = useState({});
  const lastTap = useRef(0);

  const setLikedTo = (next) => {
    setLiked(next);
    setLikes((c) => c + (next ? 1 : -1));
  };

  const triggerBurst = () => {
    const id = Date.now() + Math.random();
    setBursts((b) => [...b, { id }]);
    setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 900);
  };

  const handleHeartClick = () => {
    setLikedTo(!liked);
    if (!liked) triggerBurst();
  };

  const handleCoverTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 280) {
      // double tap → like + burst (but never un-like)
      if (!liked) setLikedTo(true);
      triggerBurst();
      lastTap.current = 0;
    } else {
      lastTap.current = now;
      // single tap fires play after debounce window
      setTimeout(() => {
        if (lastTap.current && Date.now() - lastTap.current >= 280) {
          onPlay?.(post);
          lastTap.current = 0;
        }
      }, 290);
    }
  };

  const toggleReaction = (id) => {
    setReactions((prev) => {
      const next = { ...prev };
      next[id] = (next[id] || 0) + (prev[id] ? -1 : 1);
      if (next[id] <= 0) delete next[id];
      return next;
    });
  };

  const gradient = `linear-gradient(135deg, ${theme.from} 0%, ${theme.via} 55%, ${theme.to} 100%)`;
  const totalReactions = Object.values(reactions).reduce((a, b) => a + b, 0);

  return (
    <article
      className="group relative rounded-[32px] overflow-hidden sticker animate-slide-up"
      style={{ backgroundImage: gradient, '--glow': `${theme.via}66`, color: theme.text }}
    >
      <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.09] mix-blend-overlay pointer-events-none" />
      <div aria-hidden className="absolute -inset-px rounded-[32px] pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)' }} />
      <div aria-hidden className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-60 animate-blob-a pointer-events-none" style={{ background: theme.to }} />
      <div aria-hidden className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-50 animate-blob-b pointer-events-none" style={{ background: theme.from }} />

      <div className="relative p-5 sm:p-6">
        {/* Header */}
        <header className="flex items-center gap-3">
          <img src={post.user.avatar} alt={post.user.username} className="h-11 w-11 rounded-full object-cover ring-2 ring-white/40" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="font-display font-bold tracking-tight truncate">{post.user.displayName}</p>
              <span className="opacity-60 text-xs">· {post.createdAt}</span>
            </div>
            <p className="text-xs opacity-70 truncate">@{post.user.username}</p>
          </div>
          <button className="btn-press text-[11px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full bg-white text-ink-950 shadow-md">
            Follow
          </button>
        </header>

        {/* Mood headline */}
        <div className="mt-5 flex items-start gap-3">
          <span className="text-5xl sm:text-6xl leading-none drop-shadow-xl select-none">{post.mood.emoji}</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl leading-[1.05] tracking-tight pt-1">
            {post.mood.text}
          </h2>
        </div>

        {/* Song hero with double-tap */}
        <div
          className="mt-6 relative select-none"
          onClick={handleCoverTap}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPlay?.(post)}
        >
          <div className="flex items-stretch gap-4">
            <div className="relative shrink-0">
              <img
                src={post.song.cover}
                alt={post.song.album}
                className="tilt relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl object-cover shadow-2xl ring-1 ring-white/20"
              />
              <button
                onClick={(e) => { e.stopPropagation(); onPlay?.(post); }}
                aria-label={isPlaying ? 'Pause' : 'Play preview'}
                className="btn-press absolute -bottom-3 -left-3 grid place-items-center h-11 w-11 rounded-full text-ink-950 bg-white shadow-xl"
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>

              {/* Heart bursts on double tap */}
              {bursts.map((b) => (
                <span
                  key={b.id}
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ animation: 'fadeIn 0.1s ease-out' }}
                >
                  <span className="burst-heart text-6xl drop-shadow-2xl">💖</span>
                </span>
              ))}
            </div>

            <div className="flex-1 min-w-0 rounded-2xl p-4 flex flex-col justify-between" style={{ background: 'rgba(0,0,0,0.28)', backdropFilter: 'blur(6px)' }}>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold opacity-80">
                  <Equalizer playing={isPlaying} size={10} />
                  {isPlaying ? 'now playing' : 'preview'}
                </div>
                <p className="mt-1.5 font-display font-bold text-lg sm:text-xl truncate">{post.song.title}</p>
                <p className="text-sm opacity-80 truncate">{post.song.artist} · {post.song.album}</p>
              </div>
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                <button
                  onClick={(e) => { e.stopPropagation(); onPlay?.(post); }}
                  className="btn-press inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-ink-950 text-xs font-bold"
                >
                  {isPlaying ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
                  {isPlaying ? 'Pause' : 'Preview'}
                </button>
                <ServiceLinks song={post.song} size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Reactions row */}
        <div className="mt-5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {reactionPalette.map((r) => {
            const count = reactions[r.id] || 0;
            const active = count > 0;
            return (
              <button
                key={r.id}
                onClick={() => toggleReaction(r.id)}
                aria-label={`React ${r.emoji}`}
                className={`btn-press shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm font-bold border transition
                  ${active ? 'bg-white text-ink-950 border-white' : 'bg-black/25 border-white/10 hover:bg-black/35'}`}
                style={active ? { boxShadow: `0 0 0 2px ${r.color}` } : undefined}
              >
                <span className="text-base leading-none">{r.emoji}</span>
                {count > 0 && <span className="tabular-nums text-xs">{count}</span>}
              </button>
            );
          })}
          {totalReactions > 0 && (
            <span className="ml-auto text-[10px] uppercase tracking-widest font-bold opacity-70 shrink-0 px-1">
              {totalReactions} reacted
            </span>
          )}
        </div>

        {/* Actions */}
        <footer className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleHeartClick}
              aria-label="Like"
              className={`btn-press inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-bold ${liked ? 'bg-white text-rose-600' : 'bg-black/25 hover:bg-black/35'}`}
            >
              <HeartIcon filled={liked} size={18} />
              <span className="tabular-nums">{formatCount(likes)}</span>
            </button>
            <button
              onClick={() => onOpenComments?.(post)}
              className="btn-press inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-bold bg-black/25 hover:bg-black/35"
            >
              <CommentIcon size={18} />
              <span className="tabular-nums">{formatCount(post.comments)}</span>
            </button>
          </div>
          <button className="btn-press text-xs font-bold uppercase tracking-widest opacity-80 hover:opacity-100">
            share →
          </button>
        </footer>
      </div>
    </article>
  );
}

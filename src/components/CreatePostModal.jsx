import { useEffect, useMemo, useState } from 'react';
import { XIcon, SearchIcon, PlayIcon, SparkleIcon } from './Icon.jsx';
import { songs, moodEmojis, themes } from '../data/mockData.js';

const themeKeys = Object.keys(themes);

export default function CreatePostModal({ open, onClose, onCreate }) {
  const [emoji, setEmoji] = useState('🌧️');
  const [moodText, setMoodText] = useState('');
  const [query, setQuery] = useState('');
  const [selectedSong, setSelectedSong] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [themeKey, setThemeKey] = useState('violet');

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
      setMoodText('');
      setQuery('');
      setSelectedSong(null);
      setShowEmojiPicker(false);
      setEmoji('🌧️');
      setThemeKey('violet');
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? songs.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.artist.toLowerCase().includes(q) ||
            s.album.toLowerCase().includes(q),
        )
      : songs;
    return base.slice(0, 6);
  }, [query]);

  const theme = themes[themeKey];
  const canPost = moodText.trim().length > 0 && selectedSong;

  const handlePost = () => {
    if (!canPost) return;
    onCreate?.({ emoji, moodText: moodText.trim(), song: selectedSong, theme: themeKey });
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Create a Groove post"
    >
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full md:max-w-xl md:rounded-[32px] rounded-t-[32px] overflow-hidden animate-slide-up sticker">
        {/* Themed header */}
        <div className="relative p-5 pb-16" style={{ backgroundImage: `linear-gradient(135deg, ${theme.from}, ${theme.via}, ${theme.to})` }}>
          <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.12] mix-blend-overlay" />
          <div className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 h-1.5 w-10 rounded-full bg-white/40" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <SparkleIcon />
              <h2 className="font-display font-bold text-lg tracking-tight">Drop a vibe</h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="btn-press h-9 w-9 grid place-items-center rounded-full text-white/90 bg-black/25 hover:bg-black/40"
            >
              <XIcon />
            </button>
          </div>
          <div className="relative mt-6 flex items-end gap-3 text-white">
            <span className="text-6xl leading-none drop-shadow">{emoji}</span>
            <p className="font-display font-extrabold text-2xl leading-[1] tracking-tight truncate">
              {moodText || 'what\'s the feeling?'}
            </p>
          </div>
        </div>

        <div className="relative bg-ink-900 -mt-10 rounded-t-[28px] p-5 pb-0 space-y-5 max-h-[70vh] overflow-y-auto no-scrollbar">
          {/* Mood input */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.22em] font-bold text-white/60">Mood</label>
            <div className="mt-2 flex items-center gap-2 rounded-2xl bg-white/[0.05] border border-white/10 focus-within:border-white/40 transition">
              <button
                type="button"
                onClick={() => setShowEmojiPicker((v) => !v)}
                className="btn-press h-12 w-12 text-2xl grid place-items-center hover:bg-white/5 rounded-l-2xl"
                aria-label="Choose emoji"
              >
                {emoji}
              </button>
              <input
                value={moodText}
                onChange={(e) => setMoodText(e.target.value)}
                placeholder="late night thoughts..."
                maxLength={48}
                className="flex-1 bg-transparent outline-none py-3 pr-4 placeholder:text-white/30"
              />
              <span className="text-[10px] pr-3 text-white/40 tabular-nums">{moodText.length}/48</span>
            </div>
            {showEmojiPicker && (
              <div className="mt-2 p-2 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-wrap gap-1 animate-fade-in">
                {moodEmojis.map((e) => (
                  <button
                    key={e}
                    type="button"
                    onClick={() => { setEmoji(e); setShowEmojiPicker(false); }}
                    className={`btn-press h-9 w-9 text-lg rounded-xl hover:bg-white/10 ${emoji === e ? 'bg-white/10' : ''}`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme picker */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.22em] font-bold text-white/60">Color mood</label>
            <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {themeKeys.map((k) => {
                const t = themes[k];
                const isActive = k === themeKey;
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setThemeKey(k)}
                    className={`btn-press shrink-0 h-10 w-10 rounded-full ring-2 ${isActive ? 'ring-white' : 'ring-white/10'}`}
                    style={{ backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.via}, ${t.to})` }}
                    aria-label={k}
                  />
                );
              })}
            </div>
          </div>

          {/* Song search */}
          <div>
            <label className="text-[10px] uppercase tracking-[0.22em] font-bold text-white/60">Song</label>
            <div className="mt-2 flex items-center gap-2 rounded-2xl bg-white/[0.05] border border-white/10 focus-within:border-white/40 transition px-3">
              <SearchIcon className="text-white/50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search song, artist, album..."
                className="flex-1 bg-transparent outline-none py-3 placeholder:text-white/30"
              />
            </div>

            <ul className="mt-3 space-y-1.5">
              {results.map((song) => {
                const isSelected = selectedSong?.id === song.id;
                return (
                  <li key={song.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedSong(song)}
                      className={`btn-press w-full flex items-center gap-3 p-2 rounded-2xl text-left transition border
                        ${isSelected ? 'bg-white/10 border-white/40' : 'hover:bg-white/[0.06] border-transparent'}`}
                    >
                      <img src={song.cover} alt={song.album} className="h-12 w-12 rounded-lg object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold truncate">{song.title}</p>
                        <p className="text-xs text-white/50 truncate">{song.artist} · {song.album}</p>
                      </div>
                      <span className={`h-8 w-8 grid place-items-center rounded-full ${isSelected ? 'bg-white text-ink-950' : 'bg-white/10 text-white/80'}`}>
                        <PlayIcon size={14} />
                      </span>
                    </button>
                  </li>
                );
              })}
              {results.length === 0 && (
                <li className="py-6 text-center text-sm text-white/40">No tracks matched that search.</li>
              )}
            </ul>
          </div>

          {/* Preview */}
          {selectedSong && (
            <div
              className="rounded-2xl p-3 flex items-center gap-3 animate-fade-in sticker"
              style={{ backgroundImage: `linear-gradient(135deg, ${theme.from}, ${theme.to})`, color: theme.text }}
            >
              <img src={selectedSong.cover} alt="" className="h-14 w-14 rounded-xl object-cover ring-2 ring-white/30" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.22em] font-bold opacity-85">Preview</p>
                <p className="font-display font-bold truncate text-lg">{emoji} {moodText || 'your mood'}</p>
                <p className="text-xs opacity-85 truncate">{selectedSong.title} · {selectedSong.artist}</p>
              </div>
            </div>
          )}
        </div>

        <div className="px-5 py-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] border-t border-white/5 bg-ink-900 flex items-center justify-between gap-3">
          <button onClick={onClose} className="btn-press px-4 py-2.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/5 font-semibold">
            Cancel
          </button>
          <button
            onClick={handlePost}
            disabled={!canPost}
            className={`btn-press px-5 py-2.5 rounded-full text-sm font-bold transition text-white
              ${canPost ? 'shadow-xl hover:brightness-110' : 'bg-white/10 text-white/40 cursor-not-allowed'}`}
            style={canPost ? { backgroundImage: `linear-gradient(135deg, ${theme.from}, ${theme.to})` } : undefined}
          >
            Post vibe →
          </button>
        </div>
      </div>
    </div>
  );
}

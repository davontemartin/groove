import { useEffect, useRef, useState } from 'react';
import { themes } from '../data/mockData.js';
import { XIcon, PlayIcon, PauseIcon } from './Icon.jsx';
import Equalizer from './Equalizer.jsx';

// How long each song previews before auto-advancing — "a few seconds".
const PREVIEW_MS = 4500;

// Instagram-stories-style player for a vibe: steps through the songs a user
// added, showing what they were feeling, previewing a few seconds of each.
export default function StoryPlayer({ vibe, onClose }) {
  const tracks = vibe?.tracks || [];
  const open = !!vibe && tracks.length > 0;

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const elapsedRef = useRef(0);
  const startRef = useRef(0);

  // Start from the first track whenever a new story opens.
  useEffect(() => {
    if (!open) return;
    setIndex(0);
    setPaused(false);
  }, [vibe?.id, open]);

  // Reset segment timing whenever the active track changes.
  useEffect(() => {
    elapsedRef.current = 0;
    setProgress(0);
  }, [index, vibe?.id]);

  // Escape to close + lock background scroll while open.
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

  // Auto-advancing preview timer (resumes from elapsed when unpaused).
  useEffect(() => {
    if (!open || paused) return;
    startRef.current = Date.now() - elapsedRef.current;
    let raf;
    const step = () => {
      const e = Date.now() - startRef.current;
      elapsedRef.current = e;
      const p = Math.min(1, e / PREVIEW_MS);
      setProgress(p);
      if (p >= 1) {
        if (index < tracks.length - 1) setIndex(index + 1);
        else onClose();
        return;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [open, index, paused, vibe?.id, tracks.length, onClose]);

  if (!open) return null;

  const t = tracks[index];
  const theme = themes[t.theme] || themes[vibe.theme] || themes.violet;
  const gradient = `linear-gradient(160deg, ${theme.from} 0%, ${theme.via} 55%, ${theme.to} 100%)`;

  const next = () => (index < tracks.length - 1 ? setIndex(index + 1) : onClose());
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      {/* Backdrop */}
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative w-full h-full md:h-[90vh] md:max-w-sm md:rounded-[32px] overflow-hidden sticker"
        style={{ backgroundImage: gradient, color: theme.text }}
      >
        {/* Blurred cover backdrop + scrims for legibility */}
        <img src={t.song.cover} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30 blur-2xl scale-110" />
        <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.1) 38%, rgba(0,0,0,0.78))' }} />

        {/* Segment progress bars */}
        <div className="absolute top-0 inset-x-0 z-30 flex gap-1 p-3">
          {tracks.map((_, i) => (
            <div key={i} className="h-[3px] flex-1 rounded-full bg-white/25 overflow-hidden">
              <div
                className="h-full bg-white rounded-full"
                style={{
                  width: i < index ? '100%' : i === index ? `${progress * 100}%` : '0%',
                  transition: i === index ? 'none' : 'width 0.2s linear',
                }}
              />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-0 inset-x-0 z-30 mt-5 px-4 flex items-center gap-3">
          <img src={vibe.user.avatar} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/50" />
          <div className="min-w-0 flex-1">
            <p className="font-display font-bold text-sm leading-tight truncate">{vibe.user.displayName}</p>
            <p className="text-[11px] opacity-75 truncate">@{vibe.user.username} · {vibe.label}</p>
          </div>
          <button onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Resume' : 'Pause'} className="btn-press grid place-items-center h-9 w-9 rounded-full bg-black/30">
            {paused ? <PlayIcon size={15} /> : <PauseIcon size={15} />}
          </button>
          <button onClick={onClose} aria-label="Close" className="btn-press grid place-items-center h-9 w-9 rounded-full bg-black/30">
            <XIcon size={16} />
          </button>
        </div>

        {/* Tap zones: left third = previous, right two-thirds = next */}
        <button aria-label="Previous song" onClick={prev} className="absolute left-0 top-20 bottom-44 w-1/3 z-20" />
        <button aria-label="Next song" onClick={next} className="absolute right-0 top-20 bottom-44 w-2/3 z-20" />

        {/* Center cover art */}
        <div className="absolute inset-x-0 z-10 flex justify-center px-8" style={{ top: '15%' }}>
          <img
            src={t.song.cover}
            alt={t.song.album}
            className="h-56 w-56 sm:h-64 sm:w-64 rounded-3xl object-cover shadow-2xl ring-1 ring-white/20 animate-fade-in"
          />
        </div>

        {/* Bottom: the feeling + the song */}
        <div className="absolute bottom-0 inset-x-0 z-30 p-6 pb-10">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold opacity-80">
            <Equalizer playing={!paused} size={10} />
            {paused ? 'paused' : 'preview'} · {index + 1}/{tracks.length}
          </div>
          <div className="mt-3 flex items-start gap-3">
            <span className="text-4xl leading-none drop-shadow select-none">{t.mood.emoji}</span>
            <div className="min-w-0">
              <p className="font-display font-extrabold text-2xl leading-tight">{t.mood.text}</p>
              <p className="mt-1 font-bold truncate">{t.song.title}</p>
              <p className="text-sm opacity-80 truncate">{t.song.artist} · {t.song.album}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

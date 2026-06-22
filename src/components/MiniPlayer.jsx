import { PlayIcon, PauseIcon } from './Icon.jsx';
import Equalizer from './Equalizer.jsx';
import ServiceLinks from './ServiceLinks.jsx';
import { themes } from '../data/mockData.js';

export default function MiniPlayer({ post, isPlaying, onToggle, onClose }) {
  if (!post) return null;
  const theme = themes[post.theme] || themes.violet;
  const gradient = `linear-gradient(90deg, ${theme.from}, ${theme.via}, ${theme.to})`;

  return (
    <div className="fixed z-40 left-1/2 -translate-x-1/2 bottom-[calc(env(safe-area-inset-bottom)+5.25rem)] md:bottom-5 w-[calc(100%-1rem)] max-w-2xl animate-slide-up">
      <div
        className="relative rounded-3xl overflow-hidden sticker"
        style={{ backgroundImage: gradient, color: theme.text, '--glow': `${theme.via}80` }}
      >
        <div aria-hidden className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay" />
        <div className="relative flex items-center gap-3 p-2.5 pr-3">
          <img src={post.song.cover} alt="" className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/25" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-bold opacity-85">
              <Equalizer playing={isPlaying} size={9} />
              {isPlaying ? 'playing' : 'paused'} · {post.mood.emoji} {post.mood.text}
            </div>
            <p className="font-display font-bold truncate text-sm">
              {post.song.title} <span className="opacity-70 font-semibold">· {post.song.artist}</span>
            </p>
          </div>
          <div className="hidden sm:block">
            <ServiceLinks song={post.song} size={32} />
          </div>
          <button
            onClick={onToggle}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="btn-press grid place-items-center h-10 w-10 rounded-full bg-white text-ink-950"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            onClick={onClose}
            aria-label="Close player"
            className="btn-press hidden sm:block text-xs font-bold opacity-75 hover:opacity-100 px-2"
          >
            ✕
          </button>
        </div>
        <div className="h-1 bg-black/25">
          <div
            className={`h-full bg-white/90 transition-all duration-700 ${isPlaying ? 'w-2/3' : 'w-0'}`}
          />
        </div>
      </div>
    </div>
  );
}

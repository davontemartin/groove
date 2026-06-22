import { TrendIcon, XIcon } from './Icon.jsx';
import { trendingMoods, themes } from '../data/mockData.js';

function formatPosts(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return `${n}`;
}

export default function TrendingMoods({ activeMood, onSelectMood }) {
  return (
    <section className="glass rounded-3xl p-4 shadow-card">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <TrendIcon className="text-accent-lime" />
          <h2 className="font-display text-sm font-bold tracking-tight uppercase">Trending now</h2>
        </div>
        {activeMood ? (
          <button
            onClick={() => onSelectMood?.(null)}
            className="btn-press inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white/70 hover:text-white"
          >
            <XIcon size={12} /> clear
          </button>
        ) : (
          <span className="text-[10px] uppercase tracking-widest text-white/40">live</span>
        )}
      </div>
      <div className="mt-3 -mx-1 flex md:flex-wrap gap-2 overflow-x-auto no-scrollbar px-1 pb-1">
        {trendingMoods.map((m, i) => {
          const t = themes[m.theme];
          const isActive = activeMood === m.label;
          return (
            <button
              key={m.label}
              type="button"
              onClick={() => onSelectMood?.(isActive ? null : m.label)}
              className="btn-press group shrink-0 relative overflow-hidden rounded-2xl p-[1px]"
              style={{ backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.via}, ${t.to})` }}
            >
              <span
                className={`relative z-10 flex items-center gap-2 px-3 py-2 rounded-[15px] transition
                  ${isActive ? 'bg-transparent text-white' : 'bg-ink-900/80 group-hover:bg-ink-900/60'}`}
              >
                <span className="text-base leading-none">{m.emoji}</span>
                <span className="text-sm font-semibold">{m.label}</span>
                <span className={`text-[10px] tabular-nums font-bold ${isActive ? 'text-white/80' : 'text-white/50'}`}>
                  {formatPosts(m.posts)}
                </span>
                <span className="text-[10px] font-black" style={{ color: isActive ? '#fff' : t.to }}>
                  #{i + 1}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

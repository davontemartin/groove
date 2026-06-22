import { SparkleIcon } from './Icon.jsx';
import { vibeMatches, themes } from '../data/mockData.js';

export default function VibeMatches() {
  return (
    <section className="glass rounded-3xl p-4 shadow-card">
      <div className="flex items-center gap-2 px-1">
        <SparkleIcon className="text-accent-pink" style={{ color: '#ff5ea8' }} />
        <h2 className="font-display text-sm font-bold tracking-tight uppercase">Your vibe tribe</h2>
      </div>
      <ul className="mt-3 space-y-1.5">
        {vibeMatches.map(({ user, match, sharedMood, theme }) => {
          const t = themes[theme];
          return (
            <li
              key={user.id}
              className="relative flex items-center gap-3 p-2 rounded-2xl overflow-hidden transition group hover:bg-white/[0.05]"
            >
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-1 rounded-r-full"
                style={{ background: `linear-gradient(180deg, ${t.from}, ${t.to})` }}
              />
              <img src={user.avatar} alt={user.username} className="h-11 w-11 rounded-full object-cover ring-2 ring-white/15" />
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm truncate">{user.displayName}</p>
                <p className="text-xs text-white/55 truncate">shares · {sharedMood}</p>
              </div>
              <div className="text-right">
                <div
                  className="text-xs font-black tabular-nums"
                  style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {match}%
                </div>
                <button className="btn-press mt-0.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-ink-950 hover:brightness-95">
                  Follow
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

import { vibesNow, themes } from '../data/mockData.js';
import { PlusIcon } from './Icon.jsx';

export default function VibesNow({ onAdd }) {
  return (
    <section className="overflow-visible">
      <div className="flex items-center justify-between mb-2 px-1">
        <h2 className="font-display text-xs font-bold tracking-[0.22em] uppercase text-white/70">
          Vibes now
        </h2>
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
          {vibesNow.filter((v) => v.live).length} live
        </span>
      </div>
      <div className="overflow-visible">
        <ul
          className="flex gap-4 overflow-x-auto no-scrollbar py-3 px-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%)',
          }}
        >
          {vibesNow.map((v) => {
            const t = themes[v.theme];
            return (
              <li key={v.id} className="shrink-0">
                <button
                  onClick={v.isMe ? onAdd : undefined}
                  className="btn-press group flex flex-col items-center gap-1.5 w-[68px]"
                  aria-label={v.isMe ? 'Add your vibe' : `${v.user.displayName} ${v.label}`}
                >
                  <div className="relative">
                    {/* Glow behind avatar */}
                    <span
                      aria-hidden
                      className="absolute -inset-2 rounded-full blur-xl opacity-50 group-hover:opacity-90 transition"
                      style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
                    />
                    {/* Gradient ring — image sits inside with a thin transparent gap */}
                    <span
                      className="relative grid place-items-center h-[62px] w-[62px] rounded-full"
                      style={{ backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.via}, ${t.to})` }}
                    >
                      {v.isMe ? (
                        <span className="grid place-items-center h-14 w-14 rounded-full bg-ink-950 text-white/70">
                          <PlusIcon size={20} />
                        </span>
                      ) : (
                        <img
                          src={v.user.avatar}
                          alt={v.user.username}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                      )}
                    </span>
                    {/* Emoji badge */}
                    <span className="absolute -bottom-1 -right-1 grid place-items-center h-6 w-6 rounded-full text-sm bg-ink-950 ring-2 ring-ink-950 shadow">
                      {v.emoji}
                    </span>
                    {v.live && (
                      <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-accent-lime ring-2 ring-ink-950 animate-pulse" />
                    )}
                  </div>
                  <span className="text-[11px] font-semibold text-white/85 truncate w-full text-center">
                    {v.isMe ? 'you' : v.user.displayName.toLowerCase()}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-white/40 -mt-1">
                    {v.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

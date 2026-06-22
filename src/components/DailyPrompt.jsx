import { dailyPrompt, themes } from '../data/mockData.js';
import { SparkleIcon } from './Icon.jsx';

export default function DailyPrompt({ onJoin }) {
  const t = themes[dailyPrompt.theme];
  return (
    <section
      className="relative overflow-hidden rounded-3xl sticker"
      style={{ backgroundImage: `linear-gradient(120deg, ${t.from}, ${t.via}, ${t.to})`, color: t.text }}
    >
      <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.12] mix-blend-overlay" />
      <div aria-hidden className="absolute -top-16 -right-12 h-44 w-44 rounded-full bg-white/30 blur-3xl animate-blob-a" />
      <div aria-hidden className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-black/30 blur-3xl animate-blob-b" />

      <div className="relative p-5 flex items-center gap-4">
        <div className="shrink-0 grid place-items-center h-16 w-16 rounded-2xl bg-white/15 ring-1 ring-white/30 text-4xl shadow-xl">
          {dailyPrompt.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-bold opacity-90">
            <SparkleIcon size={12} />
            Daily prompt · ends in {dailyPrompt.endsIn}
          </div>
          <p className="mt-1 font-display font-extrabold text-lg sm:text-xl leading-tight tracking-tight">
            {dailyPrompt.prompt}
          </p>
          <div className="mt-1 flex items-center gap-2 text-[11px] font-bold opacity-85">
            <div className="flex -space-x-1.5">
              {['32', '12', '49'].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/40?img=${n}`}
                  alt=""
                  className="h-5 w-5 rounded-full ring-2 ring-white/60 object-cover"
                />
              ))}
            </div>
            <span>{dailyPrompt.participants.toLocaleString()} have joined</span>
          </div>
        </div>
        <button
          onClick={onJoin}
          className="btn-press hidden sm:block shrink-0 px-4 py-2.5 rounded-full bg-white text-ink-950 text-sm font-bold shadow-xl"
        >
          Join →
        </button>
      </div>
      <button
        onClick={onJoin}
        className="btn-press sm:hidden block w-full text-center py-3 bg-black/25 backdrop-blur text-sm font-bold tracking-wide"
      >
        Join the prompt →
      </button>
    </section>
  );
}

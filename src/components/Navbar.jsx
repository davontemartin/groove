import { HomeIcon, PlusIcon, UserIcon, SparkleIcon } from './Icon.jsx';

const tabs = [
  { id: 'feed', label: 'Feed', Icon: HomeIcon },
  { id: 'create', label: 'Create', Icon: PlusIcon },
  { id: 'profile', label: 'Profile', Icon: UserIcon },
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="relative h-9 w-9 rounded-2xl grid place-items-center shadow-lg"
        style={{ backgroundImage: 'linear-gradient(135deg,#7c5cff 0%,#ff5ea8 55%,#ffd166 100%)' }}
      >
        <SparkleIcon className="text-white drop-shadow" size={18} />
      </div>
      <div className="leading-none">
        <div className="font-display font-extrabold text-xl tracking-tight">Groove</div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 -mt-0.5">mood · music</div>
      </div>
    </div>
  );
}

export default function Navbar({ active, onChange, onOpenCreate }) {
  const handleClick = (id) => {
    if (id === 'create') return onOpenCreate?.();
    onChange(id);
  };

  return (
    <>
      {/* Desktop top nav */}
      <header className="hidden md:flex sticky top-0 z-40 w-full justify-center px-6 py-4 bg-ink-950/60 backdrop-blur-xl border-b border-white/5">
        <div className="w-full max-w-5xl flex items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-1 p-1 rounded-full glass">
            {tabs.map(({ id, label, Icon }) => {
              const isActive = id !== 'create' && active === id;
              const isCreate = id === 'create';
              return (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`btn-press flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                    ${isCreate
                      ? 'text-white shadow-glow hover:brightness-110'
                      : isActive
                        ? 'bg-white text-ink-950'
                        : 'text-white/75 hover:text-white hover:bg-white/5'}`}
                  style={isCreate ? { backgroundImage: 'linear-gradient(135deg,#7c5cff,#ff5ea8)' } : undefined}
                >
                  <Icon size={16} />
                  {label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-40 px-4 pt-[calc(env(safe-area-inset-top)+0.75rem)] pb-3 bg-ink-950/75 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between">
          <Logo />
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/55 font-bold">{active}</span>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 bg-ink-950/80 backdrop-blur-2xl border-t border-white/5">
        <ul className="flex items-center justify-around">
          {tabs.map(({ id, label, Icon }) => {
            const isCreate = id === 'create';
            const isActive = !isCreate && active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  aria-label={label}
                  className={`btn-press flex flex-col items-center justify-center gap-1 w-16 h-14 rounded-2xl
                    ${isCreate ? 'text-white' : isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <Icon size={22} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
                  {isActive && <span className="h-1 w-6 rounded-full bg-white" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

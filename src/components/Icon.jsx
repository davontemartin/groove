// Tiny inline SVG icon set so we don't pull in an icon library.
// Each icon accepts className + size props.

const base = 'shrink-0';

export function HomeIcon({ className = '', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function PlusIcon({ className = '', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} stroke="currentColor" strokeWidth="2.25" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function UserIcon({ className = '', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}

export function HeartIcon({ className = '', size = 22, filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`${base} ${className}`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
    </svg>
  );
}

export function CommentIcon({ className = '', size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
    </svg>
  );
}

export function PlayIcon({ className = '', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.55.83l10.7-6.86a1 1 0 0 0 0-1.66L9.55 4.31A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

export function PauseIcon({ className = '', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
      <rect x="6" y="5" width="4" height="14" rx="1.2" />
      <rect x="14" y="5" width="4" height="14" rx="1.2" />
    </svg>
  );
}

export function SearchIcon({ className = '', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function XIcon({ className = '', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function SpotifyIcon({ className = '', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.75.75 0 0 1-1 .25c-2.8-1.7-6.3-2-10.5-1a.75.75 0 0 1-.3-1.45c4.6-1 8.5-.7 11.6 1.2.35.2.45.65.2 1Zm1.2-2.9a.9.9 0 0 1-1.25.3c-3.2-2-8.1-2.55-11.9-1.4a.9.9 0 1 1-.5-1.7c4.35-1.3 9.75-.7 13.4 1.55.4.25.55.85.25 1.25Zm.1-3.05c-3.85-2.3-10.2-2.5-13.85-1.4a1.05 1.05 0 1 1-.6-2c4.2-1.3 11.2-1.05 15.6 1.55a1.05 1.05 0 1 1-1.15 1.85Z" />
    </svg>
  );
}

export function AppleMusicIcon({ className = '', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
      <path d="M17.5 2h-11A3.5 3.5 0 0 0 3 5.5v13A3.5 3.5 0 0 0 6.5 22h11a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 17.5 2Zm-1.15 4.45v8.3a2.6 2.6 0 1 1-1.4-2.3V8.6l-4.8 1.05v7.2a2.6 2.6 0 1 1-1.4-2.3V7.85l7.6-1.65v.25Z" />
    </svg>
  );
}

export function SoundcloudIcon({ className = '', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
      <path d="M2 14.5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3ZM4.25 12.25a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1-1.5 0v-5.75ZM6.5 11a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0v-7ZM8.75 9.5a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1-1.5 0V9.5Zm2.25-1a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1-1.5 0V8.5ZM14 7.25c.3-.16.65-.25 1-.25.45 0 .87.13 1.22.35A5.5 5.5 0 0 1 22 12.5a5.5 5.5 0 0 1-5.5 5.5H14.75a.75.75 0 0 1-.75-.75V7.25Z" />
    </svg>
  );
}

export function TrendIcon({ className = '', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

export function SparkleIcon({ className = '', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`${base} ${className}`} fill="currentColor">
      <path d="M12 2 13.8 8.2 20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" opacity=".9" />
      <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
    </svg>
  );
}

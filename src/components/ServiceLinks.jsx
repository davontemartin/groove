import { SpotifyIcon, AppleMusicIcon, SoundcloudIcon } from './Icon.jsx';

// Build a search URL for each streaming service. We use search (rather than
// a direct track link) because the mock catalog has no service-specific IDs.
export function serviceUrls(song) {
  const q = encodeURIComponent(`${song.title} ${song.artist}`);
  return {
    spotify: `https://open.spotify.com/search/${q}`,
    apple: `https://music.apple.com/search?term=${q}`,
    soundcloud: `https://soundcloud.com/search?q=${q}`,
  };
}

const SERVICES = [
  {
    id: 'spotify',
    label: 'Spotify',
    Icon: SpotifyIcon,
    bg: '#1DB954',
    fg: '#000',
  },
  {
    id: 'apple',
    label: 'Apple Music',
    Icon: AppleMusicIcon,
    bg: 'linear-gradient(135deg,#ff2d7a,#ff5e8e)',
    fg: '#fff',
  },
  {
    id: 'soundcloud',
    label: 'SoundCloud',
    Icon: SoundcloudIcon,
    bg: '#ff5500',
    fg: '#fff',
  },
];

/**
 * Icon-only streaming service links. variant="icon" fits in compact card
 * footers; variant="chip" shows the label (used on Profile).
 */
export default function ServiceLinks({ song, variant = 'icon', size = 34, className = '' }) {
  const urls = serviceUrls(song);
  if (variant === 'chip') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {SERVICES.map(({ id, label, Icon, bg, fg }) => (
          <a
            key={id}
            href={urls[id]}
            target="_blank"
            rel="noreferrer"
            className="btn-press inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold shadow-md"
            style={{ background: bg, color: fg }}
          >
            <Icon size={14} />
            {label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {SERVICES.map(({ id, label, Icon, bg, fg }) => (
        <a
          key={id}
          href={urls[id]}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open in ${label}`}
          title={`Open in ${label}`}
          onClick={(e) => e.stopPropagation()}
          className="btn-press grid place-items-center rounded-full shadow-md"
          style={{ width: size, height: size, background: bg, color: fg }}
        >
          <Icon size={Math.round(size * 0.5)} />
        </a>
      ))}
    </div>
  );
}

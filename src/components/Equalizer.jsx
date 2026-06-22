// 4-bar animated equalizer. When `playing` is false, bars freeze at mid-height.
export default function Equalizer({ playing = true, size = 14, className = '' }) {
  const heights = [0.5, 1, 0.75, 1];
  return (
    <div
      aria-hidden
      className={`inline-flex items-end gap-[2px] ${className}`}
      style={{ height: size }}
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className={`eq-bar ${playing ? `animate-eq-${i + 1}` : ''}`}
          style={{ height: `${h * 100}%`, animationPlayState: playing ? 'running' : 'paused' }}
        />
      ))}
    </div>
  );
}

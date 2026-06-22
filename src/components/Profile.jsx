import { useState } from 'react';
import { currentUser, myPosts, themes } from '../data/mockData.js';
import { SparkleIcon, SpotifyIcon, AppleMusicIcon, SoundcloudIcon, PlayIcon } from './Icon.jsx';

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="font-display text-xl font-extrabold tabular-nums">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">{label}</div>
    </div>
  );
}

function PostTile({ post }) {
  const t = themes[post.theme] || themes.violet;
  return (
    <button className="group relative aspect-square rounded-3xl overflow-hidden sticker focus:outline-none">
      <img
        src={post.song.cover}
        alt={post.song.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: `linear-gradient(180deg, transparent 40%, ${t.ink}dd 100%)` }}
      />
      <div aria-hidden className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 p-3 flex flex-col justify-between text-left text-white">
        <div className="flex items-center justify-between">
          <span className="text-2xl leading-none drop-shadow">{post.mood.emoji}</span>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{post.createdAt}</span>
        </div>
        <div>
          <p className="font-display font-bold text-sm truncate">{post.mood.text}</p>
          <p className="text-[11px] opacity-80 truncate">{post.song.title}</p>
        </div>
      </div>
      <span className="absolute top-3 right-3 h-8 w-8 grid place-items-center rounded-full bg-white text-ink-950 opacity-0 group-hover:opacity-100 transition shadow-lg">
        <PlayIcon size={14} />
      </span>
    </button>
  );
}

function PostRow({ post }) {
  const t = themes[post.theme] || themes.violet;
  return (
    <div className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white/[0.05]">
      <div className="relative shrink-0">
        <img src={post.song.cover} alt="" className="h-14 w-14 rounded-xl object-cover" />
        <span
          aria-hidden
          className="absolute -inset-0.5 rounded-[14px] -z-10 blur-md opacity-60"
          style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold truncate">
          {post.mood.emoji} {post.mood.text}
        </p>
        <p className="text-xs text-white/55 truncate">
          {post.song.title} · {post.song.artist}
        </p>
      </div>
      <span className="text-[11px] text-white/40 font-bold uppercase tracking-widest">{post.createdAt}</span>
    </div>
  );
}

export default function Profile() {
  const [layout, setLayout] = useState('grid');

  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-6 py-5 md:py-8 space-y-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[32px] sticker">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(135deg,#7c5cff 0%,#ff5ea8 55%,#ffd166 100%)' }}
        />
        <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.12] mix-blend-overlay" />
        <div aria-hidden className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/25 blur-3xl animate-blob-a" />
        <div aria-hidden className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/30 blur-3xl animate-blob-b" />

        <div className="relative p-5 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-5">
            <div className="relative">
              <img
                src={currentUser.avatar}
                alt={currentUser.username}
                className="h-24 w-24 md:h-28 md:w-28 rounded-3xl object-cover ring-4 ring-white/60 shadow-2xl"
              />
              <span className="absolute -bottom-2 -right-2 bg-white text-ink-950 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full shadow-lg">
                LVL 12
              </span>
            </div>
            <div className="flex-1 min-w-0 text-white">
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold opacity-85">@{currentUser.username}</p>
              <h1 className="font-display font-extrabold tracking-tight text-4xl md:text-5xl leading-[0.95] mt-1">
                {currentUser.displayName}
              </h1>
              <p className="mt-2 text-white/90 text-sm max-w-md">{currentUser.bio}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <button className="btn-press px-5 py-2.5 rounded-full bg-white text-ink-950 text-sm font-bold">
                Edit profile
              </button>
              <button className="btn-press px-5 py-2.5 rounded-full bg-black/30 text-white text-sm font-bold hover:bg-black/40">
                Share
              </button>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-white/75 mb-1.5">Connect</p>
              <div className="flex flex-wrap gap-2">
                <button className="btn-press inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DB954] text-black text-xs font-bold">
                  <SpotifyIcon size={14} /> Spotify
                </button>
                <button
                  className="btn-press inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold"
                  style={{ backgroundImage: 'linear-gradient(135deg,#ff2d7a,#ff5e8e)' }}
                >
                  <AppleMusicIcon size={14} /> Apple Music
                </button>
                <button className="btn-press inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff5500] text-white text-xs font-bold">
                  <SoundcloudIcon size={14} /> SoundCloud
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 glass-strong rounded-2xl p-3 text-white">
            <Stat label="Posts" value={myPosts.length} />
            <Stat label="Followers" value="1.2k" />
            <Stat label="Following" value="284" />
          </div>
        </div>
      </section>

      {/* Vibe summary + Top moods */}
      <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-4">
        <div className="relative overflow-hidden rounded-3xl p-5 sticker" style={{ backgroundImage: 'linear-gradient(135deg,#0b3d91,#2dc6ff,#56f0c8)' }}>
          <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.1] mix-blend-overlay" />
          <div className="relative">
            <div className="flex items-center gap-2">
              <SparkleIcon />
              <h2 className="font-display text-sm font-bold tracking-tight uppercase">Vibe summary</h2>
            </div>
            <p className="mt-3 font-display text-2xl md:text-3xl font-extrabold leading-[1.05]">
              {currentUser.vibeSummary}
            </p>
            <p className="mt-2 text-sm text-white/85">
              Based on your last 30 days of moods and listens.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['late-night', 'chill', 'introspective', 'lo-fi', 'moody'].map((tag) => (
                <span key={tag} className="text-xs font-bold px-2.5 py-1 rounded-full bg-black/30 text-white">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-5 shadow-card">
          <h2 className="font-display text-sm font-bold tracking-tight uppercase">Top moods</h2>
          <ul className="mt-3 space-y-2.5">
            {currentUser.topMoods.map((m) => {
              const t = themes[m.theme];
              const max = currentUser.topMoods[0].count;
              const pct = Math.max(12, Math.round((m.count / max) * 100));
              return (
                <li key={m.label} className="flex items-center gap-3">
                  <span
                    className="text-xl w-9 h-9 grid place-items-center rounded-xl shadow-md shrink-0"
                    style={{ backgroundImage: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
                  >
                    {m.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-sm">
                      <span className="truncate font-semibold">{m.label}</span>
                      <span className="text-white/40 tabular-nums text-xs">×{m.count}</span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, backgroundImage: `linear-gradient(90deg, ${t.from}, ${t.to})` }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Posts */}
      <section>
        <div className="flex items-center justify-between px-1 mb-3">
          <h2 className="font-display text-xl font-extrabold tracking-tight">Your posts</h2>
          <div className="flex items-center gap-1 p-1 rounded-full glass text-xs">
            {['grid', 'list'].map((v) => (
              <button
                key={v}
                onClick={() => setLayout(v)}
                className={`btn-press px-3 py-1.5 rounded-full capitalize font-bold ${
                  layout === v ? 'bg-white text-ink-950' : 'text-white/60 hover:text-white'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {layout === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {myPosts.map((p) => (
              <PostTile key={p.id} post={p} />
            ))}
          </div>
        ) : (
          <div className="glass rounded-3xl p-2 shadow-card divide-y divide-white/5">
            {myPosts.map((p) => (
              <PostRow key={p.id} post={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

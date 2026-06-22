import { useMemo, useState } from 'react';
import PostCard from './PostCard.jsx';
import TrendingMoods from './TrendingMoods.jsx';
import VibeMatches from './VibeMatches.jsx';
import VibesNow from './VibesNow.jsx';
import DailyPrompt from './DailyPrompt.jsx';
import { posts, trendingMoods } from '../data/mockData.js';
import { XIcon } from './Icon.jsx';

export default function Feed({ onPlay, nowPlayingId, onOpenComments, onOpenCreate, onOpenStory }) {
  const [activeMood, setActiveMood] = useState(null); // trending mood label

  // Trending → theme lookup so we can match posts even when the label differs.
  const moodTheme = useMemo(() => {
    const hit = trendingMoods.find((m) => m.label === activeMood);
    return hit?.theme || null;
  }, [activeMood]);

  const filteredPosts = useMemo(() => {
    if (!activeMood) return posts;
    return posts.filter(
      (p) => p.mood.text === activeMood || p.theme === moodTheme,
    );
  }, [activeMood, moodTheme]);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 md:px-6 py-5 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6">
        {/* Main column */}
        <div className="space-y-5">
          <VibesNow onAdd={onOpenCreate} onOpenStory={onOpenStory} />
          <DailyPrompt onJoin={onOpenCreate} />

          {/* Mobile trending row */}
          <div className="md:hidden">
            <TrendingMoods activeMood={activeMood} onSelectMood={setActiveMood} />
          </div>

          {/* Active filter banner */}
          {activeMood && (
            <div className="flex items-center justify-between glass rounded-2xl px-4 py-2.5 animate-fade-in">
              <p className="text-sm">
                <span className="text-white/55 uppercase tracking-widest text-[10px] font-bold mr-2">Filter</span>
                <span className="font-bold">{activeMood}</span>
                <span className="text-white/50 ml-2 text-xs">· {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}</span>
              </p>
              <button
                onClick={() => setActiveMood(null)}
                className="btn-press inline-flex items-center gap-1 text-xs font-bold text-white/80 hover:text-white"
              >
                <XIcon size={12} /> clear
              </button>
            </div>
          )}

          <div className="space-y-5">
            {filteredPosts.map((p) => (
              <PostCard
                key={p.id}
                post={p}
                onPlay={onPlay}
                isPlaying={nowPlayingId === p.id}
                onOpenComments={onOpenComments}
              />
            ))}
            {filteredPosts.length === 0 && (
              <div className="glass rounded-3xl p-10 text-center">
                <p className="text-3xl mb-2">🕳️</p>
                <p className="font-display font-bold text-lg">No one's shared this vibe yet.</p>
                <p className="text-white/60 text-sm mt-1">Be first — tap + to drop one.</p>
                <button
                  onClick={onOpenCreate}
                  className="btn-press mt-4 px-4 py-2 rounded-full bg-white text-ink-950 text-sm font-bold"
                >
                  Post the first
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Desktop side column */}
        <aside className="hidden md:block space-y-4 sticky top-24 self-start">
          <TrendingMoods activeMood={activeMood} onSelectMood={setActiveMood} />
          <VibeMatches />
          <p className="text-[11px] text-white/30 px-2">
            © {new Date().getFullYear()} Groove · share your mood
          </p>
        </aside>

        {/* Mobile vibe matches at the bottom */}
        <div className="md:hidden">
          <VibeMatches />
        </div>
      </div>
    </div>
  );
}

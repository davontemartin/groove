import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Feed from './components/Feed.jsx';
import Profile from './components/Profile.jsx';
import CreatePostModal from './components/CreatePostModal.jsx';
import MiniPlayer from './components/MiniPlayer.jsx';
import CommentsSheet from './components/CommentsSheet.jsx';
import StoryPlayer from './components/StoryPlayer.jsx';

export default function App() {
  const [tab, setTab] = useState('feed');
  const [createOpen, setCreateOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [commentsPost, setCommentsPost] = useState(null);
  const [storyVibe, setStoryVibe] = useState(null);

  const handlePlay = (post) => {
    if (nowPlaying?.id === post.id) {
      setIsPlaying((p) => !p);
      return;
    }
    setNowPlaying(post);
    setIsPlaying(true);
  };

  const handleCreate = (post) => {
    setToast(`Posted · ${post.emoji} ${post.moodText}`);
    setTimeout(() => setToast(null), 2200);
  };

  return (
    <div className="stage min-h-full pb-[calc(env(safe-area-inset-bottom)+120px)] md:pb-24">
      <div className="stack">
        <Navbar
          active={tab}
          onChange={setTab}
          onOpenCreate={() => setCreateOpen(true)}
        />

        <main className="animate-fade-in">
          {tab === 'feed' && (
            <Feed
              onPlay={handlePlay}
              nowPlayingId={isPlaying ? nowPlaying?.id : null}
              onOpenComments={(post) => setCommentsPost(post)}
              onOpenCreate={() => setCreateOpen(true)}
              onOpenStory={(vibe) => setStoryVibe(vibe)}
            />
          )}
          {tab === 'profile' && <Profile />}
        </main>

        <MiniPlayer
          post={nowPlaying}
          isPlaying={isPlaying}
          onToggle={() => setIsPlaying((p) => !p)}
          onClose={() => {
            setNowPlaying(null);
            setIsPlaying(false);
          }}
        />

        <CreatePostModal
          open={createOpen}
          onClose={() => setCreateOpen(false)}
          onCreate={handleCreate}
        />

        <CommentsSheet
          open={!!commentsPost}
          post={commentsPost}
          onClose={() => setCommentsPost(null)}
        />

        <StoryPlayer vibe={storyVibe} onClose={() => setStoryVibe(null)} />

        {toast && (
          <div className="fixed z-50 left-1/2 -translate-x-1/2 bottom-40 md:bottom-24 px-4 py-2.5 rounded-full bg-white text-ink-950 text-sm font-bold shadow-xl animate-slide-up">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}

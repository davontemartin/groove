// Mock data for Groove. Each post has a `theme` that drives per-card gradients
// and ambient glows — the core of the product's visual identity.

export const themes = {
  violet: {
    from: '#7c5cff', via: '#b069ff', to: '#ff5ea8',
    ink: '#1a0f3a', chip: '#2a1760', text: '#f3ecff',
  },
  fire: {
    from: '#ff3b3b', via: '#ff7a1a', to: '#ffd166',
    ink: '#2a0808', chip: '#5a1400', text: '#fff4d6',
  },
  villain: {
    from: '#1f0033', via: '#7a0b5e', to: '#ff2d7a',
    ink: '#150025', chip: '#3d0a3a', text: '#ffd6ea',
  },
  ocean: {
    from: '#0b3d91', via: '#2dc6ff', to: '#56f0c8',
    ink: '#03132e', chip: '#0b2a55', text: '#e0fbff',
  },
  sunset: {
    from: '#ff9966', via: '#ff5e8e', to: '#a55cff',
    ink: '#2a0f1c', chip: '#4a1a2e', text: '#ffe9de',
  },
  matrix: {
    from: '#00c2a8', via: '#3fffb6', to: '#c3ff6b',
    ink: '#02201c', chip: '#063d2f', text: '#e9ffe1',
  },
  latte: {
    from: '#caa07a', via: '#eccbb0', to: '#fff0d6',
    ink: '#241a10', chip: '#4a3320', text: '#fff7e8',
  },
};

export const currentUser = {
  id: 'u_me',
  username: 'you',
  displayName: 'You',
  avatar: 'https://i.pravatar.cc/160?img=47',
  bio: 'collecting moods one song at a time',
  vibeSummary: 'Mostly late-night · chill · introspective',
  topMoods: [
    { emoji: '🌧️', label: 'late night thoughts', count: 12, theme: 'violet' },
    { emoji: '💪', label: 'gym locked in', count: 8, theme: 'fire' },
    { emoji: '😈', label: 'villain mode', count: 5, theme: 'villain' },
    { emoji: '☕️', label: 'slow morning', count: 4, theme: 'latte' },
  ],
};

export const users = [
  { id: 'u1', username: 'maya.wav', displayName: 'Maya', avatar: 'https://i.pravatar.cc/160?img=32' },
  { id: 'u2', username: 'dre_', displayName: 'Dre', avatar: 'https://i.pravatar.cc/160?img=12' },
  { id: 'u3', username: 'nova.fm', displayName: 'Nova', avatar: 'https://i.pravatar.cc/160?img=5' },
  { id: 'u4', username: 'kenji808', displayName: 'Kenji', avatar: 'https://i.pravatar.cc/160?img=15' },
  { id: 'u5', username: 'sol.a', displayName: 'Sol', avatar: 'https://i.pravatar.cc/160?img=49' },
  currentUser,
];

// Real album covers for the POC. iTunes artwork (mzstatic.com) and the
// Cover Art Archive both allow hotlinking and are reliable image hosts.
export const songs = [
  { id: 's1', title: 'Midnight Drive', artist: 'Cloud Atlas', album: 'After Hours', cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2b/b9/fe/2bb9fef5-d7f3-8345-25a9-db0e79fde4e4/20UMGIM11048.rgb.jpg/600x600bb.jpg', durationSec: 218 },
  { id: 's2', title: 'Gasoline', artist: 'Halsey', album: 'Manic', cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/09/50/2f/09502f77-c2c9-0ae0-7e21-945a6bc80119/19UMGIM75722.rgb.jpg/600x600bb.jpg', durationSec: 202 },
  { id: 's3', title: 'Pursuit of Happiness', artist: 'Kid Cudi', album: 'Man on the Moon', cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c5/bb/ae/c5bbae2c-68ce-4efe-e0fa-2ee8769e46f3/09UMGIM33418.rgb.jpg/600x600bb.jpg', durationSec: 294 },
  { id: 's4', title: 'Redbone', artist: 'Childish Gambino', album: 'Awaken, My Love!', cover: 'https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png', durationSec: 326 },
  { id: 's5', title: 'Seigfried', artist: 'Frank Ocean', album: 'Blonde', cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/500px-Blonde_-_Frank_Ocean.jpeg', durationSec: 355 },
  { id: 's6', title: 'Sunflower', artist: 'Rex Orange County', album: 'Apricot Princess', cover: 'https://upload.wikimedia.org/wikipedia/en/0/03/Apricot_Princess.jpg', durationSec: 204 },
  { id: 's7', title: 'Circles', artist: 'Post Malone', album: "Hollywood's Bleeding", cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/6c/13/27/6c13279a-399b-2631-3cb2-6233a91d7a53/19UMGIM78325.rgb.jpg/600x600bb.jpg', durationSec: 215 },
  { id: 's8', title: 'Ivy', artist: 'Frank Ocean', album: 'Blonde', cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/500px-Blonde_-_Frank_Ocean.jpeg', durationSec: 249 },
  { id: 's9', title: 'HUMBLE.', artist: 'Kendrick Lamar', album: 'DAMN.', cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ab/16/ef/ab16efe9-e7f1-66ec-021c-5592a23f0f9e/17UMGIM88793.rgb.jpg/600x600bb.jpg', durationSec: 177 },
  { id: 's10', title: 'Sunset Lover', artist: 'Petit Biscuit', album: 'Presence', cover: 'https://coverartarchive.org/release/371abd1c-91c5-4216-a0f1-316f7a449400/19471770953-500.jpg', durationSec: 234 },
];

const byId = (id) => songs.find((s) => s.id === id);
const userById = (id) => users.find((u) => u.id === id);

export const posts = [
  { id: 'p1', user: userById('u1'), mood: { emoji: '🌧️', text: 'late night thoughts' }, song: byId('s5'), theme: 'violet', likes: 248, liked: false, comments: 12, createdAt: '2h' },
  { id: 'p2', user: userById('u2'), mood: { emoji: '💪', text: 'gym locked in' }, song: byId('s9'), theme: 'fire', likes: 1024, liked: true, comments: 38, createdAt: '4h' },
  { id: 'p3', user: userById('u3'), mood: { emoji: '😔', text: 'thinking about life' }, song: byId('s3'), theme: 'ocean', likes: 512, liked: false, comments: 21, createdAt: '6h' },
  { id: 'p4', user: userById('u4'), mood: { emoji: '😈', text: 'villain mode' }, song: byId('s2'), theme: 'villain', likes: 892, liked: false, comments: 44, createdAt: '8h' },
  { id: 'p5', user: userById('u5'), mood: { emoji: '☀️', text: 'golden hour feels' }, song: byId('s10'), theme: 'sunset', likes: 321, liked: true, comments: 9, createdAt: '12h' },
  { id: 'p6', user: userById('u1'), mood: { emoji: '🧠', text: 'deep in the zone' }, song: byId('s8'), theme: 'matrix', likes: 174, liked: false, comments: 5, createdAt: '1d' },
];

export const myPosts = [
  { id: 'mp1', mood: { emoji: '🌧️', text: 'late night thoughts' }, song: byId('s5'), theme: 'violet', createdAt: '2d' },
  { id: 'mp2', mood: { emoji: '💪', text: 'gym locked in' }, song: byId('s9'), theme: 'fire', createdAt: '3d' },
  { id: 'mp3', mood: { emoji: '😈', text: 'villain mode' }, song: byId('s2'), theme: 'villain', createdAt: '5d' },
  { id: 'mp4', mood: { emoji: '☕️', text: 'slow morning' }, song: byId('s6'), theme: 'latte', createdAt: '1w' },
  { id: 'mp5', mood: { emoji: '🎧', text: 'solo walk energy' }, song: byId('s10'), theme: 'sunset', createdAt: '1w' },
  { id: 'mp6', mood: { emoji: '✨', text: 'good things coming' }, song: byId('s4'), theme: 'matrix', createdAt: '2w' },
];

export const trendingMoods = [
  { emoji: '😈', label: 'villain mode', posts: 12400, theme: 'villain' },
  { emoji: '🌧️', label: 'late night thoughts', posts: 9800, theme: 'violet' },
  { emoji: '💪', label: 'gym locked in', posts: 8300, theme: 'fire' },
  { emoji: '☀️', label: 'golden hour feels', posts: 4100, theme: 'sunset' },
  { emoji: '🧠', label: 'deep in the zone', posts: 3700, theme: 'matrix' },
  { emoji: '💔', label: 'soft sad hours', posts: 2900, theme: 'ocean' },
];

export const vibeMatches = [
  { user: userById('u1'), match: 92, sharedMood: 'late night thoughts', theme: 'violet' },
  { user: userById('u3'), match: 88, sharedMood: 'thinking about life', theme: 'ocean' },
  { user: userById('u5'), match: 81, sharedMood: 'golden hour feels', theme: 'sunset' },
];

export const moodEmojis = ['🌧️', '💪', '😈', '😔', '☀️', '🧠', '💔', '🎧', '☕️', '✨', '🔥', '🌙', '🩵', '🥲', '🦋'];

// "Vibes now" — friends actively listening / posting in the last hour.
export const vibesNow = [
  { id: 'v_me', user: currentUser, emoji: '✨', label: 'add yours', isMe: true, theme: 'violet' },
  { id: 'v1', user: userById('u1'), emoji: '🌧️', label: 'now', live: true, theme: 'violet' },
  { id: 'v2', user: userById('u2'), emoji: '💪', label: '2m', live: true, theme: 'fire' },
  { id: 'v3', user: userById('u4'), emoji: '😈', label: '5m', live: true, theme: 'villain' },
  { id: 'v4', user: userById('u3'), emoji: '🧠', label: '14m', theme: 'matrix' },
  { id: 'v5', user: userById('u5'), emoji: '☀️', label: '32m', theme: 'sunset' },
];

// Daily prompt rotates every 24h in production; static here for the demo.
export const dailyPrompt = {
  emoji: '🌙',
  prompt: 'Drop a song that feels like 5AM',
  participants: 1284,
  endsIn: '6h 42m',
  theme: 'violet',
};

// Reaction palette — used on every post for richer-than-like engagement.
export const reactionPalette = [
  { id: 'fire', emoji: '🔥', color: '#ff7a1a' },
  { id: 'cry', emoji: '🥲', color: '#4ed8ff' },
  { id: 'mind', emoji: '🤯', color: '#ffd166' },
  { id: 'heart', emoji: '💜', color: '#b69cff' },
  { id: 'evil', emoji: '😈', color: '#ff2d7a' },
];

// Sample comments per post id.
export const commentsByPost = {
  p1: [
    { id: 'c1', user: userById('u3'), text: 'this hit different at 2am 🌙', reactions: 12, createdAt: '1h' },
    { id: 'c2', user: userById('u5'), text: 'Frank never misses', reactions: 8, createdAt: '45m' },
    { id: 'c3', user: userById('u2'), text: 'saving this to my late-night playlist', reactions: 3, createdAt: '12m' },
  ],
  p2: [
    { id: 'c4', user: userById('u4'), text: 'GYM SESSION LOCKED IN 🔥🔥', reactions: 24, createdAt: '3h' },
    { id: 'c5', user: userById('u1'), text: 'adding to the pre-lift queue', reactions: 6, createdAt: '1h' },
  ],
  p3: [
    { id: 'c6', user: userById('u1'), text: 'felt this in my soul', reactions: 15, createdAt: '4h' },
  ],
  p4: [
    { id: 'c7', user: userById('u2'), text: 'villain era confirmed 😈', reactions: 19, createdAt: '5h' },
    { id: 'c8', user: userById('u3'), text: 'main character energy', reactions: 11, createdAt: '2h' },
  ],
  p5: [
    { id: 'c9', user: userById('u4'), text: 'golden hour > everything', reactions: 9, createdAt: '8h' },
  ],
  p6: [
    { id: 'c10', user: userById('u5'), text: 'flow state activated 🧠', reactions: 4, createdAt: '20h' },
  ],
};

export const quickReplies = ['🔥 fire', '🥲 felt that', 'on repeat', 'who is this', '+ playlist'];


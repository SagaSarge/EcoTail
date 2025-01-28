import { create } from 'zustand';

interface WasteData {
  id: string;
  type: string;
  amount: number;
  date: string;
  trend: number;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  progress: number;
  participants: number;
  deadline: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  progress: number;
}

interface CommunityPost {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

interface UserProfile {
  name: string;
  bio: string;
  level: number;
  points: number;
  avatar?: string;
}

interface UserStats {
  wasteReduced: number;
  weeklyReduction: number;
  points: number;
  rank: number;
  followers: number;
  impact: number;
}

interface AppDataStore {
  wasteData: WasteData[];
  challenges: Challenge[];
  achievements: Achievement[];
  communityPosts: CommunityPost[];
  userProfile: UserProfile;
  userStats: UserStats;
  setWasteData: (data: WasteData[]) => void;
  setChallenges: (challenges: Challenge[]) => void;
  setAchievements: (achievements: Achievement[]) => void;
  setCommunityPosts: (posts: CommunityPost[]) => void;
  setUserProfile: (profile: UserProfile) => void;
  setUserStats: (stats: UserStats) => void;
  addWasteEntry: (entry: WasteData) => void;
  updateChallenge: (id: string, progress: number) => void;
  likePost: (id: string) => void;
  updateUserPoints: (points: number) => void;
}

export const useAppDataStore = create<AppDataStore>((set) => ({
  wasteData: [
    {
      id: '1',
      type: 'Plastic',
      amount: 2.5,
      date: '2024-03-15',
      trend: -15,
    },
    {
      id: '2',
      type: 'Paper',
      amount: 1.8,
      date: '2024-03-14',
      trend: -8,
    },
  ],
  challenges: [
    {
      id: '1',
      title: 'Zero Waste Week',
      description: 'Reduce your waste to zero for a week',
      points: 500,
      progress: 65,
      participants: 2547,
      deadline: '5 days left',
    },
    {
      id: '2',
      title: 'Plastic Free Challenge',
      description: 'Avoid single-use plastics for 30 days',
      points: 1000,
      progress: 45,
      participants: 1823,
      deadline: '15 days left',
    },
  ],
  achievements: [
    {
      id: '1',
      title: 'Waste Warrior',
      description: 'Reduce waste by 50%',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'green',
      progress: 75,
    },
    {
      id: '2',
      title: 'Community Leader',
      description: 'Help 10 others reduce waste',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      color: 'blue',
      progress: 40,
    },
  ],
  communityPosts: [
    {
      id: '1',
      author: {
        name: 'Sarah Johnson',
        avatar: '/avatars/sarah.jpg',
      },
      content: 'Just completed my first week of zero waste! It\'s amazing how much we can reduce with small changes. 🌱 #ZeroWaste #Sustainability',
      image: '/posts/zero-waste.jpg',
      timestamp: '2 hours ago',
      likes: 128,
      comments: 24,
      shares: 12,
    },
  ],
  userProfile: {
    name: 'Alex Green',
    bio: 'Passionate about sustainability and zero waste living',
    level: 15,
    points: 2750,
  },
  userStats: {
    wasteReduced: 45,
    weeklyReduction: 12,
    points: 2750,
    rank: 156,
    followers: 243,
    impact: 89,
  },
  setWasteData: (data) => set({ wasteData: data }),
  setChallenges: (challenges) => set({ challenges }),
  setAchievements: (achievements) => set({ achievements }),
  setCommunityPosts: (posts) => set({ communityPosts: posts }),
  setUserProfile: (profile) => set({ userProfile: profile }),
  setUserStats: (stats) => set({ userStats: stats }),
  addWasteEntry: (entry) =>
    set((state) => ({
      wasteData: [entry, ...state.wasteData],
    })),
  updateChallenge: (id, progress) =>
    set((state) => ({
      challenges: state.challenges.map((challenge) =>
        challenge.id === id ? { ...challenge, progress } : challenge
      ),
    })),
  likePost: (id) =>
    set((state) => ({
      communityPosts: state.communityPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      ),
    })),
  updateUserPoints: (points) =>
    set((state) => ({
      userProfile: { ...state.userProfile, points },
      userStats: { ...state.userStats, points },
    })),
})); 
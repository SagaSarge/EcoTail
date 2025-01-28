import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  image?: string;
}

export const CommunityPage: React.FC = () => {
  const samplePosts: Post[] = [
    {
      id: '1',
      author: {
        name: 'Sarah Chen',
        avatar: '/avatars/sarah.jpg'
      },
      content: 'Just switched to reusable containers this week! Already reduced my plastic waste by 60%.',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      image: '/posts/containers.jpg'
    },
    {
      id: '2',
      author: {
        name: 'Mike Rodriguez',
        avatar: '/avatars/mike.jpg'
      },
      content: 'Hit my monthly recycling goal! Thanks to everyone who shared their tips.',
      timestamp: '5 hours ago',
      likes: 42,
      comments: 12
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Community</h1>
        <p className="text-zinc-400">Connect with eco-conscious individuals</p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="p-4 text-center bg-zinc-800/50 backdrop-blur">
          <p className="text-2xl font-bold">156</p>
          <p className="text-zinc-400 text-sm">Global Rank</p>
        </Card>
        <Card className="p-4 text-center bg-zinc-800/50 backdrop-blur">
          <p className="text-2xl font-bold">1.2k</p>
          <p className="text-zinc-400 text-sm">Followers</p>
        </Card>
        <Card className="p-4 text-center bg-zinc-800/50 backdrop-blur">
          <p className="text-2xl font-bold">89</p>
          <p className="text-zinc-400 text-sm">Impact Score</p>
        </Card>
      </div>

      {/* Community Feed */}
      <div className="space-y-4">
        {samplePosts.map((post) => (
          <Card key={post.id} className="p-4 bg-zinc-800/50 backdrop-blur">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-zinc-700" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{post.author.name}</h3>
                  <span className="text-sm text-zinc-400">{post.timestamp}</span>
                </div>
                <p className="mt-2 text-zinc-300">{post.content}</p>
                {post.image && (
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <div className="h-48 bg-zinc-700" />
                  </div>
                )}
                <div className="flex items-center space-x-4 mt-3 text-sm text-zinc-400">
                  <button className="flex items-center space-x-1 hover:text-white transition-colors">
                    <span>❤️</span>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-white transition-colors">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-white transition-colors">
                    <span>↗️</span>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trending Challenges */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Trending Challenges</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-zinc-800/50 backdrop-blur">
            <h3 className="font-semibold mb-2">Zero Waste Week</h3>
            <p className="text-sm text-zinc-400 mb-3">Join 2,456 participants</p>
            <button className="w-full py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 transition-colors">
              Join Challenge
            </button>
          </Card>
          <Card className="p-4 bg-zinc-800/50 backdrop-blur">
            <h3 className="font-semibold mb-2">Plastic-Free July</h3>
            <p className="text-sm text-zinc-400 mb-3">Join 1,892 participants</p>
            <button className="w-full py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 transition-colors">
              Join Challenge
            </button>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}; 
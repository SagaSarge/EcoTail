import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useAppDataStore } from '../../../stores/appDataStore';

const Community: React.FC = () => {
  const { communityPosts, userStats } = useAppDataStore();

  return (
    <div className="min-h-full p-4 space-y-6">
      {/* Community Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">{userStats.rank}</div>
          <div className="text-sm text-gray-400">Global Rank</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">{userStats.followers}</div>
          <div className="text-sm text-gray-400">Followers</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-400">{userStats.impact}</div>
          <div className="text-sm text-gray-400">Impact Score</div>
        </Card>
      </div>

      {/* Community Feed */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Community Feed</h2>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
            Share Update
          </button>
        </div>

        <div className="space-y-4">
          {communityPosts.map((post) => (
            <Card key={post.id} className="p-4 space-y-4">
              {/* Post Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-400">{post.timestamp}</div>
                </div>
              </div>

              {/* Post Content */}
              <div>
                <p className="text-gray-300">{post.content}</p>
                {post.image && (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={post.image}
                    alt="Post content"
                    className="mt-3 rounded-lg w-full h-48 object-cover"
                  />
                )}
              </div>

              {/* Post Stats */}
              <div className="flex items-center gap-6 pt-2 border-t border-gray-800">
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>{post.shares}</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Trending Challenges */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Trending Challenges</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold">Zero Waste Week</h3>
              <p className="text-sm text-gray-400">Join 2,547 participants</p>
              <button className="w-full px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
                Join Challenge
              </button>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold">Plastic Free July</h3>
              <p className="text-sm text-gray-400">Join 5,129 participants</p>
              <button className="w-full px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors">
                Join Challenge
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community; 
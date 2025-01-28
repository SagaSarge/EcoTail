import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: number;
  progress: number;
  deadline: string;
}

export const GamificationPage: React.FC = () => {
  const challenges: Challenge[] = [
    {
      id: '1',
      title: 'Zero Waste Week',
      description: 'Produce no landfill waste for 7 days',
      reward: 500,
      progress: 70,
      deadline: '5 days left'
    },
    {
      id: '2',
      title: 'Recycling Master',
      description: 'Correctly sort 100 items',
      reward: 300,
      progress: 45,
      deadline: '3 days left'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6"
    >
      {/* Header with Points */}
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Rewards</h1>
            <p className="text-zinc-400">Complete challenges, earn points</p>
          </div>
          <Card className="px-4 py-2 bg-zinc-800/50 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">⭐</span>
              <span className="font-bold">2,450</span>
              <span className="text-zinc-400">points</span>
            </div>
          </Card>
        </div>

        {/* Current Level */}
        <Card className="p-6 bg-zinc-800/50 backdrop-blur mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Level 12</h2>
              <p className="text-zinc-400">Eco Warrior</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-2xl">
              🌱
            </div>
          </div>
          <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-500"
              style={{ width: '75%' }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-zinc-400">2,450 / 3,000 XP</span>
            <span className="text-zinc-400">Next: Eco Champion</span>
          </div>
        </Card>

        {/* Active Challenges */}
        <h2 className="text-xl font-semibold mb-4">Active Challenges</h2>
        <div className="space-y-4 mb-8">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="p-4 bg-zinc-800/50 backdrop-blur">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold">{challenge.title}</h3>
                  <p className="text-sm text-zinc-400">{challenge.description}</p>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <span>⭐</span>
                  <span>{challenge.reward}</span>
                </div>
              </div>
              <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                  style={{ width: `${challenge.progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-zinc-400">{challenge.progress}% complete</span>
                <span className="text-sm text-zinc-400">{challenge.deadline}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-zinc-800/50 backdrop-blur text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl mx-auto mb-2">
              🏆
            </div>
            <h3 className="font-semibold">First Steps</h3>
            <p className="text-sm text-zinc-400">Started your eco journey</p>
          </Card>
          <Card className="p-4 bg-zinc-800/50 backdrop-blur text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl mx-auto mb-2">
              ♻️
            </div>
            <h3 className="font-semibold">Recycling Pro</h3>
            <p className="text-sm text-zinc-400">Recycled 100 items</p>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}; 
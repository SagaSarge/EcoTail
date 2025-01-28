import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  icon: string;
}

export const RecommendationsPage: React.FC = () => {
  const recommendations: Recommendation[] = [
    {
      id: '1',
      title: 'Switch to Reusable Containers',
      description: 'Replace single-use plastic containers with durable, reusable alternatives for food storage.',
      impact: 'Reduce plastic waste by 5kg/month',
      difficulty: 'Easy',
      category: 'Plastic Reduction',
      icon: '🥡'
    },
    {
      id: '2',
      title: 'Start Composting',
      description: 'Begin composting food scraps and yard waste to create nutrient-rich soil.',
      impact: 'Reduce organic waste by 8kg/month',
      difficulty: 'Medium',
      category: 'Organic Waste',
      icon: '🌱'
    },
    {
      id: '3',
      title: 'Optimize Recycling',
      description: 'Improve your recycling habits by properly sorting and cleaning recyclables.',
      impact: 'Increase recycling rate by 15%',
      difficulty: 'Easy',
      category: 'Recycling',
      icon: '♻️'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-emerald-300';
      case 'Medium':
        return 'text-amber-300';
      case 'Hard':
        return 'text-rose-300';
      default:
        return 'text-zinc-300';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6"
    >
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
            Smart Recommendations
          </h1>
          <p className="text-zinc-300">AI-powered suggestions based on your habits</p>
        </div>

        {/* AI Insight */}
        <Card variant="light" className="p-6 mb-8 group">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-300/30 flex items-center justify-center text-2xl transform group-hover:scale-105 transition-transform">
              🤖
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-white/90">AI Insight</h2>
              <p className="text-zinc-300">
                Based on your recent activity, you could reduce your waste by 25% by implementing these personalized recommendations.
              </p>
            </div>
          </div>
        </Card>

        {/* Recommendations */}
        <div className="space-y-4">
          {recommendations.map((recommendation) => (
            <Card key={recommendation.id} variant="light" className="p-4 group">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-2xl transform group-hover:scale-105 transition-transform">
                  {recommendation.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-white/90">{recommendation.title}</h3>
                      <p className="text-sm text-zinc-300">{recommendation.category}</p>
                    </div>
                    <span className={`text-sm ${getDifficultyColor(recommendation.difficulty)}`}>
                      {recommendation.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300 mb-2">{recommendation.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-emerald-300">🎯</span>
                    <span className="text-sm text-zinc-300">{recommendation.impact}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Tips</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card variant="light" className="p-4 group">
              <div className="text-center">
                <span className="text-2xl mb-2 block transform group-hover:scale-105 transition-transform">💡</span>
                <h3 className="font-semibold mb-1 text-white group-hover:text-white/90">Meal Planning</h3>
                <p className="text-sm text-zinc-300">Plan meals to reduce food waste</p>
              </div>
            </Card>
            <Card variant="light" className="p-4 group">
              <div className="text-center">
                <span className="text-2xl mb-2 block transform group-hover:scale-105 transition-transform">🛍️</span>
                <h3 className="font-semibold mb-1 text-white group-hover:text-white/90">Bring Your Bags</h3>
                <p className="text-sm text-zinc-300">Use reusable shopping bags</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 
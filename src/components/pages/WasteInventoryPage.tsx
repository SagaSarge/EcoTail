import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

interface WasteItem {
  id: string;
  name: string;
  category: 'plastic' | 'paper' | 'glass' | 'metal' | 'organic' | 'other';
  weight: number;
  timestamp: string;
  recyclable: boolean;
}

const getIconForCategory = (category: WasteItem['category']) => {
  switch (category) {
    case 'plastic':
      return 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16';
    case 'paper':
      return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
    case 'glass':
      return 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10';
    case 'metal':
      return 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4';
    case 'organic':
      return 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z';
    default:
      return 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z';
  }
};

const getCategoryColor = (category: WasteItem['category']) => {
  switch (category) {
    case 'plastic':
      return 'text-blue-400';
    case 'paper':
      return 'text-yellow-400';
    case 'glass':
      return 'text-emerald-400';
    case 'metal':
      return 'text-gray-400';
    case 'organic':
      return 'text-green-400';
    default:
      return 'text-gray-400';
  }
};

export const WasteInventoryPage: React.FC = () => {
  // This would typically come from your data store
  const wasteItems: WasteItem[] = [
    {
      id: '1',
      name: 'Plastic Water Bottle',
      category: 'plastic',
      weight: 0.15,
      timestamp: '2024-02-20T10:30:00',
      recyclable: true
    },
    {
      id: '2',
      name: 'Newspaper',
      category: 'paper',
      weight: 0.25,
      timestamp: '2024-02-20T11:15:00',
      recyclable: true
    },
    {
      id: '3',
      name: 'Glass Jar',
      category: 'glass',
      weight: 0.45,
      timestamp: '2024-02-20T12:00:00',
      recyclable: true
    },
    {
      id: '4',
      name: 'Aluminum Can',
      category: 'metal',
      weight: 0.1,
      timestamp: '2024-02-20T13:30:00',
      recyclable: true
    },
    {
      id: '5',
      name: 'Food Scraps',
      category: 'organic',
      weight: 0.3,
      timestamp: '2024-02-20T14:45:00',
      recyclable: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Current Waste Inventory
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Track and manage your waste items in real-time
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="text-center">
              <h3 className="text-gray-400 font-medium mb-2">Total Items</h3>
              <p className="text-3xl font-bold text-white">{wasteItems.length}</p>
            </div>
          </Card>
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="text-center">
              <h3 className="text-gray-400 font-medium mb-2">Total Weight</h3>
              <p className="text-3xl font-bold text-white">
                {wasteItems.reduce((acc, item) => acc + item.weight, 0).toFixed(2)} kg
              </p>
            </div>
          </Card>
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="text-center">
              <h3 className="text-gray-400 font-medium mb-2">Recyclable Items</h3>
              <p className="text-3xl font-bold text-white">
                {wasteItems.filter(item => item.recyclable).length}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Waste Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wasteItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10 hover:bg-white/5 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/5">
                    <svg 
                      className={`w-6 h-6 ${getCategoryColor(item.category)}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d={getIconForCategory(item.category)} 
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-white">{item.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {new Date(item.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {item.weight} kg
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-sm text-gray-400">Category:</span>
                      <span className={`text-sm font-medium ${getCategoryColor(item.category)} capitalize`}>
                        {item.category}
                      </span>
                      {item.recyclable && (
                        <span className="ml-auto px-2 py-1 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-400">
                          Recyclable
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 
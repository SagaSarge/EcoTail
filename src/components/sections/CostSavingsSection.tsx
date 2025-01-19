import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SavingsCard {
  title: string;
  amount: string;
  period: string;
  description: string;
  features: string[];
  icon: string;
}

interface Testimonial {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
  savings: string;
  duration: string;
  type: 'reordering' | 'monthly' | 'annual';
}

const testimonials: Testimonial[] = [
  // Smart Reordering testimonials
  {
    id: '1',
    thumbnail: '/testimonials/user1.jpg',
    title: 'How Auto-Reordering Simplified My Life',
    author: 'James T.',
    savings: '25% off',
    duration: '1:45',
    type: 'reordering'
  },
  {
    id: '2',
    thumbnail: '/testimonials/user2.jpg',
    title: 'From Manual to Automated Ordering',
    author: 'Emma S.',
    savings: '30% off',
    duration: '2:10',
    type: 'reordering'
  },
  // Monthly Savings testimonials
  {
    id: '3',
    thumbnail: '/testimonials/user3.jpg',
    title: 'Saving $45 Every Month with Smart Waste',
    author: 'Sarah M.',
    savings: '$45/mo',
    duration: '1:24',
    type: 'monthly'
  },
  {
    id: '4',
    thumbnail: '/testimonials/user4.jpg',
    title: 'Monthly Budget Optimization Success',
    author: 'David P.',
    savings: '$52/mo',
    duration: '1:55',
    type: 'monthly'
  },
  // Annual Benefits testimonials
  {
    id: '5',
    thumbnail: '/testimonials/user5.jpg',
    title: 'My First Year with EcoTail',
    author: 'Mike R.',
    savings: '$540/yr',
    duration: '2:15',
    type: 'annual'
  },
  {
    id: '6',
    thumbnail: '/testimonials/user6.jpg',
    title: 'Long-term Savings & Sustainability',
    author: 'Lisa K.',
    savings: '$620/yr',
    duration: '2:30',
    type: 'annual'
  }
];

const savingsTypes: SavingsCard[] = [
  {
    title: 'Smart Reordering',
    amount: '25%',
    period: 'average savings',
    description: 'Closed-loop recycling system with automated reordering',
    features: [
      'Automated sustainable product reordering',
      'Exclusive manufacturer partnership discounts',
      'Proactive inventory management'
    ],
    icon: '♻️'
  },
  {
    title: 'Monthly Savings',
    amount: '$45',
    period: 'per month',
    description: 'Smart recommendations and usage optimization to reduce waste costs',
    features: [
      'AI-powered waste reduction recommendations',
      'Product size and usage optimization',
      'Real-time budget tracking and analysis'
    ],
    icon: '📊'
  },
  {
    title: 'Annual Benefits',
    amount: '$540',
    period: 'per year',
    description: 'Long-term savings through sustainable practices and rewards',
    features: [
      'Reusable canister system eliminates bag costs',
      'Recycling rewards and eco-friendly discounts',
      'Lower energy bills through carbon tracking'
    ],
    icon: '🌱'
  }
];

export const CostSavingsSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Get testimonials for the active tab
  const getActiveTestimonials = () => {
    const types = ['reordering', 'monthly', 'annual'];
    return testimonials.filter(video => video.type === types[activeTab]);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-emerald-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-gray-900/[0.03]" style={{ backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="relative">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-emerald-200 to-green-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
                Smart Cost Savings
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Transform your waste management into a sustainable savings system with AI-powered optimization
          </p>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-12">
            {savingsTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-white text-gray-600 hover:bg-emerald-50'
                }`}
              >
                <span className="mr-2">{type.icon}</span>
                {type.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Info Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
            <div className="flex items-baseline mb-6">
              <span className="font-mono text-4xl font-bold tracking-tight text-emerald-500 tabular-nums">
                {savingsTypes[activeTab].amount}
              </span>
              <span className="ml-2 text-gray-500">{savingsTypes[activeTab].period}</span>
            </div>
            <p className="text-gray-600 text-lg mb-8">{savingsTypes[activeTab].description}</p>
            <ul className="space-y-4">
              {savingsTypes[activeTab].features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Success Stories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {getActiveTestimonials().map((video) => (
                <div
                  key={video.id}
                  className="group relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* TikTok-style overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* Video Info Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 space-y-2">
                    {/* Author Info */}
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                        {video.author.charAt(0)}
                      </div>
                      <span className="text-white font-medium text-sm">@{video.author.toLowerCase().replace(' ', '')}</span>
                    </div>
                    
                    {/* Title */}
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {video.title}
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between text-xs text-white/90">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{video.savings}</span>
                      </div>
                      <span>{video.duration}</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* TikTok-style Side Actions */}
                  <div className="absolute right-2 bottom-20 flex flex-col items-center space-y-4">
                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/60 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/60 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/60 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={() => navigate('/calculate-savings')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
          >
            Calculate Your Potential Savings
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedVideo(null)}>
          <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full mx-4">
            <div className="aspect-video bg-gray-900">
              {/* Video player would go here */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}; 
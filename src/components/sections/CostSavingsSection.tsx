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

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
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
      'Smart container system reduces waste costs',
      'Recycling rewards and eco-friendly discounts',
      'Predictive analytics optimize resource usage'
    ],
    icon: '🌱'
  }
];

const videoComments: Record<string, Comment[]> = {
  '1': [
    {
      id: 'c1',
      author: 'Maria Rodriguez',
      avatar: '/avatars/maria.jpg',
      content: "As a restaurant owner in Miami, I was skeptical at first. But the auto-reordering feature has saved my staff so much time! We've cut our waste management costs by 32% in just two months. Increíble! 🌮♻️",
      timestamp: '2 days ago',
      likes: 45
    },
    {
      id: 'c2',
      author: 'Dr. Patel',
      avatar: '/avatars/patel.jpg',
      content: "I implemented this system in my dental practice. The smart container system has made our medical waste management so much more efficient. It's brilliant how it tracks different types of waste separately!",
      timestamp: '1 week ago',
      likes: 38,
      replies: [
        {
          id: 'r1',
          author: 'Sarah Chen',
          avatar: '/avatars/sarah.jpg',
          content: "Same experience at our clinic! The compliance tracking feature is a game-changer for medical waste. Have you tried the new analytics dashboard?",
          timestamp: '5 days ago',
          likes: 12
        }
      ]
    },
    {
      id: 'c3',
      author: 'Jamal Thompson',
      avatar: '/avatars/jamal.jpg',
      content: "Running a small grocery store in Atlanta, and this system paid for itself in 3 months! The predictive ordering is spot on - we've reduced our spoilage by 40%. Real talk, it's like having an AI inventory manager. 💯",
      timestamp: '3 days ago',
      likes: 67
    },
    {
      id: 'c4',
      author: 'Aisha Mohammed',
      avatar: '/avatars/aisha.jpg',
      content: "Our mosque's community center has been using this for 6 months now. The recycling rewards program has helped us fund other sustainability initiatives. The customer support team is so respectful and helpful too! 🌟",
      timestamp: '1 day ago',
      likes: 29
    }
  ],
  '2': [
    {
      id: 'c5',
      author: 'Chef Kim',
      avatar: '/avatars/kim.jpg',
      content: "Finally, someone who understands restaurant waste management! The automated system learns from our busy/slow periods and adjusts accordingly. No more overordering during slow seasons. 식당 운영이 한결 편해졌어요! 👨‍🍳",
      timestamp: '3 days ago',
      likes: 83,
      replies: [
        {
          id: 'r2',
          author: 'Emma S.',
          avatar: '/avatars/emma.jpg',
          content: "The seasonal prediction feature is amazing! It's like it knows our business rhythm.",
          timestamp: '2 days ago',
          likes: 15
        }
      ]
    },
    {
      id: 'c6',
      author: 'Giovanni Rossi',
      avatar: '/avatars/giovanni.jpg',
      content: "Ho implementato questo sistema nel mio ristorante italiano e i risultati sono incredibili! The AI even predicted our increased mozzarella usage during summer events. Perfetto! 🇮🇹🍝",
      timestamp: '1 week ago',
      likes: 56
    },
    {
      id: 'c7',
      author: 'Tech Startup Guy',
      avatar: '/avatars/startup.jpg',
      content: "Our office kitchen used to be chaos. Now everything is automated and our team can focus on building products instead of managing supplies. Plus, the data visualization is *chef's kiss* 📊",
      timestamp: '4 days ago',
      likes: 42
    }
  ],
  '3': [
    {
      id: 'c8',
      author: 'Lisa Chen',
      avatar: '/avatars/lisa.jpg',
      content: "The monthly savings are real! Our hotel chain implemented this across 5 locations and we're seeing consistent 45-50% reduction in waste management costs. The staff training module made adoption super smooth too! 🏨✨",
      timestamp: '2 days ago',
      likes: 91,
      replies: [
        {
          id: 'r3',
          author: 'Hotel Manager Mike',
          avatar: '/avatars/mike.jpg',
          content: "Which training module worked best for your housekeeping staff? We're about to roll this out too!",
          timestamp: '1 day ago',
          likes: 8
        }
      ]
    },
    {
      id: 'c9',
      author: 'Raj Patel',
      avatar: '/avatars/raj.jpg',
      content: "As a property manager for 12 apartment buildings, this system has been a game-changer. The monthly reports help us identify which buildings need improvement. Already saved ₹3.2 lakhs this month! 🏢",
      timestamp: '5 days ago',
      likes: 73
    },
    {
      id: 'c10',
      author: 'Sarah Williams',
      avatar: '/avatars/sarah-w.jpg',
      content: "Small business owner here! The monthly cost tracking helped us identify waste patterns we never noticed before. It's like having a sustainability consultant on staff 24/7 💚",
      timestamp: '1 week ago',
      likes: 45
    }
  ],
  '4': [
    {
      id: 'c11',
      author: 'David Park',
      avatar: '/avatars/david.jpg',
      content: "Our university campus reduced waste costs by $52k/month! The real-time monitoring helps us adjust during events and semester breaks. Even the students are getting involved with the gamification features 🎓♻️",
      timestamp: '3 days ago',
      likes: 128,
      replies: [
        {
          id: 'r4',
          author: 'Student Council Rep',
          avatar: '/avatars/student.jpg',
          content: "The recycling competition between dorms is getting intense! We're currently in the lead 🏆",
          timestamp: '2 days ago',
          likes: 34
        }
      ]
    },
    {
      id: 'c12',
      author: 'Chef André',
      avatar: '/avatars/andre.jpg',
      content: "Mon restaurant étoilé a réduit ses déchets de 60%! The precision of the waste tracking matches our kitchen's standards. Magnifique! 🇫🇷👨‍🍳",
      timestamp: '1 week ago',
      likes: 89
    }
  ],
  '5': [
    {
      id: 'c13',
      author: 'Michael Roberts',
      avatar: '/avatars/michael.jpg',
      content: "First year results are in: $540k saved across our retail chain! The predictive analytics for seasonal merchandise waste is spot-on. Black Friday planning is so much easier now 📈",
      timestamp: '4 days ago',
      likes: 156,
      replies: [
        {
          id: 'r5',
          author: 'Retail Manager Amy',
          avatar: '/avatars/amy.jpg',
          content: "The holiday season predictions were incredibly accurate. No more overflowing dumpsters or emergency pickups!",
          timestamp: '2 days ago',
          likes: 28
        }
      ]
    },
    {
      id: 'c14',
      author: 'Dr. Zhang',
      avatar: '/avatars/zhang.jpg',
      content: "医院使用这个系统一年了，效果非常好！The annual compliance reports are automatically generated, saving our staff countless hours. Perfect for healthcare facilities! 🏥",
      timestamp: '1 week ago',
      likes: 94
    }
  ],
  '6': [
    {
      id: 'c15',
      author: 'Lisa Kumar',
      avatar: '/avatars/lisa-k.jpg',
      content: "The long-term impact is incredible! Our tech campus has reduced waste by 72% over 18 months. The sustainability metrics helped us achieve LEED certification too! 🌱🏢",
      timestamp: '2 days ago',
      likes: 187,
      replies: [
        {
          id: 'r6',
          author: 'Green Building Consultant',
          avatar: '/avatars/consultant.jpg',
          content: "Your case study is becoming a benchmark for corporate sustainability. Those numbers are impressive!",
          timestamp: '1 day ago',
          likes: 45
        }
      ]
    },
    {
      id: 'c16',
      author: 'Carlos Mendoza',
      avatar: '/avatars/carlos.jpg',
      content: "¡Increíble transformación! Our hotel chain's waste management costs dropped 62% in the first year. The ROI exceeded our expectations, and our guests love our eco-initiatives! 🏨♻️",
      timestamp: '5 days ago',
      likes: 134
    },
    {
      id: 'c17',
      author: 'Yuki Tanaka',
      avatar: '/avatars/yuki.jpg',
      content: "私たちのレストランチェーンでの1年間の結果です：経費削減に大成功！The AI suggestions keep getting smarter, and our staff loves the intuitive interface. サステナビリティと効率性の完璧な組み合わせ！🍱",
      timestamp: '1 week ago',
      likes: 112
    }
  ]
};

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
              <span className="absolute -inset-2 blur-2xl bg-[#0F9D58]/20 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0F9D58] to-[#0F9D58]/80">
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
                    ? 'bg-[#0F9D58] text-white shadow-lg shadow-[#0F9D58]/25'
                    : 'bg-white text-gray-600 hover:bg-[#0F9D58]/10'
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

      {/* Updated Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedVideo(null);
        }}>
          <div className="bg-white rounded-2xl overflow-hidden w-full mx-4 max-h-[90vh] lg:max-w-7xl lg:flex">
            {/* Video Section */}
            <div className="lg:flex-1">
              <div className="aspect-video bg-gray-900">
                {/* Video player would go here */}
                <div className="w-full h-full flex items-center justify-center text-white/60">
                  Video Player Placeholder
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonials.find(t => t.id === selectedVideo)?.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {testimonials.find(t => t.id === selectedVideo)?.author} • {' '}
                  {testimonials.find(t => t.id === selectedVideo)?.savings} saved
                </p>
              </div>
            </div>

            {/* Comments Section - Desktop: Right, Mobile: Bottom */}
            <div className="lg:w-[400px] max-h-[50vh] lg:max-h-none overflow-y-auto bg-gray-50">
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Comments</h4>
                
                {/* Comments List */}
                <div className="space-y-4">
                  {videoComments[selectedVideo]?.map((comment) => (
                    <div key={comment.id} className="space-y-4">
                      {/* Main Comment */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                          <img src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-white p-3 rounded-2xl shadow-sm">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-gray-900">{comment.author}</span>
                              <span className="text-xs text-gray-500">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-600 text-sm">{comment.content}</p>
                          </div>
                          <div className="flex items-center gap-4 mt-1 ml-1">
                            <button className="text-xs text-gray-500 hover:text-[#0F9D58] flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                              {comment.likes}
                            </button>
                            <button className="text-xs text-gray-500 hover:text-[#0F9D58]">Reply</button>
                          </div>
                        </div>
                      </div>

                      {/* Replies */}
                      {comment.replies?.map((reply) => (
                        <div key={reply.id} className="flex gap-3 ml-12">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            <img src={reply.avatar} alt={reply.author} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-white p-3 rounded-2xl shadow-sm">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium text-gray-900">{reply.author}</span>
                                <span className="text-xs text-gray-500">{reply.timestamp}</span>
                              </div>
                              <p className="text-gray-600 text-sm">{reply.content}</p>
                            </div>
                            <div className="flex items-center gap-4 mt-1 ml-1">
                              <button className="text-xs text-gray-500 hover:text-[#0F9D58] flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                {reply.likes}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Comment Input */}
                <div className="sticky bottom-0 bg-gray-50 pt-4 mt-4 border-t border-gray-200">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:border-[#0F9D58] focus:ring-1 focus:ring-[#0F9D58] outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}; 
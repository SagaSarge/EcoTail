import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    bgColor: string;
  };
  readTime: string;
  date: string;
  visualType: 'stats' | 'tips' | 'future';
}

const BlogPostVisual: React.FC<{ type: BlogPost['visualType'] }> = ({ type }) => {
  switch (type) {
    case 'stats':
      return (
        <div className="h-48 bg-gradient-to-br from-[#4285F4]/5 to-[#4285F4]/10 p-4 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4 w-full">
            <motion.div 
              initial={{ height: '20%' }}
              animate={{ height: '75%' }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="bg-[#4285F4] rounded-t-lg self-end"
            />
            <motion.div 
              initial={{ height: '40%' }}
              animate={{ height: '25%' }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.3 }}
              className="bg-[#4285F4] rounded-t-lg self-end"
            />
            <motion.div 
              initial={{ height: '60%' }}
              animate={{ height: '15%' }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.6 }}
              className="bg-[#4285F4] rounded-t-lg self-end"
            />
            <div className="absolute text-[#4285F4] font-bold text-lg">-75%</div>
          </div>
        </div>
      );
    
    case 'tips':
      return (
        <div className="h-48 bg-gradient-to-br from-[#0F9D58]/5 to-[#0F9D58]/10 p-4 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6 w-full">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', delay: i * 0.3 }}
                className="bg-[#0F9D58] rounded-lg h-16 flex items-center justify-center"
              >
                <span className="text-white text-2xl">
                  {i === 0 ? '♻️' : i === 1 ? '💡' : i === 2 ? '🌱' : '⭐️'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      );
    
    case 'future':
      return (
        <div className="h-48 bg-gradient-to-br from-[#F4B400]/5 to-[#F4B400]/10 p-4 flex items-center justify-center relative overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="absolute w-32 h-32 border-4 border-[#F4B400] rounded-full"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="absolute w-24 h-24 border-4 border-[#F4B400]/60 rounded-full"
          />
          <span className="text-4xl">🤖</span>
        </div>
      );
  }
};

const blogPosts: BlogPost[] = [
  {
    title: "Family Reduces Waste by 75% with Smart Bin",
    excerpt: "Discover how the Anderson family revolutionized their recycling habits and earned substantial rewards with their Smart Bin.",
    category: "Success Story",
    author: {
      name: "David Anderson",
      role: "EcoTale Community Lead",
      bgColor: "bg-[#4285F4]"
    },
    readTime: "4 min read",
    date: "Apr 2, 2024",
    visualType: 'stats'
  },
  {
    title: "Maximize Your Recycling Rewards: Expert Tips",
    excerpt: "Learn insider tips from recycling experts on how to get the most value from your recyclable items.",
    category: "Tips & Tricks",
    author: {
      name: "Lisa Chen",
      role: "Sustainability Expert",
      bgColor: "bg-[#0F9D58]"
    },
    readTime: "5 min read",
    date: "Mar 28, 2024",
    visualType: 'tips'
  },
  {
    title: "Smart Recycling: The Future is Here",
    excerpt: "Explore how AI-powered recycling is transforming waste management and creating a more sustainable future.",
    category: "Guide",
    author: {
      name: "Dr. James Martinez",
      role: "Environmental Scientist",
      bgColor: "bg-[#F4B400]"
    },
    readTime: "6 min read",
    date: "Mar 25, 2024",
    visualType: 'future'
  }
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#4285F4]/10 to-[#4285F4]/5 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0F9D58]/10 to-[#0F9D58]/5 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#4285F4] font-semibold tracking-wide uppercase">SUCCESS STORIES</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            See How Families
            <span className="relative mx-2">
              <span className="absolute -inset-2 blur-2xl bg-[#4285F4]/20 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#4285F4]/80">Save & Earn</span>
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from households turning their recycling into rewards
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  post.category === 'Success Story' ? 'bg-[#4285F4]/10 text-[#4285F4]' :
                  post.category === 'Tips & Tricks' ? 'bg-[#0F9D58]/10 text-[#0F9D58]' :
                  'bg-[#F4B400]/10 text-[#F4B400]'
                }`}>
                  {post.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <BlogPostVisual type={post.visualType} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className={`w-10 h-10 rounded-full ${post.author.bgColor} flex items-center justify-center text-white font-medium`}
                    >
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{post.author.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <p className="text-xs text-gray-400">{post.readTime}</p>
                  </div>
                </div>
              </div>

              {/* Read more link */}
              <div className="px-6 pb-6">
                <button className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#4285F4]/10 text-[#4285F4] font-medium hover:bg-[#4285F4] hover:text-white transition-all duration-300">
                  Read Full Story
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}; 
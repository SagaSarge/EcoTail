import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost, BlogPostVisual } from '../sections/BlogSection';

interface BlogListingPageProps {
  posts: BlogPost[];
}

export const BlogListingPage: React.FC<BlogListingPageProps> = ({ posts }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReadMore = (post: BlogPost) => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#4285F4] font-semibold tracking-wide uppercase">OUR BLOG</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Stories & Insights
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover success stories, expert tips, and the latest innovations in smart recycling
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

              {/* Visual */}
              <div className="relative h-48 overflow-hidden">
                <BlogPostVisual type={post.visualType} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors duration-300">
                  {post.title}
                </h2>
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

              {/* Read more button */}
              <div className="px-6 pb-6">
                <button 
                  onClick={() => handleReadMore(post)}
                  className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#4285F4]/10 text-[#4285F4] font-medium hover:bg-[#4285F4] hover:text-white transition-all duration-300"
                >
                  Read Full Story
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListingPage; 
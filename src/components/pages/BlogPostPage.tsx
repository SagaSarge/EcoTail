import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost } from '../sections/BlogSection';

interface BlogPostPageProps {
  posts: BlogPost[];
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ posts }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = posts.find(p => {
    const postSlug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return postSlug === slug;
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="text-[#4285F4] hover:underline"
          >
            ← Back to blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-24"
    >
      <article className="max-w-3xl mx-auto px-4">
        {/* Back button */}
        <button 
          onClick={() => navigate('/blog')}
          className="text-[#4285F4] hover:underline mb-8 inline-flex items-center"
        >
          ← Back to blog
        </button>

        {/* Category badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            post.category === 'Success Story' ? 'bg-[#4285F4]/10 text-[#4285F4]' :
            post.category === 'Tips & Tricks' ? 'bg-[#0F9D58]/10 text-[#0F9D58]' :
            'bg-[#F4B400]/10 text-[#F4B400]'
          }`}>
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Author info */}
        <div className="flex items-center mb-8">
          <div 
            className={`w-12 h-12 rounded-full ${post.author.bgColor} flex items-center justify-center text-white font-medium text-lg`}
          >
            {post.author.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="ml-4">
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">{post.author.role}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-gray-500">{post.date}</p>
            <p className="text-sm text-gray-400">{post.readTime}</p>
          </div>
        </div>

        {/* Visual */}
        <div className="rounded-2xl overflow-hidden mb-8 bg-gray-50">
          <div className="h-64 sm:h-96">
            <BlogPostVisual type={post.visualType} />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            {post.excerpt}
          </p>
          {/* Add more content sections based on the post type */}
          {post.category === 'Success Story' && (
            <>
              <h2>The Challenge</h2>
              <p>Like many families, the Andersons were looking for ways to reduce their environmental impact while managing their household expenses efficiently. Traditional waste management methods weren't providing the insights or incentives they needed to make meaningful changes.</p>
              
              <h2>The Solution</h2>
              <p>After implementing the Smart Bin system, the family was able to:</p>
              <ul>
                <li>Track their waste production in real-time</li>
                <li>Receive AI-powered sorting recommendations</li>
                <li>Earn rewards for consistent recycling habits</li>
                <li>Monitor their environmental impact through the mobile app</li>
              </ul>

              <h2>The Results</h2>
              <p>Within six months, the Anderson family achieved:</p>
              <ul>
                <li>75% reduction in waste sent to landfills</li>
                <li>Increased recycling accuracy from 60% to 95%</li>
                <li>Substantial rewards through the EcoTale program</li>
                <li>A new family commitment to sustainable living</li>
              </ul>
            </>
          )}
          {post.category === 'Tips & Tricks' && (
            <>
              <h2>Key Strategies for Maximum Rewards</h2>
              <ul>
                <li>Proper sorting techniques for different materials</li>
                <li>Optimal times for recycling different items</li>
                <li>How to maximize points during special promotions</li>
                <li>Community engagement opportunities</li>
              </ul>

              <h2>Common Mistakes to Avoid</h2>
              <p>Learn about the most common recycling mistakes and how to avoid them to ensure maximum rewards and environmental impact.</p>
            </>
          )}
          {post.category === 'Guide' && (
            <>
              <h2>The Evolution of Recycling</h2>
              <p>Explore how AI and smart technology are revolutionizing waste management and creating a more sustainable future for all.</p>

              <h2>Key Innovations</h2>
              <ul>
                <li>AI-powered sorting systems</li>
                <li>Real-time waste analytics</li>
                <li>Smart bin technology</li>
                <li>Community impact tracking</li>
              </ul>
            </>
          )}
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPostPage; 
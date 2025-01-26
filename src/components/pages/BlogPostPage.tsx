import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost } from '../../types/blog';

interface BlogPostPageProps {
  posts: BlogPost[];
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ posts }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-24"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => navigate('/blog')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </motion.div>
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
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <span className="font-medium">{post.author.name}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
        </header>
        
        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
        
        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </motion.div>
  );
};

export default BlogPostPage; 
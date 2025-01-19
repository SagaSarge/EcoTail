import React from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Future of Smart Waste Management",
    excerpt: "Discover how AI and IoT are revolutionizing waste management systems and creating sustainable solutions for businesses.",
    category: "Technology",
    author: {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      avatar: "/images/avatars/sarah-chen.jpg"
    },
    readTime: "5 min read",
    date: "Mar 15, 2024",
    image: "/images/blog/smart-waste-future.jpg"
  },
  {
    title: "Maximizing ROI with Smart Bins",
    excerpt: "Learn how businesses are achieving significant cost savings and improving efficiency with smart waste management.",
    category: "Business",
    author: {
      name: "Michael Rodriguez",
      role: "Business Analyst",
      avatar: "/images/avatars/michael-rodriguez.jpg"
    },
    readTime: "4 min read",
    date: "Mar 12, 2024",
    image: "/images/blog/roi-analysis.jpg"
  },
  {
    title: "Sustainable Practices for Modern Business",
    excerpt: "Explore how implementing smart waste solutions can help your business meet sustainability goals.",
    category: "Sustainability",
    author: {
      name: "Emma Watson",
      role: "Sustainability Expert",
      avatar: "/images/avatars/emma-watson.jpg"
    },
    readTime: "6 min read",
    date: "Mar 10, 2024",
    image: "/images/blog/sustainability.jpg"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-secondary-400/10 to-secondary-400/5 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary-400/10 to-secondary-400/5 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary-400 font-semibold tracking-wide uppercase">BLOG</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Latest Insights
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in smart waste management
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">
                  {post.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
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
                <button className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-secondary-400/10 text-secondary-400 font-medium hover:bg-secondary-400 hover:text-white transition-all duration-300">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View all posts CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 rounded-xl bg-secondary-400 text-white font-medium hover:bg-secondary-400/90 transition-all duration-300">
            View All Posts
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}; 
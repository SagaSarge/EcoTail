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
    title: "Family of 4 Saves $520 with Smart Recycling",
    excerpt: "See how the Johnson family transformed their recycling habits and earned amazing rewards with their Smart Bin.",
    category: "Success Story",
    author: {
      name: "Emily Johnson",
      role: "EcoTail User",
      avatar: "/images/avatars/emily-johnson.jpg"
    },
    readTime: "3 min read",
    date: "Mar 15, 2024",
    image: "/images/blog/family-recycling.jpg"
  },
  {
    title: "Top 10 Household Items That Earn Most Points",
    excerpt: "Discover which everyday items in your home can earn you the biggest rewards when recycled properly.",
    category: "Tips & Tricks",
    author: {
      name: "Michael Rodriguez",
      role: "Recycling Expert",
      avatar: "/images/avatars/michael-rodriguez.jpg"
    },
    readTime: "4 min read",
    date: "Mar 12, 2024",
    image: "/images/blog/recycling-items.jpg"
  },
  {
    title: "From Waste to Rewards: A Monthly Guide",
    excerpt: "Learn how to maximize your household recycling rewards with this easy-to-follow monthly planning guide.",
    category: "Guide",
    author: {
      name: "Emma Watson",
      role: "Sustainability Coach",
      avatar: "/images/avatars/emma-watson.jpg"
    },
    readTime: "5 min read",
    date: "Mar 10, 2024",
    image: "/images/blog/monthly-guide.jpg"
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
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
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
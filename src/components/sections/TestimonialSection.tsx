import React, { useEffect, useRef } from 'react';

interface Testimonial {
  id: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  content: string;
  rating: number;
  videoUrl: string;
  views: string;
  likes: string;
  shares: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'Green Hotels Inc.',
      avatar: '/images/testimonials/sarah-j.jpg'
    },
    content: 'Reduced our waste management costs by 45% in just 3 months! The AI sorting is incredibly accurate.',
    rating: 5,
    videoUrl: '/videos/testimonials/sarah-review.mp4',
    views: '15.2K',
    likes: '2.8K',
    shares: '342'
  },
  {
    id: '2',
    author: {
      name: 'David Park',
      role: 'Sustainability Director',
      company: 'Tech Solutions Co.',
      avatar: '/images/testimonials/david-p.jpg'
    },
    content: 'The real-time analytics have transformed how we handle waste. Impressive technology!',
    rating: 5,
    videoUrl: '/videos/testimonials/david-review.mp4',
    views: '12.8K',
    likes: '2.1K',
    shares: '289'
  },
  // Add more testimonials to fill both rows
];

// Duplicate testimonials for continuous scroll
const rowOne = [...testimonials, ...testimonials];
const rowTwo = [...testimonials.reverse(), ...testimonials.reverse()];

export const TestimonialSection = () => {
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      if (rowOneRef.current) {
        rowOneRef.current.scrollLeft += 1;
        if (rowOneRef.current.scrollLeft >= rowOneRef.current.scrollWidth / 2) {
          rowOneRef.current.scrollLeft = 0;
        }
      }
      if (rowTwoRef.current) {
        rowTwoRef.current.scrollLeft -= 1;
        if (rowTwoRef.current.scrollLeft <= 0) {
          rowTwoRef.current.scrollLeft = rowTwoRef.current.scrollWidth / 2;
        }
      }
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-error-400/10 to-error-400/5 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-error-400/10 to-error-400/5 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-error-400 font-semibold tracking-wide uppercase">TESTIMONIALS</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses are transforming their waste management with our smart solutions
          </p>
        </div>

        {/* Testimonial rows */}
        <div className="space-y-8">
          {/* Row One - Moving Right */}
          <div 
            ref={rowOneRef}
            className="flex overflow-hidden space-x-6 py-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {rowOne.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-none w-80 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                {/* Video Container */}
                <div className="relative h-[420px] rounded-t-2xl overflow-hidden">
                  <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    src={testimonial.videoUrl}
                    loop
                    muted
                    playsInline
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-full bg-black/20 hover:bg-black/40">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </button>
                      <div className="text-sm font-medium">0:30</div>
                    </div>
                    <button className="p-2 rounded-full bg-black/20 hover:bg-black/40">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.author.avatar} 
                        alt={testimonial.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <h3 className="font-medium text-gray-900">{testimonial.author.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-error-400 text-white text-sm font-medium rounded-full hover:bg-error-400/90">
                      Follow
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  
                  {/* Engagement stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        {testimonial.likes}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        {testimonial.shares}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {testimonial.views}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row Two - Moving Left */}
          <div 
            ref={rowTwoRef}
            className="flex overflow-hidden space-x-6 py-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {rowTwo.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-none w-80 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                {/* Video Container */}
                <div className="relative h-[420px] rounded-t-2xl overflow-hidden">
                  <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    src={testimonial.videoUrl}
                    loop
                    muted
                    playsInline
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-full bg-black/20 hover:bg-black/40">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </button>
                      <div className="text-sm font-medium">0:30</div>
                    </div>
                    <button className="p-2 rounded-full bg-black/20 hover:bg-black/40">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.author.avatar} 
                        alt={testimonial.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <h3 className="font-medium text-gray-900">{testimonial.author.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-error-400 text-white text-sm font-medium rounded-full hover:bg-error-400/90">
                      Follow
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  
                  {/* Engagement stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        {testimonial.likes}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        {testimonial.shares}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {testimonial.views}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 
interface Testimonial {
  author: {
    name: string;
    role: string;
    location: string;
    avatar: string;
  };
  content: string;
  videoUrl: string;
  savings: string;
}

const testimonial: Testimonial = {
  author: {
    name: 'Sarah Johnson',
    role: 'Family of Four',
    location: 'San Francisco, CA',
    avatar: '/images/testimonials/sarah-j.jpg'
  },
  content: "Our family earned $520 in rewards last year just from regular recycling. The kids love checking our daily points and seeing how much we've saved. It's made recycling a fun family activity!",
  videoUrl: '/videos/testimonials/sarah-review.mp4',
  savings: '$520'
};

export const TestimonialSection = () => {
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
          <span className="text-[#4285F4] font-semibold tracking-wide uppercase">REAL PEOPLE, REAL REWARDS</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            See How Families Are
            <span className="relative mx-2">
              <span className="absolute -inset-2 blur-2xl bg-[#4285F4]/20 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#4285F4]/80">Earning Rewards</span>
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of households turning their everyday recycling into amazing rewards
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Video Column (spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video 
                className="w-full aspect-video object-cover"
                src={testimonial.videoUrl}
                controls
                poster="/images/testimonials/video-poster.jpg"
              />
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-[#4285F4] text-white rounded-full text-sm font-medium">
                Saved {testimonial.savings} Last Year
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              {/* Quote */}
              <div className="mb-8">
                <svg className="w-12 h-12 text-[#4285F4]/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl text-gray-600 italic leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.author.avatar} 
                  alt={testimonial.author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#4285F4]"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.author.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                  <p className="text-xs text-gray-400">{testimonial.author.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
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
  rating: number;
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
  savings: '$520',
  rating: 5
};

export const TestimonialSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#0F9D58]/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-[#4285F4] font-semibold tracking-wide uppercase text-sm">REAL PEOPLE, REAL REWARDS</span>
          <h2 className="mt-6 text-[2.75rem] leading-tight font-bold text-gray-900 max-w-4xl mx-auto">
            See How Families Are{' '}
            <span className="text-[#4285F4]">Saving Money</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of households turning their everyday recycling into real rewards
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_2px_40px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Video Side */}
              <div className="relative bg-gray-50">
                <video 
                  className="w-full h-full object-cover"
                  src={testimonial.videoUrl}
                  controls
                  poster="/images/testimonials/video-poster.jpg"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-[#4285F4] text-white rounded-full text-sm font-medium shadow-lg">
                  Saved {testimonial.savings} Last Year
                </div>
              </div>

              {/* Content Side */}
              <div className="p-12 flex flex-col justify-center">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#F4B400]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl text-gray-600 leading-relaxed mb-10 relative">
                  <span className="absolute -top-4 -left-2 text-[#4285F4]/10 text-7xl font-serif">"</span>
                  {testimonial.content}
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.author.avatar} 
                    alt={testimonial.author.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.author.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                    <p className="text-sm text-gray-400">{testimonial.author.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
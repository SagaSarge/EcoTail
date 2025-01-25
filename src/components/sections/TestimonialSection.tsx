import React, { useState } from 'react';

interface Testimonial {
  author: {
    name: string;
    role: string;
    location: string;
    avatar?: string;
  };
  content: string;
  videoUrl: string;
  savings: string;
  rating: number;
}

const testimonial: Testimonial = {
  author: {
    name: "Sarah Johnson",
    role: "Family of Four",
    location: "San Francisco, CA",
  },
  content: "With EcoTale's smart bin, our family has been earning rewards while making a positive impact. It's amazing how easy recycling has become!",
  videoUrl: "#",
  savings: "$520",
  rating: 5
};

export const TestimonialSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handlePlayClick = () => {
    setIsLoading(true);
    setShowError(false);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            See How People Are Saving Money
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of households and businesses making a difference while earning rewards.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Video Section */}
              <div className="relative h-[400px] bg-gray-100 flex items-center justify-center">
                {/* Play Button */}
                <button
                  onClick={handlePlayClick}
                  className="group relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="w-8 h-8 border-4 border-[#2196F3] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <div className="w-0 h-0 border-l-[24px] border-l-[#2196F3] border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-2" />
                  )}
                </button>

                {/* Error Notification */}
                {showError && (
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-red-100 transform animate-fade-up">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">
                          Media Player Error
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Unable to load media player for your device. Please try again later.
                        </p>
                      </div>
                      <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                          <button
                            onClick={() => setShowError(false)}
                            className="inline-flex rounded-md p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none"
                          >
                            <span className="sr-only">Dismiss</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#F4B400]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl text-gray-900 font-medium mb-8">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.author.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.author.location}</div>
                  </div>
                  <div className="bg-[#2196F3]/5 px-4 py-2 rounded-xl">
                    <div className="text-sm text-gray-500">Total Savings</div>
                    <div className="text-xl font-bold text-[#2196F3]">{testimonial.savings}</div>
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
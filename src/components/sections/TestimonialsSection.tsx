import React from 'react';
import { TestimonialCard } from '../common/TestimonialCard';

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Environmental Scientist",
    content: "This app has revolutionized how our lab manages waste. The AI sorting feature is incredibly accurate! 🌱 #SustainableLabs #GreenTech",
    avatar: "SC",
    stats: { likes: 2453, shares: 342 }
  },
  {
    name: "Mike Rodriguez",
    role: "Restaurant Owner",
    content: "Cut our waste management costs by 40% in just 2 months! The gamification makes it fun for our staff to participate. 🍽️ #ZeroWaste",
    avatar: "MR",
    stats: { likes: 1897, shares: 245 }
  },
  {
    name: "Dr. Emily Park",
    role: "Sustainability Director",
    content: "Finally, a solution that makes tracking and improving our environmental impact easy and engaging! The real-time insights are game-changing. 📊",
    avatar: "EP",
    stats: { likes: 3211, shares: 567 }
  },
  {
    name: "Tom Wilson",
    role: "Office Manager",
    content: "Our employees love competing for eco-points! It's amazing how a little gamification can transform workplace habits. 🏆 #GreenOffice",
    avatar: "TW",
    stats: { likes: 1654, shares: 198 }
  },
  {
    name: "Lisa Kumar",
    role: "School Principal",
    content: "Teaching sustainability has never been more interactive. Our students are learning valuable habits while having fun! 🎓 #EcoEducation",
    avatar: "LK",
    stats: { likes: 2876, shares: 423 }
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Loved by Sustainability Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how organizations are making a difference with our solution
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scrollable Container */}
          <div className="flex space-x-6 overflow-x-auto pb-8 px-8 scrollbar-hide">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 
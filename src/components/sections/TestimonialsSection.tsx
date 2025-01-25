import React, { useState } from 'react';
import { TestimonialCard } from '../common/TestimonialCard';

interface VideoTestimonial {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
}

const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'v1',
    thumbnail: '/testimonials/smart-office.jpg',
    title: 'How we reduced office waste by 70%',
    duration: '2:15'
  },
  {
    id: 'v2',
    thumbnail: '/testimonials/zero-waste.jpg',
    title: 'Our journey to zero waste',
    duration: '3:45'
  },
  {
    id: 'v3',
    thumbnail: '/testimonials/sustainable.jpg',
    title: 'Sustainable tech in action',
    duration: '1:58'
  }
];

const TESTIMONIALS = [
  {
    name: "Emma Chen",
    role: "Sustainability Director | Tech Co.",
    content: "Implemented EcoTale across 5 office locations - 70% waste reduction in 3 months! The AI sorting accuracy is incredible. 🌱 #CorporateSustainability",
    avatar: "EC",
    stats: { likes: 3242, shares: 892 },
    verified: true,
    impact: {
      wasteReduced: "4.2 tons",
      costSaved: "$12,400"
    }
  },
  {
    name: "Marcus Rodriguez",
    role: "Smart City Project Lead",
    content: "Deployed EcoTale in 50 public spaces. Real-time waste analytics helped optimize collection routes & cut operational costs by 45%. 🏙️ #SmartCities",
    avatar: "MR",
    stats: { likes: 2897, shares: 645 },
    verified: true,
    impact: {
      wasteReduced: "12.8 tons",
      costSaved: "$28,500"
    }
  },
  {
    name: "Dr. Sarah Park",
    role: "Environmental Research Lead",
    content: "The data insights are revolutionary. We're using EcoTale's analytics to shape waste management policies across the region. 📊 #DataDriven",
    avatar: "SP",
    stats: { likes: 4211, shares: 967 },
    verified: true,
    impact: {
      wasteReduced: "8.5 tons",
      costSaved: "$19,200"
    }
  },
  {
    name: "Alex Wilson",
    role: "University Facilities Manager",
    content: "Student engagement increased 300% with the gamification features. We're now the top-ranked sustainable campus! 🎓 #GreenCampus",
    avatar: "AW",
    stats: { likes: 2654, shares: 498 },
    verified: true,
    impact: {
      wasteReduced: "6.3 tons",
      costSaved: "$15,800"
    }
  },
  {
    name: "Priya Kumar",
    role: "Smart Building Consultant",
    content: "Integration with our building management system was seamless. Real-time waste monitoring is now part of our smart building dashboard. 🏢 #PropTech",
    avatar: "PK",
    stats: { likes: 3876, shares: 723 },
    verified: true,
    impact: {
      wasteReduced: "5.7 tons",
      costSaved: "$16,900"
    }
  }
];

export const TestimonialsSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations are transforming waste management with AI-powered solutions
          </p>

          {/* Impact Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2.5M+</div>
              <div className="text-sm text-gray-600">Items Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">45%</div>
              <div className="text-sm text-gray-600">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">98.5%</div>
              <div className="text-sm text-gray-600">AI Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Featured Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_TESTIMONIALS.map((video) => (
              <div
                key={video.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-medium mb-1">{video.title}</h4>
                    <span className="text-white/80 text-sm">{video.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Testimonials */}
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

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-0.5">
            View All Success Stories
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              {/* Video player would go here */}
              <div className="w-full h-full flex items-center justify-center text-white">
                Video Player Placeholder
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}; 
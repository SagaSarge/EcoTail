import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: 'product' | 'pricing' | 'technical';
}

const faqs: FAQItem[] = [
  {
    question: "How does the Smart Bin's AI sorting work?",
    answer: "Our Smart Bin uses advanced computer vision and machine learning to automatically identify and sort waste items in real-time. The AI system can recognize different materials and categorize them appropriately, ensuring optimal recycling efficiency.",
    category: "product"
  },
  {
    question: "What kind of cost savings can I expect?",
    answer: "Businesses typically see a 30-45% reduction in waste management costs within the first year. This includes savings from optimized collection schedules, reduced contamination fees, and improved recycling rebates.",
    category: "pricing"
  },
  {
    question: "Is technical support included?",
    answer: "Yes, all Smart Bin purchases include 24/7 technical support, regular software updates, and remote monitoring. Our team of experts is always available to help you maximize the system's performance.",
    category: "technical"
  },
  {
    question: "How long does installation take?",
    answer: "Installation typically takes 2-4 hours, and our team handles everything from setup to staff training. We ensure minimal disruption to your operations during the installation process.",
    category: "technical"
  },
  {
    question: "Can I integrate it with my existing systems?",
    answer: "Yes, our Smart Bin comes with standard API integration capabilities, allowing seamless connection with your existing waste management, facility management, or ERP systems.",
    category: "technical"
  }
];

export const FAQSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'all' | 'product' | 'pricing' | 'technical'>('all');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#4285F4]/10 to-[#4285F4]/5 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#4285F4]/10 to-[#4285F4]/5 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#4285F4] font-semibold tracking-wide uppercase">FAQ</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Common Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to frequently asked questions about our smart waste management solutions
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'product', 'pricing', 'technical'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#4285F4] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto mb-20">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full text-left px-6 py-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openQuestion === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Concluding section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#4285F4]/5 via-white to-[#0F9D58]/5 rounded-3xl p-12 border border-gray-100 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Waste Management?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4285F4]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Technology</h4>
              <p className="text-gray-600 text-sm">AI-powered sorting and real-time analytics</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0F9D58]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0F9D58]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cost Savings</h4>
              <p className="text-gray-600 text-sm">30-45% reduction in waste management costs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F4B400]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
              <p className="text-gray-600 text-sm">75% improvement in recycling rates</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/calculate-impact')}
              className="inline-flex items-center px-8 py-3 rounded-xl bg-[#4285F4] text-white font-medium hover:bg-[#3367D6] transition-all duration-300"
            >
              Calculate Your Impact
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center px-8 py-3 rounded-xl border border-[#4285F4] text-[#4285F4] font-medium hover:bg-[#4285F4]/5 transition-all duration-300"
            >
              Talk to an Expert
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 
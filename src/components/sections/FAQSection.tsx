import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: 'rewards' | 'usage' | 'savings';
}

const faqs: FAQItem[] = [
  {
    question: "How do I earn rewards with my Smart Bin?",
    answer: "It's automatic! Just use your bin normally and our AI system tracks each recyclable item you dispose. You earn points for every item recycled correctly - from bottles to cardboard boxes. These points automatically convert to cash rewards or store discounts.",
    category: "rewards"
  },
  {
    question: "What kind of discounts can I get?",
    answer: "Our rewards program partners with major retailers like Amazon, Target, and Walmart. You can earn up to $450 yearly in discounts, including 15% off groceries, $50 monthly in Amazon credits, and special deals on eco-friendly products.",
    category: "rewards"
  },
  {
    question: "Do I need to sort my recyclables?",
    answer: "Not at all! Just toss items in like you normally would. Our Smart Bin's AI automatically identifies and sorts items for you, making recycling as easy as using a regular trash can. The bin handles all the sorting work.",
    category: "usage"
  },
  {
    question: "How quickly do I start saving money?",
    answer: "Immediately! From day one, you'll start earning points for every recyclable item. Most families see their first rewards within the first week, and reach average monthly savings of $37.50 through reduced waste fees and earned discounts.",
    category: "savings"
  },
  {
    question: "Can my whole family use it?",
    answer: "Absolutely! The Smart Bin works just like a regular bin - anyone can use it. Each family member's recycling automatically contributes to your household's rewards points. It's a great way to get everyone involved in recycling.",
    category: "usage"
  }
];

export const FAQSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'all' | 'rewards' | 'usage' | 'savings'>('all');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

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
          <span className="text-[#4285F4] font-semibold tracking-wide uppercase">COMMON QUESTIONS</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Simple to Use,
            <span className="relative mx-2">
              <span className="absolute -inset-2 blur-2xl bg-[#4285F4]/20 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#4285F4]/80">Rewarding</span>
            </span>
            to Have
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how easy it is to earn rewards while recycling with our Smart Bin - no extra effort required
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'rewards', 'usage', 'savings'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#4285F4] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full text-left p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <div className={`p-2 rounded-xl transition-colors duration-300 ${
                    openQuestion === index ? 'bg-[#4285F4]/10' : 'bg-gray-50'
                  }`}>
                    <svg
                      className={`w-5 h-5 ${
                        openQuestion === index ? 'text-[#4285F4]' : 'text-gray-400'
                      } transform transition-transform duration-300 ${
                        openQuestion === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openQuestion === index && (
                  <p className="mt-4 text-gray-600 pr-8">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Concluding section */}
        <div className="max-w-4xl mx-auto mt-16 text-center bg-white rounded-3xl p-12 border border-gray-100 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Start Earning Rewards Today
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4285F4]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Instant Rewards</h4>
              <p className="text-gray-600 text-sm">Start earning from your first recycled item</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0F9D58]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0F9D58]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Zero Effort</h4>
              <p className="text-gray-600 text-sm">Use it like any normal trash bin</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F4B400]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Big Savings</h4>
              <p className="text-gray-600 text-sm">Up to $450 yearly in rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    version: 'v1',
    name: 'EcoTail V1',
    tagline: 'Disruptive Launch',
    description: 'The first version of our Smart Trash System, featuring AI-powered sorting and basic analytics.',
    highlights: [
      'Real-time waste detection',
      'Basic analytics dashboard',
      'Points-based rewards',
      'Durable 13-gallon design'
    ],
    price: '$1,999',
    badge: 'LAUNCH',
    gradient: 'from-sky-400 to-blue-500'
  },
  {
    version: 'v2',
    name: 'EcoTail V2',
    tagline: 'Enhanced Evolution',
    description: 'Advanced sensors and deeper insights for a more comprehensive waste management solution.',
    highlights: [
      'Enhanced sensor suite',
      'Voice assistant integration',
      'Premium analytics',
      'Priority support'
    ],
    price: '$2,999',
    badge: 'POPULAR',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    version: 'v3',
    name: 'EcoTail V3',
    tagline: 'Subscription & Reusability',
    description: 'A complete service offering with reusable canisters and curated pickups.',
    highlights: [
      'Reusable canister system',
      'Concierge pickup service',
      'Carbon footprint tracking',
      'Advanced route optimization'
    ],
    price: 'Custom Pricing',
    badge: 'ENTERPRISE',
    gradient: 'from-emerald-500 to-green-600'
  }
];

export const ProductsOverviewPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-8">
              <span className="relative">
                <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Choose Your EcoTail
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              From smart waste detection to complete recycling solutions, find the perfect EcoTail for your sustainability journey.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.version}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 
                         transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-6
                                bg-gradient-to-r ${product.gradient} text-white`}>
                    {product.badge}
                  </div>

                  {/* Product Info */}
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.tagline}</p>
                  <p className="text-3xl font-bold mb-6">{product.price}</p>
                  
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-8">
                    {product.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="space-y-4">
                    <button
                      onClick={() => navigate(`/products/${product.version}`)}
                      className="w-full px-6 py-3 rounded-xl font-semibold text-sky-600 bg-sky-50 
                               hover:bg-sky-100 transition-colors duration-300"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() => navigate('/purchase')}
                      className={`w-full px-6 py-3 rounded-xl font-semibold text-white
                                bg-gradient-to-r ${product.gradient}
                                transform transition-all duration-500 hover:scale-[1.02]
                                shadow-lg hover:shadow-sky-500/25`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="relative">
                <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Our Vision: A Closed-Loop Future
                </span>
              </span>
            </h2>
            <p className="text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
              Join us in building a future where waste becomes an opportunity, not a burden. 
              Together, we're creating a sustainable ecosystem that benefits communities and our planet.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-full font-semibold text-white
                       bg-gradient-to-r from-sky-500 to-blue-500 
                       hover:from-sky-600 hover:to-blue-600
                       transform transition-all duration-500 hover:scale-105
                       shadow-lg hover:shadow-sky-500/25"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}; 
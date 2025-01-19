import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

interface TechnicalSpec {
  category: string;
  details: string[];
}

interface ProductVersion {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  features: ProductFeature[];
  technicalSpecs: TechnicalSpec[];
  metrics: string[];
  imageUrl: string;
}

const productVersions: Record<string, ProductVersion> = {
  'v1': {
    id: 'v1',
    name: 'EcoTail V1',
    tagline: 'Disruptive Launch',
    price: '$1,999',
    description: 'The disruptive first version of our Smart Trash System. Inspired by Tony Fadell\'s product philosophy, V1 is all about bold innovation that changes how people interact with waste management.',
    features: [
      {
        icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        title: 'AI Sorting & Basic Analytics',
        description: 'Real-time detection of recyclables, compostables, and landfill items with simple app dashboard.'
      },
      {
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'Rewards System',
        description: 'Earn points for correct sorting with early-stage gamification to encourage eco-friendly habits.'
      },
      {
        icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
        title: 'Durable Design',
        description: '13-gallon capacity with easy setup for kitchens or office spaces. Minimal but sturdy hardware.'
      }
    ],
    technicalSpecs: [
      {
        category: 'AI Processing',
        details: [
          'On-Device AI using TensorFlow Lite',
          'Basic model recognition',
          'Simplified data processing'
        ]
      },
      {
        category: 'Connectivity',
        details: [
          'IoT Connectivity (MQTT / Wi-Fi)',
          'Real-time data transmission',
          'Mobile app integration'
        ]
      }
    ],
    metrics: [
      'User Adoption Rate',
      'Sorting Accuracy',
      'Initial User Feedback'
    ],
    imageUrl: '/images/ecotail-v1.jpg'
  },
  'v2': {
    id: 'v2',
    name: 'EcoTail V2',
    tagline: 'Enhanced Evolution',
    price: '$2,999',
    description: 'Building upon the disruptive core of V1, V2 incorporates user feedback and advanced sensors for deeper insights, improved accuracy, and broader household needs.',
    features: [
      {
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
        title: 'Enhanced Sensors',
        description: 'Detect partially used items and provide recommendations to reduce waste.'
      },
      {
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
        title: 'Voice Integration',
        description: 'Compatible with Alexa, Google Home, and Apple HomeKit for voice commands.'
      },
      {
        icon: 'M4 5a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L4 19V5z',
        title: 'Premium Features',
        description: 'Advanced waste tracking, priority support, and exclusive eco-content.'
      }
    ],
    technicalSpecs: [
      {
        category: 'Sensor System',
        details: [
          'Weight sensors',
          'Fill-level detection',
          'Camera-based AI'
        ]
      },
      {
        category: 'Cloud Integration',
        details: [
          'Expanded analytics',
          'Firestore database',
          'Advanced user insights'
        ]
      }
    ],
    metrics: [
      'Subscription Rate',
      'Waste Reduction',
      'Brand Recognition'
    ],
    imageUrl: '/images/ecotail-v2.jpg'
  },
  'v3': {
    id: 'v3',
    name: 'EcoTail V3',
    tagline: 'Subscription & Reusability',
    price: 'Custom Pricing',
    description: 'A holistic service offering reusable canisters and curated pickups, transitioning from a smart trash can to a complete waste management solution.',
    features: [
      {
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        title: 'Reusable Canisters',
        description: 'Weekly swaps for fresh, sanitized canisters eliminating single-use bags.'
      },
      {
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Concierge Service',
        description: 'Automatic route scheduling and special waste handling.'
      },
      {
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        title: 'Premium Analytics',
        description: 'Carbon footprint tracking and neighborhood comparisons.'
      }
    ],
    technicalSpecs: [
      {
        category: 'Route Optimization',
        details: [
          'AI-driven scheduling',
          'Real-time fleet tracking',
          'Carbon footprint optimization'
        ]
      },
      {
        category: 'Advanced AI',
        details: [
          'Federated learning',
          'Regional model improvements',
          'Privacy-focused analytics'
        ]
      }
    ],
    metrics: [
      'Plastic Reduction',
      'Route Efficiency',
      'Customer Satisfaction'
    ],
    imageUrl: '/images/ecotail-v3.jpg'
  }
};

export const ProductDetailsPage: React.FC = () => {
  const { version } = useParams<{ version: string }>();
  const navigate = useNavigate();
  const product = version ? productVersions[version] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
          <p className="mt-2 text-gray-600">The requested product version does not exist.</p>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
          >
            View All Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-8">
              <span className="text-sky-600 font-semibold tracking-widest text-sm">
                {product.tagline}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-8">
              <span className="relative">
                <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  {product.name}
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {product.description}
            </p>

            <div className="flex justify-center items-center gap-8">
              <span className="text-4xl font-bold text-gray-900">{product.price}</span>
              <button
                onClick={() => navigate('/purchase')}
                className="px-8 py-4 rounded-full font-semibold text-white
                         bg-gradient-to-r from-sky-500 to-blue-500 
                         hover:from-sky-600 hover:to-blue-600
                         transform transition-all duration-500 hover:scale-105
                         shadow-lg hover:shadow-sky-500/25"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="relative">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Key Features
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 border border-sky-100 hover:border-sky-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)]">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-sky-100">
                    <svg className="w-8 h-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-sky-600">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="relative">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Technical Specifications
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-sky-100">
                <h3 className="text-2xl font-semibold mb-6 text-sky-600">{spec.category}</h3>
                <ul className="space-y-4">
                  {spec.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-6 h-6 text-sky-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="relative">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Key Metrics
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-sky-100 text-center">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{metric}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="relative">
                <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Ready to Transform Your Waste Management?
                </span>
              </span>
            </h2>
            <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
              Join the future of smart, sustainable waste management today.
            </p>
            <button
              onClick={() => navigate('/purchase')}
              className="px-8 py-4 rounded-full font-semibold text-white
                       bg-gradient-to-r from-sky-500 to-blue-500 
                       hover:from-sky-600 hover:to-blue-600
                       transform transition-all duration-500 hover:scale-105
                       shadow-lg hover:shadow-sky-500/25"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}; 
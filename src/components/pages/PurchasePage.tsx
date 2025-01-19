import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    version: 'v1',
    name: 'EcoTail V1',
    tagline: 'Disruptive Launch',
    description: 'The disruptive first version of our Smart Trash System. Inspired by Tony Fadell\'s product philosophy, V1 is all about bold innovation that changes how people interact with waste management.',
    features: [
      'Real-time waste detection',
      'Basic analytics dashboard',
      'Points-based rewards',
      'Durable 13-gallon design',
      'On-Device AI using TensorFlow Lite',
      'IoT Connectivity (MQTT / Wi-Fi)'
    ],
    techSpecs: [
      'Processing: Quad-core ARM processor',
      'Memory: 4GB RAM',
      'Storage: 32GB eMMC',
      'Connectivity: Wi-Fi 6, Bluetooth 5.0',
      'Power: 110-240V AC',
      'Battery Backup: 12 hours'
    ],
    imageUrl: '/images/ecotail-v1.jpg',
    gradient: 'from-sky-400 to-blue-500'
  },
  {
    version: 'v2',
    name: 'EcoTail V2',
    tagline: 'Enhanced Evolution',
    description: 'Building upon the disruptive core of V1, V2 incorporates user feedback and advanced sensors for deeper insights, improved accuracy, and broader household needs.',
    features: [
      'Enhanced sensor suite',
      'Voice assistant integration',
      'Premium analytics',
      'Priority support',
      'Weight & fill-level detection',
      'Advanced cloud analytics'
    ],
    techSpecs: [
      'Processing: Octa-core ARM processor',
      'Memory: 8GB RAM',
      'Storage: 64GB NVMe',
      'Connectivity: Wi-Fi 6E, Bluetooth 5.2',
      'Power: 110-240V AC',
      'Battery Backup: 24 hours'
    ],
    imageUrl: '/images/ecotail-v2.jpg',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    version: 'v3',
    name: 'EcoTail V3',
    tagline: 'Subscription & Reusability',
    description: 'A holistic service offering reusable canisters and curated pickups. This version aims to close the loop on household waste by minimizing single-use materials and adding advanced real-world convenience.',
    features: [
      'Reusable canister system',
      'Concierge pickup service',
      'Carbon footprint tracking',
      'Advanced route optimization',
      'AI-driven scheduling',
      'Real-time fleet tracking'
    ],
    techSpecs: [
      'Processing: Custom AI accelerator chip',
      'Memory: 16GB RAM',
      'Storage: 128GB NVMe',
      'Connectivity: Wi-Fi 6E, 5G, Bluetooth 5.3',
      'Power: 110-240V AC',
      'Battery Backup: 48 hours'
    ],
    imageUrl: '/images/ecotail-v3.jpg',
    gradient: 'from-emerald-500 to-green-600'
  }
];

const pricingTiers = [
  {
    name: 'Standard',
    price: '$1,999',
    description: 'Perfect for households starting their sustainability journey',
    features: [
      'AI-powered waste sorting',
      'Basic analytics dashboard',
      'Mobile app access',
      '1-year warranty',
      'Email support',
      'Monthly eco-tips'
    ],
    gradient: 'from-sky-400 to-blue-500',
    recommended: false
  },
  {
    name: 'Professional',
    price: '$2,999',
    description: 'Enhanced features for tech-savvy environmentalists',
    features: [
      'Everything in Standard',
      'Advanced sensor suite',
      'Voice assistant integration',
      'Premium analytics',
      '3-year warranty',
      'Priority support',
      'Exclusive eco-content'
    ],
    gradient: 'from-violet-500 to-purple-600',
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complete solution for businesses and large organizations',
    features: [
      'Everything in Professional',
      'Reusable canister system',
      'Concierge pickup service',
      'Fleet management',
      'Custom integrations',
      '24/7 dedicated support',
      'Sustainability consulting'
    ],
    gradient: 'from-emerald-500 to-green-600',
    recommended: false
  }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Sustainability Director',
    company: 'GreenTech Solutions',
    content: 'EcoTail transformed our waste management process. The AI-powered sorting and analytics have reduced our waste costs by 40%.',
    image: '/images/testimonials/sarah.jpg',
    version: 'EcoTail V2',
    metrics: {
      savings: '$12,000/year',
      reduction: '40% waste'
    }
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Building Manager',
    company: 'Skyline Apartments',
    content: 'The subscription model and pickup service of V3 has revolutionized how our residents handle waste. It\'s both convenient and eco-friendly.',
    image: '/images/testimonials/marcus.jpg',
    version: 'EcoTail V3',
    metrics: {
      savings: '$25,000/year',
      reduction: '60% waste'
    }
  }
];

const caseStudies = [
  {
    title: 'Office Complex Transformation',
    company: 'Horizon Tower',
    challenge: 'Managing waste for a 50-story office building with 2000+ daily occupants.',
    solution: 'Deployed 20 EcoTail V3 units with centralized management.',
    results: [
      '65% reduction in waste management costs',
      '80% increase in recycling rates',
      'Annual savings of $45,000'
    ],
    image: '/images/case-studies/horizon.jpg'
  },
  {
    title: 'University Campus Initiative',
    company: 'State University',
    challenge: 'Implementing sustainable waste management across 30 campus buildings.',
    solution: 'Campus-wide deployment of EcoTail V2 with custom analytics dashboard.',
    results: [
      '70% reduction in contamination rates',
      '45% decrease in collection frequency',
      'ROI achieved in 8 months'
    ],
    image: '/images/case-studies/university.jpg'
  }
];

export const PurchasePage: React.FC = () => {
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
                  Choose Your Perfect EcoTail
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Explore our range of smart waste management solutions and find the perfect fit for your sustainability goals.
            </p>
          </div>
        </div>
      </div>

      {/* Product Sections - Updated with Tech Specs */}
      {products.map((product, index) => (
        <section key={product.version} className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image with enhanced hover effect */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                  <div className="relative aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-lg font-semibold">{product.name}</p>
                        <p className="text-sm">{product.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content with Tech Specs */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-6
                              bg-gradient-to-r ${product.gradient} text-white`}>
                  {product.tagline}
                </div>
                
                <h2 className="text-4xl font-bold mb-6">{product.name}</h2>
                <p className="text-xl text-gray-600 mb-8">{product.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.techSpecs.map((spec, i) => (
                      <div key={i} className="flex items-center space-x-2 text-gray-600">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/products/${product.version}`)}
                  className="px-8 py-4 rounded-xl font-semibold text-white
                           bg-gradient-to-r from-sky-500 to-blue-500 
                           hover:from-sky-600 hover:to-blue-600
                           transform transition-all duration-500 hover:scale-105
                           shadow-lg hover:shadow-sky-500/25"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              <span className="relative">
                <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Choose Your Plan
                </span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan that aligns with your sustainability goals and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`relative bg-white rounded-2xl p-8 border ${
                  tier.recommended ? 'border-sky-200 ring-2 ring-sky-500 ring-opacity-50' : 'border-gray-100'
                } hover:border-gray-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]`}
              >
                {tier.recommended && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg">
                      Recommended
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <p className="text-4xl font-bold">{tier.price}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full px-6 py-3 rounded-xl font-semibold text-white
                            bg-gradient-to-r ${tier.gradient}
                            transform transition-all duration-500 hover:scale-[1.02]
                            shadow-lg hover:shadow-sky-500/25`}
                >
                  {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              <span className="relative">
                <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Frequently Asked Questions
                </span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Existing FAQs */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-sky-200 transition-colors">
              <h3 className="text-xl font-bold mb-4">What's included in the warranty?</h3>
              <p className="text-gray-600">Our warranty covers all hardware components, including sensors, motors, and electronics. Standard plan includes 1 year, Professional includes 3 years.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-sky-200 transition-colors">
              <h3 className="text-xl font-bold mb-4">How is installation handled?</h3>
              <p className="text-gray-600">Professional installation is included with all plans. Our team will set up your EcoTail and ensure it's properly connected to your network.</p>
            </div>

            {/* New FAQs */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-sky-200 transition-colors">
              <h3 className="text-xl font-bold mb-4">What maintenance is required?</h3>
              <p className="text-gray-600">EcoTail is designed for minimal maintenance. Regular software updates are automatic, and the system self-diagnoses most issues. We recommend a yearly professional check-up.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-sky-200 transition-colors">
              <h3 className="text-xl font-bold mb-4">How accurate is the AI sorting?</h3>
              <p className="text-gray-600">Our AI achieves 95%+ accuracy in waste classification. The system continuously learns and improves through regular updates and user feedback.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-sky-200 transition-colors">
              <h3 className="text-xl font-bold mb-4">What happens during power outages?</h3>
              <p className="text-gray-600">All EcoTail models include battery backup (12-48 hours depending on model). Data is securely stored and syncs once power is restored.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-sky-200 transition-colors">
              <h3 className="text-xl font-bold mb-4">Is my data secure?</h3>
              <p className="text-gray-600">Yes! We use enterprise-grade encryption for all data transmission and storage. Your privacy is protected with SOC 2 Type II certified security measures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              <span className="relative">
                <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Customer Success Stories
                </span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                    {testimonial.metrics.savings}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                    {testimonial.metrics.reduction}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="font-bold text-xl mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.company}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Results</h4>
                      <ul className="mt-2 space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center space-x-2 text-gray-600">
                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 
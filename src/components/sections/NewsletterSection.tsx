import React, { useState } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

export const NewsletterSection: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    trackEvent({
      action: 'newsletter_subscribe',
      category: 'engagement',
      label: 'footer_form'
    });

    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'newsletter');
      formData.append('email', email);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error subscribing to the newsletter. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#4285F4]/5 to-transparent py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Subscribe to our newsletter for eco-friendly tips, updates, and exclusive offers.
          </p>
        </div>

        <div className="mt-8 max-w-md mx-auto">
          <form 
            name="newsletter"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="sm:flex"
          >
            {/* Netlify Form Detection */}
            <input type="hidden" name="form-name" value="newsletter" />
            {/* Bot Field */}
            <div hidden>
              <input name="bot-field" />
            </div>

            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full px-6 py-3 text-base font-medium text-white bg-[#4285F4] border border-transparent rounded-r-lg hover:bg-[#3367D6] focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:ring-offset-2 sm:px-10"
              >
                Subscribe
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div className="mt-4 text-sm text-green-600 text-center">
              Thank you for subscribing! We'll keep you updated with the latest news.
            </div>
          )}

          <p className="mt-3 text-sm text-gray-500 text-center">
            By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}; 
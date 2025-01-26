import React, { useState } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

export const NewsletterSection: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    trackEvent({
      action: 'newsletter_subscribe',
      category: 'engagement',
      label: 'footer_form'
    });

    try {
      // Submit to Netlify Forms
      const formData = new URLSearchParams();
      formData.append('form-name', 'newsletter');
      formData.append('email', email);

      const netlifyResponse = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (!netlifyResponse.ok) {
        throw new Error('Newsletter submission failed');
      }

      // Send confirmation email via Netlify Function
      const confirmResponse = await fetch('/.netlify/functions/newsletter-confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!confirmResponse.ok) {
        throw new Error('Failed to send confirmation email');
      }

      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setError('There was an error subscribing to the newsletter. Please try again.');
    } finally {
      setIsSubmitting(false);
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
                disabled={isSubmitting}
                className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full px-6 py-3 text-base font-medium text-white bg-[#4285F4] border border-transparent rounded-r-lg hover:bg-[#3367D6] focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:ring-offset-2 sm:px-10 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-4 text-sm text-red-600 text-center">
              {error}
            </div>
          )}

          {isSubmitted && (
            <div className="mt-4 text-sm text-green-600 text-center">
              Thank you for subscribing! Please check your email for confirmation.
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/auth/loading');
  };

  const handleCaptchaCheck = () => {
    setIsVerifying(true);
    // Simulate verification delay
    setTimeout(() => {
      setIsCaptchaChecked(true);
      setIsVerifying(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-accent-50 p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-accent-200/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-primary-200/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full flex gap-8 items-start">
        {/* Left side marketing content */}
        <div className="hidden lg:block w-1/2 p-6 space-y-8">
          {/* Main Value Proposition */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-4">
              Turn Recycling into Rewards
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of eco-conscious shoppers earning discounts while saving the planet.
            </p>
          </div>

          {/* Rewards Showcase */}
          <div className="space-y-6">
            {/* EcoPoints Counter */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/40">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                  350
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">EcoPoints</h3>
                  <p className="text-accent-600">Level 5 Recycler</p>
                </div>
              </div>
            </div>

            {/* Featured Rewards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  brand: 'Dr Pepper',
                  discount: '$5 Off',
                  condition: 'Recycle 24 cans',
                  color: 'from-red-600 to-red-700'
                },
                {
                  brand: 'Tide',
                  discount: '25% Off',
                  condition: 'Recycle 3 bottles',
                  color: 'from-orange-500 to-orange-600'
                },
                {
                  brand: 'Doritos',
                  discount: 'Buy 1 Get 1',
                  condition: 'Recycle 10 bags',
                  color: 'from-blue-600 to-blue-700'
                },
                {
                  brand: 'Coca-Cola',
                  discount: '30% Off',
                  condition: 'Recycle 36 bottles',
                  color: 'from-red-500 to-red-600'
                }
              ].map((reward, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className={`text-base font-bold bg-gradient-to-r ${reward.color} bg-clip-text text-transparent mb-2`}>
                    {reward.brand}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{reward.discount}</div>
                  <div className="text-xs text-gray-600">{reward.condition}</div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/80 backdrop-blur-xl rounded-xl p-3">
                <div className="text-xl font-bold text-gray-900">50+</div>
                <div className="text-xs text-gray-600">Brands</div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-xl p-3">
                <div className="text-xl font-bold text-gray-900">1M+</div>
                <div className="text-xs text-gray-600">Items</div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-xl p-3">
                <div className="text-xl font-bold text-gray-900">$250k</div>
                <div className="text-xs text-gray-600">Saved</div>
              </div>
            </div>

            {/* Social Proof - Simplified */}
            <div className="bg-white/80 backdrop-blur-xl rounded-xl p-4">
              <div className="text-sm text-gray-900 font-medium mb-1">
                <span className="text-accent-600">2,547</span> members already saving
              </div>
              <div className="text-xs text-gray-600">
                "Got amazing discounts while helping the environment!"
              </div>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-6 shadow-xl">
            {/* Form Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Create Account
              </h1>
              <p className="text-sm text-gray-600">Join us in making a difference</p>
            </div>

            {/* Social Sign In */}
            <div className="space-y-2 mb-6">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" style={{fill: '#4285F4'}}/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" style={{fill: '#34A853'}}/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" style={{fill: '#FBBC05'}}/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" style={{fill: '#EA4335'}}/>
                </svg>
                Sign up with Google
              </button>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"/>
                </svg>
                Sign up with Apple
              </button>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Sign up with Facebook
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                  placeholder="Create password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                  placeholder="Confirm password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="relative">
                <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isCaptchaChecked}
                      onChange={handleCaptchaCheck}
                      disabled={isVerifying || isCaptchaChecked}
                      className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-primary-500 text-primary-600 cursor-pointer disabled:cursor-not-allowed"
                    />
                    {isVerifying && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                    {isCaptchaChecked && (
                      <div className="absolute inset-0 flex items-center justify-center text-primary-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-700 font-medium">I'm not a robot</div>
                    <div className="text-xs text-gray-500">Verify that you are human</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-gray-400">Protected by</div>
                    <div className="text-sm font-medium bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                      EcoTale
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={!isCaptchaChecked}
                className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                Create Account
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => navigate('/auth')}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                ← Back to options
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
import React, { useState, useEffect } from 'react';

interface SavingsInputs {
  wasteVolume: number;
  currentCost: number;
  employeeCount: number;
  industryType: string;
  householdSize?: number;
  residenceType?: 'apartment' | 'house' | 'condo';
  collectionFrequency?: 'weekly' | 'biweekly' | 'monthly';
}

interface CalculatedSavings {
  monthlyReduction: number;
  yearlyReduction: number;
  recyclingRevenue: number;
  operationalSavings: number;
  totalSavings: number;
  roi: number;
}

interface QuestionnaireData {
  userType: 'business' | 'individual' | null;
  organizationSize?: 'small' | 'medium' | 'large' | null;
  currentRecycling: 'none' | 'basic' | 'advanced' | null;
  sustainabilityGoal: 'cost' | 'environment' | 'both' | null;
  householdSize?: 'single' | 'couple' | 'family' | 'shared' | null;
  residenceType?: 'apartment' | 'house' | 'condo' | null;
  collectionFrequency?: 'weekly' | 'biweekly' | 'monthly' | null;
}

interface EmailCaptureState {
  email: string;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const CalculateCostSavingsPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [questionnaire, setQuestionnaire] = useState<QuestionnaireData>({
    userType: null,
    organizationSize: null,
    currentRecycling: null,
    sustainabilityGoal: null,
    householdSize: null,
    residenceType: null,
    collectionFrequency: null
  });
  
  const [inputs, setInputs] = useState<SavingsInputs>({
    wasteVolume: 100,
    currentCost: 1000,
    employeeCount: 50,
    industryType: 'office'
  });

  const [savings, setSavings] = useState<CalculatedSavings | null>(null);

  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailCapture, setEmailCapture] = useState<EmailCaptureState>({
    email: '',
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const totalSteps = 5; // 4 questions + calculator

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleQuestionnaireUpdate = (field: keyof QuestionnaireData, value: any) => {
    setQuestionnaire(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  // Industry options and calculation logic remain the same
  const industryOptions = [
    { value: 'office', label: 'Office Space' },
    { value: 'retail', label: 'Retail' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' }
  ];

  const calculateSavings = () => {
    // Existing calculation logic
    const wasteSavingRate = inputs.industryType === 'restaurant' ? 0.45 : 0.35;
    const monthlyReduction = inputs.currentCost * wasteSavingRate;
    const yearlyReduction = monthlyReduction * 12;
    const recyclingRevenue = inputs.wasteVolume * 2.5;
    const operationalSavings = inputs.employeeCount * 15;
    const totalSavings = yearlyReduction + recyclingRevenue + operationalSavings;
    const implementationCost = 5000;
    const roi = (totalSavings - implementationCost) / implementationCost * 100;

    setSavings({
      monthlyReduction,
      yearlyReduction,
      recyclingRevenue,
      operationalSavings,
      totalSavings,
      roi
    });
  };

  const handleReportRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailCapture(prev => ({ ...prev, isSubmitting: true, error: null }));

    // Here you would integrate with your email service
    // This is a mock implementation
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setEmailCapture(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        isSuccess: true,
        error: null 
      }));

      // Hide the form after 2 seconds of showing success
      setTimeout(() => {
        setShowEmailCapture(false);
        setEmailCapture(prev => ({ ...prev, isSuccess: false, email: '' }));
      }, 2000);
    } catch (error) {
      setEmailCapture(prev => ({ 
        ...prev, 
        isSubmitting: false,
        error: 'Failed to send report. Please try again.' 
      }));
    }
  };

  const renderProgressBar = () => (
    <div className="mb-12">
      <div className="flex justify-between mb-3">
        <span className="text-sm font-medium text-gray-600">
          Step {step} of {totalSteps}
        </span>
        <span className="text-sm font-medium bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
          {Math.round((step / totalSteps) * 100)}% Complete
        </span>
      </div>
      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        >
          <div className="h-full w-full bg-[length:20px_20px] bg-[linear-gradient(45deg,rgba(255,255,255,.15)25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)50%,rgba(255,255,255,.15)75%,transparent_75%,transparent)] animate-[progress-stripes_1s_linear_infinite]" />
        </div>
      </div>
    </div>
  );

  const renderQuestion = () => {
    const QuestionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <div className="max-w-4xl mx-auto transform transition-all duration-500 ease-out">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-lg backdrop-filter">
          {children}
        </div>
      </div>
    );

    const ButtonGrid: React.FC<{
      options: Array<{
        value: string;
        label: string;
        icon: string;
        desc: string;
      }>;
      onClick: (value: string) => void;
      columns?: number;
    }> = ({ options, onClick, columns = 3 }) => (
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onClick(option.value)}
            className="group relative overflow-hidden bg-white rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-gray-100 hover:border-primary-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-6 text-center">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {option.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {option.desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </button>
        ))}
      </div>
    );

    switch (step) {
      case 1:
        return (
          <QuestionWrapper>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              Who are we calculating savings for?
            </h2>
            <ButtonGrid
              options={[
                { value: 'business', label: 'Business', icon: '🏢', desc: 'For companies and organizations' },
                { value: 'individual', label: 'Individual', icon: '👤', desc: 'For personal or household use' }
              ]}
              onClick={(value) => handleQuestionnaireUpdate('userType', value)}
              columns={2}
            />
          </QuestionWrapper>
        );

      case 2:
        if (questionnaire.userType === 'business') {
          return (
            <QuestionWrapper>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                What's your organization size?
              </h2>
              <ButtonGrid
                options={[
                  { value: 'small', label: 'Small Business', icon: '🏠', desc: '1-50 employees' },
                  { value: 'medium', label: 'Medium Enterprise', icon: '🏢', desc: '51-200 employees' },
                  { value: 'large', label: 'Large Corporation', icon: '🏭', desc: '200+ employees' }
                ]}
                onClick={(value) => handleQuestionnaireUpdate('organizationSize', value)}
              />
            </QuestionWrapper>
          );
        } else {
          return (
            <QuestionWrapper>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                What's your household size?
              </h2>
              <ButtonGrid
                options={[
                  { value: 'single', label: 'Single', icon: '👤', desc: '1 person' },
                  { value: 'couple', label: 'Couple', icon: '👥', desc: '2 people' },
                  { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦', desc: '3-5 people' },
                  { value: 'shared', label: 'Shared', icon: '🏠', desc: '6+ people' }
                ]}
                onClick={(value) => handleQuestionnaireUpdate('householdSize', value)}
                columns={2}
              />
            </QuestionWrapper>
          );
        }

      case 3:
        if (questionnaire.userType === 'business') {
          return (
            <QuestionWrapper>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                Tell us about your current recycling program
              </h2>
              <ButtonGrid
                options={[
                  { value: 'none', label: 'No Program', icon: '📦', desc: 'Not currently recycling' },
                  { value: 'basic', label: 'Basic Program', icon: '♻️', desc: 'Basic sorting and recycling' },
                  { value: 'advanced', label: 'Advanced Program', icon: '🌟', desc: 'Comprehensive program' }
                ]}
                onClick={(value) => handleQuestionnaireUpdate('currentRecycling', value)}
              />
            </QuestionWrapper>
          );
        } else {
          return (
            <QuestionWrapper>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                What type of residence do you live in?
              </h2>
              <ButtonGrid
                options={[
                  { value: 'apartment', label: 'Apartment', icon: '🏢', desc: 'Apartment or flat' },
                  { value: 'house', label: 'House', icon: '🏡', desc: 'Single family home' },
                  { value: 'condo', label: 'Condo', icon: '🏘️', desc: 'Condominium unit' }
                ]}
                onClick={(value) => handleQuestionnaireUpdate('residenceType', value)}
              />
            </QuestionWrapper>
          );
        }

      case 4:
        if (questionnaire.userType === 'business') {
          return (
            <QuestionWrapper>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                What's your primary sustainability goal?
              </h2>
              <ButtonGrid
                options={[
                  { value: 'cost', label: 'Cost Savings', icon: '💰', desc: 'Reduce waste management costs' },
                  { value: 'environment', label: 'Environmental Impact', icon: '🌍', desc: 'Minimize environmental footprint' },
                  { value: 'both', label: 'Balanced Approach', icon: '✨', desc: 'Balance savings and sustainability' }
                ]}
                onClick={(value) => handleQuestionnaireUpdate('sustainabilityGoal', value)}
              />
            </QuestionWrapper>
          );
        } else {
          return (
            <QuestionWrapper>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                How often is your waste collected?
              </h2>
              <ButtonGrid
                options={[
                  { value: 'weekly', label: 'Weekly', icon: '📅', desc: 'Once per week' },
                  { value: 'biweekly', label: 'Bi-weekly', icon: '📆', desc: 'Every two weeks' },
                  { value: 'monthly', label: 'Monthly', icon: '🗓️', desc: 'Once per month' }
                ]}
                onClick={(value) => handleQuestionnaireUpdate('collectionFrequency', value)}
              />
            </QuestionWrapper>
          );
        }

      default:
        return null;
    }
  };

  const renderCalculator = () => {
    const isBusinessUser = questionnaire.userType === 'business';

    return (
      <div className="grid lg:grid-cols-2 gap-12 animate-fade-in">
        {/* Calculator Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {isBusinessUser ? 'Business Details' : 'Household Details'}
          </h2>
          
          <div className="space-y-6">
            {isBusinessUser ? (
              <>
                {/* Business-specific fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry Type
                  </label>
                  <select
                    value={inputs.industryType}
                    onChange={(e) => setInputs({ ...inputs, industryType: e.target.value })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    {industryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    value={inputs.employeeCount}
                    onChange={(e) => setInputs({ ...inputs, employeeCount: Number(e.target.value) })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Individual-specific fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Monthly Utility Bill ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentCost}
                    onChange={(e) => setInputs({ ...inputs, currentCost: Number(e.target.value) })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="e.g., 150"
                  />
                </div>
              </>
            )}

            {/* Common fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Waste Volume (bags)
              </label>
              <input
                type="number"
                value={inputs.wasteVolume}
                onChange={(e) => setInputs({ ...inputs, wasteVolume: Number(e.target.value) })}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="e.g., 20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Monthly Waste Management Cost ($)
              </label>
              <input
                type="number"
                value={inputs.currentCost}
                onChange={(e) => setInputs({ ...inputs, currentCost: Number(e.target.value) })}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="e.g., 200"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateSavings}
              className="w-full py-3 px-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Calculate Savings
            </button>
          </div>
        </div>

        {/* Results Display */}
        <div className="bg-gray-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-semibold mb-8">Your Potential Savings</h2>

          {savings ? (
            <div className="space-y-8">
              {/* Monthly Savings */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="text-sm text-gray-400 mb-1">Monthly Reduction</div>
                <div className="text-3xl font-bold text-primary-400">
                  ${savings.monthlyReduction.toLocaleString()}
                </div>
              </div>

              {/* Yearly Overview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-1">Yearly Reduction</div>
                  <div className="text-2xl font-bold text-green-400">
                    ${savings.yearlyReduction.toLocaleString()}
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-1">ROI</div>
                  <div className="text-2xl font-bold text-blue-400">
                    {savings.roi.toFixed(1)}%
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-gray-800/50 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-medium mb-4">Savings Breakdown</h3>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Recycling Revenue</span>
                  <span className="font-medium">${savings.recyclingRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Operational Savings</span>
                  <span className="font-medium">${savings.operationalSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-700">
                  <span className="text-gray-200 font-medium">Total Annual Savings</span>
                  <span className="font-bold text-primary-400">
                    ${savings.totalSavings.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Download Report Section */}
              <div className="relative">
                <div className="text-center">
                  <button 
                    onClick={() => setShowEmailCapture(true)}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    Download Detailed Report
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </div>

                {/* Email Capture Modal */}
                {showEmailCapture && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setShowEmailCapture(false)} />
                    <div className="relative bg-white rounded-xl p-6 w-full max-w-md shadow-xl animate-fade-in">
                      <button 
                        onClick={() => setShowEmailCapture(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Get Your Savings Report
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Enter your email address and we'll send you a detailed breakdown of your potential savings.
                      </p>

                      {emailCapture.isSuccess ? (
                        <div className="text-center text-green-600 py-4">
                          <svg className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="font-medium">Report sent successfully!</p>
                          <p className="text-sm text-gray-600 mt-1">Check your inbox for the detailed report.</p>
                        </div>
                      ) : (
                        <form onSubmit={handleReportRequest} className="space-y-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={emailCapture.email}
                              onChange={(e) => setEmailCapture(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                              placeholder="you@example.com"
                              required
                            />
                          </div>

                          {emailCapture.error && (
                            <p className="text-sm text-red-600">{emailCapture.error}</p>
                          )}

                          <button
                            type="submit"
                            disabled={emailCapture.isSubmitting}
                            className="w-full py-3 px-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50"
                          >
                            {emailCapture.isSubmitting ? (
                              <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Sending...
                              </span>
                            ) : (
                              'Send Report'
                            )}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
              <svg className="w-16 h-16 mb-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p className="text-lg">
                Fill in your details to see potential savings
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
            Calculate Your Cost Savings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much {questionnaire.userType === 'business' ? 'your organization' : 'you'} can save with our smart waste management solution
          </p>
        </div>

        {/* Free Guide Banner */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 backdrop-blur-lg backdrop-filter rounded-2xl p-8 mb-12 border border-primary-200 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-5xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">📚</div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-1">Get Your Free Recycling Guide</h3>
                <p className="text-primary-700">Complete the calculator to receive our comprehensive recycling guide</p>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="inline-flex items-center px-6 py-2 border-2 border-primary-300 text-sm font-medium rounded-full text-primary-700 bg-white/50 backdrop-blur-sm">
                Limited Time Offer
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Main Content */}
        {step < 5 ? renderQuestion() : renderCalculator()}
      </div>
    </div>
  );
}; 
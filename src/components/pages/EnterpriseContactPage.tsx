import React, { useState, useEffect } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { motion } from 'framer-motion';

interface FormData {
  // Company Information
  companyName: string;
  industry: string;
  companySize: string;
  website: string;

  // Contact Information
  contactName: string;
  jobTitle: string;
  email: string;
  phone: string;

  // Current Waste Management
  currentSolution: string;
  monthlyWasteVolume: string;
  wasteTypes: string[];
  currentChallenges: string[];

  // Requirements
  expectedUnits: string;
  preferredDeployment: string;
  timeframe: string;
  budget: string;

  // Additional Information
  integrationNeeds: string;
  additionalInfo: string;
}

const industryOptions = [
  'Manufacturing',
  'Retail',
  'Healthcare',
  'Education',
  'Hospitality',
  'Office/Corporate',
  'Government',
  'Other'
];

const companySizeOptions = [
  '1-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const wasteTypeOptions = [
  'General Waste',
  'Recyclables',
  'Organic Waste',
  'Hazardous Materials',
  'E-waste',
  'Paper/Cardboard',
  'Plastics',
  'Metal',
  'Glass'
];

const challengeOptions = [
  'High Waste Management Costs',
  'Inefficient Sorting Process',
  'Limited Recycling Capabilities',
  'Lack of Waste Analytics',
  'Space Constraints',
  'Compliance Issues',
  'Staff Training',
  'Environmental Impact'
];

const deploymentOptions = [
  'Single Location',
  'Multiple Locations',
  'Phased Rollout',
  'Pilot Program First'
];

const timeframeOptions = [
  'Immediate (1-3 months)',
  'Short-term (3-6 months)',
  'Medium-term (6-12 months)',
  'Long-term (12+ months)'
];

export const EnterpriseContactPage: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    industry: '',
    companySize: '',
    website: '',
    contactName: '',
    jobTitle: '',
    email: '',
    phone: '',
    currentSolution: '',
    monthlyWasteVolume: '',
    wasteTypes: [],
    currentChallenges: [],
    expectedUnits: '',
    preferredDeployment: '',
    timeframe: '',
    budget: '',
    integrationNeeds: '',
    additionalInfo: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (field: 'wasteTypes' | 'currentChallenges', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent({
      action: 'submit_enterprise_form',
      category: 'enterprise',
      label: formData.companyName,
      additionalData: {
        industry: formData.industry,
        companySize: formData.companySize,
        expectedUnits: formData.expectedUnits,
        timeframe: formData.timeframe
      }
    });
    // TODO: Implement form submission logic
    console.log('Enterprise form submitted:', formData);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-12 sm:px-6 lg:px-8">
        {/* Progress Steps - Mobile Friendly */}
        <div className="mb-8 sm:mb-12">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#4285F4]">EcoTale</h1>
          </div>
          
          {/* Progress Steps */}
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden sm:block absolute top-5 left-0 w-full h-0.5 bg-gray-200">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${(currentStep - 1) * 25}%` }}
              />
            </div>

            {/* Steps */}
            <div className="flex justify-between">
              {[
                { step: 1, label: 'Company', sublabel: 'Information' },
                { step: 2, label: 'Contact', sublabel: 'Details' },
                { step: 3, label: 'Current', sublabel: 'Setup' },
                { step: 4, label: 'Requirements', sublabel: '' },
                { step: 5, label: 'Additional', sublabel: 'Info' }
              ].map(({ step, label, sublabel }) => (
                <div key={step} className="flex flex-col items-center relative">
                  <div className={`
                    w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                    text-sm sm:text-base font-semibold relative z-10
                    ${step === currentStep
                      ? 'bg-blue-600 text-white'
                      : step < currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                    }
                    transition-all duration-300
                  `}>
                    {step < currentStep ? '✓' : step}
                  </div>
                  <div className="text-center mt-2">
                    <div className="text-xs sm:text-sm font-medium text-gray-900">{label}</div>
                    {sublabel && (
                      <div className="text-[10px] sm:text-xs text-gray-500">{sublabel}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Step 1: Company Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Company Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Industry</option>
                      {industryOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Company Size</option>
                      {companySizeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Current Waste Management */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Current Waste Management</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Waste Management Solution
                    </label>
                    <textarea
                      name="currentSolution"
                      value={formData.currentSolution}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe your current waste management process..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Waste Volume (in tons or cubic meters)
                    </label>
                    <input
                      type="text"
                      name="monthlyWasteVolume"
                      value={formData.monthlyWasteVolume}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Types of Waste Handled
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {wasteTypeOptions.map(option => (
                        <label key={option} className="flex items-center space-x-2 sm:space-x-3 p-1.5 sm:p-2 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            checked={formData.wasteTypes.includes(option)}
                            onChange={() => handleCheckboxChange('wasteTypes', option)}
                            className="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-xs sm:text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Current Challenges
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {challengeOptions.map(option => (
                        <label key={option} className="flex items-center space-x-2 sm:space-x-3 p-1.5 sm:p-2 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            checked={formData.currentChallenges.includes(option)}
                            onChange={() => handleCheckboxChange('currentChallenges', option)}
                            className="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-xs sm:text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Requirements */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Requirements</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expected Number of Units
                    </label>
                    <input
                      type="number"
                      name="expectedUnits"
                      value={formData.expectedUnits}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Deployment Method
                    </label>
                    <select
                      name="preferredDeployment"
                      value={formData.preferredDeployment}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Deployment Method</option>
                      {deploymentOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Implementation Timeframe
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Timeframe</option>
                      {timeframeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Budget Range</option>
                      <option value="Under $10,000">Under $10,000</option>
                      <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                      <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                      <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                      <option value="$500,000+">$500,000+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Additional Information */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Additional Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Integration Requirements
                    </label>
                    <textarea
                      name="integrationNeeds"
                      value={formData.integrationNeeds}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe any specific integration requirements or existing systems..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Any other information you'd like to share..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 sm:justify-between">
              <button
                type="button"
                onClick={prevStep}
                className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-300 ${
                  currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              
              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseContactPage; 
import React, { useState } from 'react';

interface SavingsInputs {
  wasteVolume: number;
  currentCost: number;
  employeeCount: number;
  industryType: string;
}

interface CalculatedSavings {
  monthlyReduction: number;
  yearlyReduction: number;
  recyclingRevenue: number;
  operationalSavings: number;
  totalSavings: number;
  roi: number;
}

export const CalculateCostSavingsPage: React.FC = () => {
  const [inputs, setInputs] = useState<SavingsInputs>({
    wasteVolume: 100,
    currentCost: 1000,
    employeeCount: 50,
    industryType: 'office'
  });

  const [savings, setSavings] = useState<CalculatedSavings | null>(null);

  const industryOptions = [
    { value: 'office', label: 'Office Space' },
    { value: 'retail', label: 'Retail' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' }
  ];

  const calculateSavings = () => {
    // Example calculation logic - replace with actual business logic
    const wasteSavingRate = inputs.industryType === 'restaurant' ? 0.45 : 0.35;
    const monthlyReduction = inputs.currentCost * wasteSavingRate;
    const yearlyReduction = monthlyReduction * 12;
    const recyclingRevenue = inputs.wasteVolume * 2.5; // Example: $2.5 per unit of waste
    const operationalSavings = inputs.employeeCount * 15; // Example: $15 per employee
    const totalSavings = yearlyReduction + recyclingRevenue + operationalSavings;
    const implementationCost = 5000; // Example fixed cost
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Cost Savings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much your organization can save with our smart waste management solution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Input Your Details
            </h2>
            
            <div className="space-y-6">
              {/* Industry Type */}
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

              {/* Monthly Waste Volume */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Waste Volume (cubic yards)
                </label>
                <input
                  type="number"
                  value={inputs.wasteVolume}
                  onChange={(e) => setInputs({ ...inputs, wasteVolume: Number(e.target.value) })}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              {/* Current Monthly Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Monthly Waste Management Cost ($)
                </label>
                <input
                  type="number"
                  value={inputs.currentCost}
                  onChange={(e) => setInputs({ ...inputs, currentCost: Number(e.target.value) })}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              {/* Employee Count */}
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

                {/* CTA */}
                <div className="text-center">
                  <button className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    Get Detailed Report
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
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

        {/* Additional Information */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accurate Predictions</h3>
            <p className="text-gray-600">Based on real data from similar organizations in your industry</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed ROI</h3>
            <p className="text-gray-600">We guarantee these savings or your money back</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Setup</h3>
            <p className="text-gray-600">Start saving within 48 hours of implementation</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 
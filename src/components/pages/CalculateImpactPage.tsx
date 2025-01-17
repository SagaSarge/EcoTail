import React, { useState } from 'react';

interface ImpactInputs {
  wasteVolume: number;
  recyclingRate: number;
  wasteType: string;
  householdSize: number;
}

interface CalculatedImpact {
  carbonReduction: number;
  treesEquivalent: number;
  waterSaved: number;
  energySaved: number;
}

export const CalculateImpactPage: React.FC = () => {
  const [inputs, setInputs] = useState<ImpactInputs>({
    wasteVolume: 0,
    recyclingRate: 0,
    wasteType: 'mixed',
    householdSize: 1
  });

  const [impact, setImpact] = useState<CalculatedImpact | null>(null);

  const wasteTypes = [
    { id: 'mixed', label: 'Mixed Waste' },
    { id: 'organic', label: 'Organic Waste' },
    { id: 'plastic', label: 'Plastic' },
    { id: 'paper', label: 'Paper' },
    { id: 'metal', label: 'Metal' }
  ];

  const calculateImpact = () => {
    // Example calculation - replace with actual formulas
    const carbonReduction = inputs.wasteVolume * (inputs.recyclingRate / 100) * 2.5;
    const treesEquivalent = carbonReduction * 0.5;
    const waterSaved = inputs.wasteVolume * 1000;
    const energySaved = inputs.wasteVolume * 500;

    setImpact({
      carbonReduction,
      treesEquivalent,
      waterSaved,
      energySaved
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 lg:text-5xl">
            Calculate Your
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"> Environmental Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how your waste reduction efforts contribute to a sustainable future
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-8">Enter Your Details</h2>
            
            <div className="space-y-6">
              {/* Waste Volume */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Waste Volume (kg)
                </label>
                <input
                  type="number"
                  value={inputs.wasteVolume}
                  onChange={(e) => setInputs({ ...inputs, wasteVolume: Number(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter waste volume"
                />
              </div>

              {/* Recycling Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Recycling Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.recyclingRate}
                  onChange={(e) => setInputs({ ...inputs, recyclingRate: Number(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter recycling rate"
                />
              </div>

              {/* Waste Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Waste Type
                </label>
                <select
                  value={inputs.wasteType}
                  onChange={(e) => setInputs({ ...inputs, wasteType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {wasteTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* Household Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Household Size
                </label>
                <input
                  type="number"
                  value={inputs.householdSize}
                  onChange={(e) => setInputs({ ...inputs, householdSize: Number(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter household size"
                />
              </div>

              <button
                onClick={calculateImpact}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                Calculate Impact
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-8">Your Environmental Impact</h2>
            
            {impact ? (
              <div className="space-y-8">
                {/* Carbon Reduction */}
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Carbon Reduction</h3>
                      <p className="text-3xl font-bold text-green-600">{impact.carbonReduction.toFixed(1)} tons CO₂</p>
                    </div>
                  </div>
                </div>

                {/* Trees Equivalent */}
                <div className="bg-emerald-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Trees Equivalent</h3>
                      <p className="text-3xl font-bold text-emerald-600">{impact.treesEquivalent.toFixed(0)} trees</p>
                    </div>
                  </div>
                </div>

                {/* Water Saved */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Water Saved</h3>
                      <p className="text-3xl font-bold text-blue-600">{impact.waterSaved.toFixed(0)} liters</p>
                    </div>
                  </div>
                </div>

                {/* Energy Saved */}
                <div className="bg-yellow-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Energy Saved</h3>
                      <p className="text-3xl font-bold text-yellow-600">{impact.energySaved.toFixed(0)} kWh</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg">Enter your details to see your environmental impact</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 
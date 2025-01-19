export const ProblemSolvingSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-50 to-green-50 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-50 to-green-50 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Headline with enhanced styling */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What other trash cans{" "}
            <span className="relative">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
                don't do
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn waste management problems into opportunities
          </p>
        </div>

        {/* Enhanced Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
            <div className="relative p-8 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-emerald-200 transition duration-500">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="text-emerald-500 text-lg font-semibold ml-3">Earn You Money</div>
              </div>
              <p className="text-gray-600">Reduce waste expenses and turn recyclables into revenue</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
            <div className="relative p-8 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-emerald-200 transition duration-500">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="text-emerald-500 text-lg font-semibold ml-3">Educate You</div>
              </div>
              <p className="text-gray-600">Learn how to reduce your carbon footprint with real-time insights and personalized tips on sustainable waste habits.</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
            <div className="relative p-8 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-emerald-200 transition duration-500">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5M8 8v8m8 0h1.5a2.5 2.5 0 002.5-2.5V8.5A2.5 2.5 0 0017.5 6H16m-8 6H6.5A2.5 2.5 0 014 9.5v-3A2.5 2.5 0 016.5 4H8" />
                  </svg>
                </div>
                <div className="text-emerald-500 text-lg font-semibold ml-3">Real-time Insights</div>
              </div>
              <p className="text-gray-600">Get real-time data on waste patterns and savings opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
export const ProblemSolvingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#4285F4]/10 to-[#4285F4]/5 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0F9D58]/10 to-[#0F9D58]/5 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Headline with highlight box */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What other trash cans{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-[#DB4437] rounded-md" />
              <span className="relative px-2 text-white">
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
            <div className="absolute -inset-1 bg-[#0F9D58] rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[3px] border-[#0F9D58]/30 hover:border-[#0F9D58]/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,157,88,0.2)]">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#0F9D58]/10 rounded-lg">
                  <svg className="w-8 h-8 text-[#0F9D58]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                  </svg>
                </div>
                <div className="text-[#0F9D58] text-lg font-semibold ml-3">Earn You Money</div>
              </div>
              <p className="text-gray-600">Reduce waste expenses and turn recyclables into revenue</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-[#F4B400] rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[3px] border-[#F4B400]/30 hover:border-[#F4B400]/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(244,180,0,0.2)]">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#F4B400]/10 rounded-lg">
                  <svg className="w-8 h-8 text-[#F4B400]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                  </svg>
                </div>
                <div className="text-[#F4B400] text-lg font-semibold ml-3">Educate You</div>
              </div>
              <p className="text-gray-600">Learn how to reduce your carbon footprint with real-time insights and personalized tips on sustainable waste habits.</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-[#4285F4] rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-8 rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[3px] border-[#4285F4]/30 hover:border-[#4285F4]/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(66,133,244,0.2)]">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#4285F4]/10 rounded-lg">
                  <svg className="w-8 h-8 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div className="text-[#4285F4] text-lg font-semibold ml-3">Real-time Insights</div>
              </div>
              <p className="text-gray-600">Get real-time data on waste patterns and savings opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
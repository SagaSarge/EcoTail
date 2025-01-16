export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Welcome to <span className="text-primary">EcoTail</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Revolutionary smart trash can system that makes recycling and waste management easy and fun.
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-8 py-3 text-white bg-primary rounded-lg hover:bg-green-600 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
} 
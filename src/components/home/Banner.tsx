
const Banner = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="md:flex justify-between gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 pl-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A0B2E]">
                A new kind of Bank
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </p>
              <div className="flex  gap-4">
                <button className="bg-[#d40950] h-12 hover:bg-[#d40950e1] font-bold flex gap-2 hover:gap-4 text-white px-3 py-3 rounded-sm shadow-md shadow-gray-500/50 hover:shadow-gray-800/80 opacity-85 transition-all">
                  Get Started
                </button>
                <button
                 
                  className="border-[#d40950] border-1  font-bold flex gap-2 hover:gap-4 text-black px-3 py-3 rounded-sm shadow-md shadow-gray-500/50 hover:shadow-gray-800/80 opacity-85 transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>
  
            {/* Right Column - Phone Mockup */}
            <div className="flex justify-end">
              {/* Phone Frame */}
             <img src="https://i.ibb.co.com/F48PdPRz/Screenshot-2025-02-26-004245-removebg-preview.png" alt=""  />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
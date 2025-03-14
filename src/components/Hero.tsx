import { Globe } from "./magicui/globe";

export function Hero() {
  return (
    <section className="relative h-screen bg-white overflow-hidden" id="home">
      <div className="container mx-auto px-6 h-full flex flex-col items-center">
        {/* Title and intro text */}
        <div className="text-center mt-16 max-w-3xl">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl lg:text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-600/50">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-600/50">
              Shekhar Suman
            </h1>
          </div>
          <p className="text-xl lg:text-2xl text-gray-600/90 font-light">
            I create digital solutions using AI
          </p>
        </div>

        {/* Globe container with smaller size */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 w-full" 
          style={{ 
            bottom: '-45%',
            maxWidth: 'min(600px, 90vw)',
            width: '90vw'
          }}
        >
          <div className="relative aspect-square">
            <Globe 
              className="absolute left-0 right-0 scale-95 md:scale-100 lg:scale-110 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
} 
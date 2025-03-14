import Image from 'next/image';

export function AboutMe() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Photo Section with thicker gradient border */}
          <div className="lg:flex-1 w-full max-w-md">
            <div className="p-3 rounded-2xl bg-gradient-to-b from-black via-gray-500 to-white shadow-xl">
              <div className="aspect-square relative rounded-xl overflow-hidden bg-white">
                <Image
                  src="/profile.png" // This should match your image file name
                  alt="Shekhar Suman"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:flex-1">
            <h2 className="text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-600/50">
              About Me
            </h2>
            <div className="space-y-4 font-light">
              <p className="text-base text-gray-600">
                With over 5 years of experience in Machine Learning and AI, I specialize in developing cutting-edge solutions that transform complex data into actionable insights.
              </p>
              <p className="text-base text-gray-600">
                My expertise spans across Computer Vision, Natural Language Processing, and Reinforcement Learning, with a strong foundation in both theoretical concepts and practical applications.
              </p>
              <p className="text-base text-gray-600">
                I&apos;m passionate about staying at the forefront of technological advancements and contributing to the AI community through open-source projects and research publications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
import Image from 'next/image';

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Medical Diagnosis",
      description: "Developed a deep learning system for automated medical image analysis with 98% accuracy.",
      image: "/project1.png",
      tags: ["Computer Vision", "PyTorch", "Medical AI"],
      link: "#",
    },
    {
      title: "Natural Language Processing Platform",
      description: "Built a scalable NLP platform processing millions of documents daily.",
      image: "/project2.png",
      tags: ["NLP", "BERT", "AWS"],
      link: "#",
    },
    {
      title: "Reinforcement Learning for Robotics",
      description: "Implemented RL algorithms for robotic arm control in manufacturing.",
      image: "/project3.png",
      tags: ["Reinforcement Learning", "ROS", "Python"],
      link: "#",
    },
    {
      title: "Financial Forecasting System",
      description: "Created an ML system for stock market prediction using time series analysis.",
      image: "/project4.png",
      tags: ["Time Series", "TensorFlow", "Finance"],
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-600/50 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light mb-2 text-gray-800">{project.title}</h3>
                <p className="text-base text-gray-600 mb-4 font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-gray-600 font-light hover:text-gray-800 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
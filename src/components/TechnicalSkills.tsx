export function TechnicalSkills() {
  const skills = [
    {
      category: "Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Computer Vision", "NLP"],
    },
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "Java", "C++", "JavaScript"],
    },
    {
      category: "Big Data",
      items: ["Spark", "Hadoop", "MongoDB", "PostgreSQL", "Redis", "Kafka"],
    },
    {
      category: "Cloud & MLOps",
      items: ["AWS", "GCP", "Docker", "Kubernetes", "MLflow", "DVC"],
    },
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-600/50 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((skillSet) => (
            <div
              key={skillSet.category}
              className="bg-white rounded-xl overflow-hidden border border-gray-100"
            >
              <div className="py-4 px-6 bg-gradient-to-r from-gray-100 to-gray-50">
                <h3 className="text-lg font-light text-gray-800">{skillSet.category}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {skillSet.items.map((item) => (
                    <div
                      key={item}
                      className="px-3 py-2 rounded-lg bg-gray-50 text-gray-600 text-sm font-light"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
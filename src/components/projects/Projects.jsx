import companyData from "../../lib/data";


const Projects = () => {
  const { projects } = companyData;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our recent work and innovative solutions in web development and education technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
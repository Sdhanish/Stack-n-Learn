import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, ArrowRight } from 'lucide-react';
import companyData from "../../lib/data";

const Projects = () => {
  const { projects } = companyData;

  // Enhanced project data with more details for SaaS portfolio
  const modernProjects = [
    {
      title: "E-Learning Platform",
      description: "A comprehensive learning management system with interactive courses, progress tracking, and real-time collaboration features.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      category: "Education Tech",
      image: "/hero/hero-1.png",
      metrics: { users: "10K+", completion: "85%", rating: "4.9/5" },
      features: ["Interactive Videos", "Progress Analytics", "Real-time Chat", "Mobile App"]
    },
    {
      title: "Corporate Training Portal",
      description: "Enterprise-level training portal with advanced analytics, compliance tracking, and customizable learning paths.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Docker"],
      category: "Enterprise",
      image: "/hero/hero-2.png",
      metrics: { companies: "50+", learners: "5K+", efficiency: "40%" },
      features: ["Custom Branding", "Analytics Dashboard", "API Integration", "SSO Support"]
    },
    {
      title: "Educational Mobile App",
      description: "Cross-platform mobile application for interactive learning with offline capabilities and gamification elements.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Mobile",
      image: "/hero/vr.png",
      metrics: { downloads: "25K+", retention: "78%", sessions: "12/user" },
      features: ["Offline Learning", "Gamification", "Push Notifications", "Social Learning"]
    },
    {
      title: "API Development Suite",
      description: "RESTful API development framework with comprehensive documentation, testing tools, and monitoring dashboard.",
      technologies: ["Node.js", "Express", "Swagger", "Jest"],
      category: "Developer Tools",
      image: "/hero/hero-image-2.png",
      metrics: { endpoints: "200+", uptime: "99.9%", response: "< 100ms" },
      features: ["Auto Documentation", "Real-time Monitoring", "Load Testing", "Version Control"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Case Studies & Portfolio
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories &{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses and learners achieve their goals through innovative technology solutions
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {modernProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-green-50 group-hover:border-green-100">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <Github className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-bold text-green-600">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Case Study Button */}
                  <motion.button 
                    className="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-green-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50" />
            <div className="relative z-10">
              <Users className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Next Project?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our community of successful learners and start building amazing projects that make a difference
              </p>
              <motion.button 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
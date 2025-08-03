
import { Code, BookOpen, Users, Globe, Rocket, Shield, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import companyData from '../../lib/data';

const Services = () => {
  const { services } = companyData;

  // Modern SaaS-focused services
  const modernServices = [
    {
      title: "Full-Stack Development Training",
      description: "Master modern web technologies with hands-on projects and expert mentorship",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-green-400 to-green-600",
      bgGradient: "from-green-50 to-white"
    },
    {
      title: "Project-Based Learning",
      description: "Build real-world applications with industry-standard practices and methodologies",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-emerald-400 to-emerald-600",
      bgGradient: "from-emerald-50 to-white"
    },
    {
      title: "Expert Mentorship",
      description: "Get personalized guidance from industry professionals and accelerate your growth",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-green-700",
      bgGradient: "from-green-50 to-white"
    },
    {
      title: "Career Support",
      description: "Comprehensive career guidance, portfolio building, and job placement assistance",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-teal-400 to-teal-600",
      bgGradient: "from-teal-50 to-white"
    },
    {
      title: "Live Coding Sessions",
      description: "Interactive coding sessions with real-time feedback and collaborative learning",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-50 to-white"
    },
    {
      title: "Certification Programs",
      description: "Industry-recognized certificates to validate your skills and boost your career",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-white"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-green-100/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
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
            <Zap className="w-4 h-4 mr-2" />
            What We Offer
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empower Your{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Tech Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your passion into profession with our comprehensive learning ecosystem designed for modern developers
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modernServices.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${service.bgGradient} border border-green-100 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-green-200 overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300">
                    <span>Learn More</span>
                    <motion.div
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of learners who have transformed their careers with Stack N Learn
              </p>
              <motion.button 
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
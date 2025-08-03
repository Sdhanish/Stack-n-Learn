import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, Briefcase, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer at Google",
      company: "Google",
      image: "/hero/hero-1.png",
      rating: 5,
      testimonial: "Stack N Learn transformed my career completely. The mentorship was incredible and the projects helped me build a portfolio that landed me my dream job at Google. The instructors are industry experts who truly care about your success.",
      previousRole: "Final Year Student",
      salaryIncrease: "₹15L Package",
      duration: "6 months"
    },
    {
      name: "Priya Patel",
      role: "Full Stack Developer at Microsoft",
      company: "Microsoft",
      image: "/hero/hero-2.png",
      rating: 5,
      testimonial: "The hands-on approach and real-world projects at Stack N Learn gave me the confidence to tackle any coding challenge. From zero programming knowledge to a Microsoft offer - this journey wouldn't have been possible without their guidance.",
      previousRole: "Marketing Executive",
      salaryIncrease: "₹18L Package",
      duration: "8 months"
    },
    {
      name: "Arjun Gupta",
      role: "Lead Developer at Flipkart",
      company: "Flipkart",
      image: "/hero/vr.png",
      rating: 5,
      testimonial: "What sets Stack N Learn apart is their focus on industry-relevant skills. The curriculum is constantly updated, and the 1-on-1 mentorship helped me overcome every challenge. Now I'm leading a team of 12 developers!",
      previousRole: "Junior Developer",
      salaryIncrease: "₹22L Package",
      duration: "4 months"
    },
    {
      name: "Sneha Reddy",
      role: "Frontend Architect at Zomato",
      company: "Zomato",
      image: "/hero/hero-image-2.png",
      rating: 5,
      testimonial: "The community support and career guidance were exceptional. Stack N Learn didn't just teach me to code; they taught me how to think like a developer and communicate effectively in technical teams.",
      previousRole: "Fresher",
      salaryIncrease: "₹12L Package",
      duration: "5 months"
    },
    {
      name: "Vikash Kumar",
      role: "DevOps Engineer at Amazon",
      company: "Amazon",
      image: "/hero/hero-1.png",
      rating: 5,
      testimonial: "The placement assistance was phenomenal. From resume building to interview preparation, they supported me at every step. The mock interviews and technical rounds practice were exactly what I needed.",
      previousRole: "System Admin",
      salaryIncrease: "₹20L Package",
      duration: "7 months"
    },
    {
      name: "Meera Singh",
      role: "Data Scientist at Swiggy",
      company: "Swiggy",
      image: "/hero/vr.png",
      rating: 5,
      testimonial: "Stack N Learn's approach to teaching complex concepts with practical examples is brilliant. The projects I built during the course directly helped me in my interviews. Highly recommend for anyone serious about tech careers!",
      previousRole: "Data Analyst",
      salaryIncrease: "₹16L Package",
      duration: "6 months"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "15,000+",
      label: "Success Stories",
      description: "Lives transformed"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: "95%",
      label: "Placement Rate",
      description: "Within 6 months"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      value: "₹15L",
      label: "Average Package",
      description: "First job offers"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "4.9/5",
      label: "Student Rating",
      description: "Consistent excellence"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
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
            <Star className="w-4 h-4 mr-2" />
            Student Success Stories
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Lives, One{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Success Story
            </span>{' '}
            at a Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real students who transformed their careers with Stack N Learn. Your success story could be next!
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-50"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex p-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-green-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-50 group-hover:border-green-100 h-full relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-green-200 group-hover:text-green-300 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Student Info */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-green-600 font-semibold">{testimonial.role}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="mt-6 pt-6 border-t border-green-100">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-sm font-semibold text-green-600">{testimonial.salaryIncrease}</div>
                        <div className="text-xs text-gray-500">Package</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600">{testimonial.duration}</div>
                        <div className="text-xs text-gray-500">Duration</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600">Career Switch</div>
                        <div className="text-xs text-gray-500">Success</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful learners who have transformed their careers with personalized mentorship and industry-relevant training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Free Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
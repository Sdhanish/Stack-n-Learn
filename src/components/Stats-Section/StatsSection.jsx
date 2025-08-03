import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, BookOpen, TrendingUp, Award, Clock, Globe, Target } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Counter animation hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const startValue = 0;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * (end - startValue) + startValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
  };

  const stats = [
    {
      icon: <Star className="w-8 h-8" />,
      value: 4.9,
      suffix: "",
      label: "Student Rating",
      description: "Based on 2,500+ reviews",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      isDecimal: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 15000,
      suffix: "+",
      label: "Active Learners",
      description: "Growing community worldwide",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: 50,
      suffix: "+",
      label: "Courses & Programs",
      description: "Comprehensive curriculum",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 95,
      suffix: "%",
      label: "Success Rate",
      description: "Career advancement achieved",
      gradient: "from-emerald-400 to-green-500",
      bgGradient: "from-emerald-50 to-green-50"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 100,
      suffix: "%",
      label: "Placement Support",
      description: "Career guidance included",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 24,
      suffix: "/7",
      label: "Learning Support",
      description: "Round-the-clock assistance",
      gradient: "from-indigo-400 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: 45,
      suffix: "+",
      label: "Countries",
      description: "Global student reach",
      gradient: "from-teal-400 to-green-500",
      bgGradient: "from-teal-50 to-green-50"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: 500,
      suffix: "+",
      label: "Projects Completed",
      description: "Real-world applications built",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <motion.section 
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
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
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Impact & Achievements
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Numbers That{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful learners who have transformed their careers with Stack N Learn
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const animatedValue = useCounter(stat.value, 2000 + index * 200);
            const displayValue = stat.isDecimal ? (animatedValue / 10).toFixed(1) : animatedValue;
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${stat.bgGradient} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm overflow-hidden`}>
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {stat.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4">
                      <span className="text-4xl md:text-5xl font-bold text-gray-900 block">
                        {displayValue}{stat.suffix}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      {stat.label}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special Achievement Callout */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">
                    {useCounter(98, 2500)}%
                  </div>
                  <div className="text-green-100 text-lg font-medium">
                    Student Satisfaction
                  </div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-white/20" />
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">
                    ₹{useCounter(12, 2000)}L+
                  </div>
                  <div className="text-green-100 text-lg font-medium">
                    Average Package
                  </div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-white/20" />
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">
                    {useCounter(6, 1800)}
                  </div>
                  <div className="text-green-100 text-lg font-medium">
                    Months to Job Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;

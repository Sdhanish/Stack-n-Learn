import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Rocket, X } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners starting their coding journey",
      monthlyPrice: 999,
      yearlyPrice: 9999,
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      popular: false,
      features: [
        "Access to 10+ foundational courses",
        "Basic project templates",
        "Community forum access",
        "Email support",
        "Certificate of completion",
        "Mobile app access"
      ],
      notIncluded: [
        "1-on-1 mentorship",
        "Live coding sessions",
        "Job placement assistance"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for serious learners aiming for career growth",
      monthlyPrice: 2499,
      yearlyPrice: 24999,
      icon: <Star className="w-8 h-8" />,
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      popular: true,
      features: [
        "Access to 50+ advanced courses",
        "Premium project portfolio",
        "Weekly 1-on-1 mentorship",
        "Live coding sessions",
        "Priority support",
        "Industry certificates",
        "Resume building assistance",
        "Interview preparation"
      ],
      notIncluded: [
        "Guaranteed job placement"
      ]
    },
    {
      name: "Enterprise",
      description: "Complete package with guaranteed career transformation",
      monthlyPrice: 4999,
      yearlyPrice: 49999,
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      popular: false,
      features: [
        "Unlimited access to all courses",
        "Custom learning path",
        "Daily 1-on-1 mentorship",
        "Live project collaboration",
        "24/7 premium support",
        "Industry certifications",
        "Complete career transformation",
        "Guaranteed job placement",
        "Salary negotiation support",
        "Lifetime alumni network"
      ],
      notIncluded: []
    }
  ];

  const addOns = [
    {
      name: "Personal Branding Workshop",
      price: 1999,
      description: "Build your professional online presence"
    },
    {
      name: "Advanced DSA Bootcamp",
      price: 2999,
      description: "Master data structures and algorithms"
    },
    {
      name: "System Design Masterclass",
      price: 3999,
      description: "Learn to design scalable systems"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
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
            <Rocket className="w-4 h-4 mr-2" />
            Investment Plans
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Flexible pricing plans designed to fit your learning goals and budget. Start your transformation today.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                isYearly ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative group ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${plan.bgGradient} border-2 ${plan.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm overflow-hidden h-full`}>
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {plan.icon}
                </div>

                {/* Plan Details */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        ₹{isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-500 ml-2">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-green-600 mt-1">
                        Save ₹{((plan.monthlyPrice * 12) - plan.yearlyPrice).toLocaleString()}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start opacity-50">
                          <X className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-sm line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl'
                        : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-green-300 hover:text-green-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.popular ? 'Start Learning' : 'Choose Plan'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Boost Your Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₹{addon.price.toLocaleString()}</span>
                  <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition-colors">
                    Add
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">30-Day Money Back Guarantee</h3>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Not satisfied with your learning experience? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
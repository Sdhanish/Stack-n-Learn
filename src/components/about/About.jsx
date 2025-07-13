import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="flex flex-col relative overflow-hidden px-10">
      {/* Water-fill Animated Vertical Bar */}
      <div className="hidden lg:block absolute left-[550px] top-12 bottom-12 w-1 bg-white z-10 overflow-hidden">
        <motion.div
          className="w-full h-full bg-green-600"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Animated Balls */}
      <motion.div
        className="hidden lg:block w-5 h-5 rounded-full border-2 border-white absolute left-[541px] top-10 z-20"
        initial={{ backgroundColor: '#ffffff' }}
        animate={{ backgroundColor: '#22c55e' }}
        transition={{ delay: 1.2, duration: 0.6 }}
      />
      <motion.div
        className="hidden lg:block w-5 h-5 rounded-full border-2 border-white absolute left-[541px] top-[53%] z-20"
        initial={{ backgroundColor: '#ffffff' }}
        animate={{ backgroundColor: '#22c55e' }}
        transition={{ delay: 1.6, duration: 0.6 }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center z-20 justify-between">
        {/* Left: Image */}
        <motion.div
          className="w-full max-w-md flex justify-center items-center mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src="/logo.png"
            alt="Stack N Learn"
            className="w-80 h-80 object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="w-full px-6 py-8"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Heading */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
           <h2 className="text-3xl font-semibold text-green-900 mb-3">Meet Stack N Learn</h2>
<p className="text-gray-700 text-justify">  
  We offer a dynamic blend of academic project support, online and offline training programs, and comprehensive mentorship to help learners and developers thrive in the tech world.
  Our core expertise lies in web apps using modern stacks, but we also provide tailored solutions in mobile app development.
  Whether you're a student seeking project guidance, a beginner aiming to master full-stack skills, or a team looking for product development support.  <br />Stack N Learn is your trusted partner for growth, innovation, and success.
</p>

          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-md transition">
              Explore More
            </button>
          </motion.div>

          {/* Tabs Section */}
          <motion.div
            className="flex flex-col space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Mission & Vision</h2>

            <div className="flex space-x-4">
              <button
                className={`px-5 py-2 rounded-full backdrop-blur-md bg-white/30 border border-white shadow-md text-green-700 font-medium transition ${
                  activeTab === 'mission' ? 'ring-2 ring-green-400' : ''
                }`}
                onClick={() => setActiveTab('mission')}
              >
                Mission
              </button>
              <button
                className={`px-5 py-2 rounded-full backdrop-blur-md bg-white/30 border border-white shadow-md text-green-700 font-medium transition ${
                  activeTab === 'vision' ? 'ring-2 ring-green-400' : ''
                }`}
                onClick={() => setActiveTab('vision')}
              >
                Vision
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            className="bg-white/60 backdrop-blur-lg mt-4 transition-all duration-300 p-4 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {activeTab === 'mission' ? (
<p className="text-gray-800">
  Our mission is to empower aspiring developers and tech enthusiasts by providing accessible, hands-on, and mentorship-driven training in modern technologies. 
  We strive to turn passion into profession through real-world projects, personalized guidance, and a supportive learning environment — helping individuals build the skills and confidence needed to succeed in today’s fast-paced tech industry.
</p>

            ) : (
<p className="text-gray-800">
  Our vision is to foster a thriving, inclusive, and future-ready tech community where learners grow into leaders. 
  We aim to become a trusted platform that nurtures innovation, encourages collaboration, and delivers meaningful learning experiences across web development, app development, and emerging tech fields — both academically and professionally.
</p>

            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

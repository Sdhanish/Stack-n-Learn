import companyData from '../../lib/data';
import StatsSection from '../Stats-Section/StatsSection';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const phrases = ["Stack N Learn is Here."];

  const [text, setText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120); // slower typing

  useEffect(() => {
    const currentPhrase = phrases[0];

    if (text === currentPhrase) {
      setIsFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setText(currentPhrase.slice(0, text.length + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text]);

  const { hero } = companyData;

  return (
    <section id="home" className="bg-white px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-10 md:pt-0">

          {/* Left Side - Text */}
          <motion.div
            className="relative text-left flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-green-700">
              <span className="block text-xl sm:text-2xl text-gray-500 font-medium italic">
                Ready to launch your tech journey?
              </span>
              <motion.div
                className="flex flex-wrap items-center space-x-3 min-h-[4rem]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <h2 className="text-2xl sm:text-4xl font-bold text-green-700 font-mono flex items-center">
                  {text || <span className="opacity-0">Stack N Learn is Here.</span>}
                  {!isFinished && <span className="animate-blink ml-1">|</span>}
                  {isFinished && (
                    <motion.img
                      src="/logo-no-bg.png"
                      alt="Logo"
                      className="w-14 h-14 sm:w-14 hidden xl:block rounded-full ml-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    />
                  )}
                </h2>
              </motion.div>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8 mb-6 sm:mb-8">
              Master the latest technologies with hands-on projects and expert guidance. Join us to shape your tech career with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition">
                {hero.primaryButton || "Enquire Now"}
              </button>
              <button className="border-2 border-green-600 text-green-700 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition">
                {hero.secondaryButton || "Contact Us"}
              </button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src="/hero/hero-2.png"
              alt="Hero Illustration"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-cover rounded-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <StatsSection />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
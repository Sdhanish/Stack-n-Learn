import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
   <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 relative flex">
              <img src='/logo-no-bg.png' className='object-fill  rounded-full' />
              <div className="absolute top-5 right-0 h-1/2 border-r-4 border-primary-500 z-10"></div>
            </div>

           {/* Motion Reveal Wrapper */}
<div className="overflow-hidden relative">
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col"
  >
    <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent ml-2">
      Stack N Learn
    </h1>
    <p className="text-xs text-gray-600 hidden sm:block ml-2">
      Learn the Stack | Deploy the Future
    </p>
  </motion.div>
</div>

          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex bg-white/10 px-5 py-2 backdrop-blur-md absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative text-gray-700 hover:text-green-600 font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              Enquire Now            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-green-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-700 hover:text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-green-100">
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md">
                Get a Free Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

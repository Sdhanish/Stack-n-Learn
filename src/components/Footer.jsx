import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowUp,
  Heart,
  Code2
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Learning Programs",
      links: [
        { text: "Full-Stack Development", href: "#services" },
        { text: "Frontend Bootcamp", href: "#services" },
        { text: "Backend Mastery", href: "#services" },
        { text: "DevOps Training", href: "#services" },
        { text: "Data Science Track", href: "#services" },
        { text: "Mobile Development", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#about" },
        { text: "Our Mission", href: "#about" },
        { text: "Success Stories", href: "#testimonials" },
        { text: "Careers", href: "#contact" },
        { text: "Press", href: "#contact" },
        { text: "Partners", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "#contact" },
        { text: "Documentation", href: "#contact" },
        { text: "Community Forum", href: "#contact" },
        { text: "Live Chat", href: "#contact" },
        { text: "Student Portal", href: "#contact" },
        { text: "Technical Support", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "#contact" },
        { text: "Webinars", href: "#events" },
        { text: "Workshops", href: "#events" },
        { text: "Free Courses", href: "#services" },
        { text: "Code Challenges", href: "#projects" },
        { text: "Industry Reports", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@stacknlearn.com",
      href: "mailto:hello@stacknlearn.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bangalore, India",
      href: "#"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      {/* Main Footer Content */}
      <div className="relative">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <Code2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Stack N Learn
                    </h3>
                    <p className="text-sm text-gray-400">Learn the Stack | Deploy the Future</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Empowering the next generation of developers through innovative education, 
                  hands-on projects, and industry-relevant training. Transform your passion into profession.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 bg-gray-800 rounded-lg mr-3 group-hover:bg-green-600/20 transition-colors duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-bold text-white mb-6">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.text}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div 
            className="mt-16 p-8 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-3xl border border-green-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">Stay Updated with Latest Tech Trends</h4>
              <p className="text-gray-300 mb-6">
                Get weekly insights, learning tips, and exclusive resources delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="flex items-center text-gray-400">
                <p>&copy; 2025 Stack N Learn. Made with</p>
                <Heart className="w-4 h-4 text-red-500 mx-2" />
                <p>in India. All rights reserved.</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 mr-2">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 bg-gray-800 rounded-xl text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
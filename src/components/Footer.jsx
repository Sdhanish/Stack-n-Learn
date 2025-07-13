// components/Footer.jsx
import { Code } from 'lucide-react';
import companyData from '../lib/data';

const Footer = () => {
  const { footer, name } = companyData;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">{name}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {footer.description}
            </p>
          </div>
          
          {footer.sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
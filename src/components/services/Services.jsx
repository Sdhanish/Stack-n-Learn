
import { Code, BookOpen, Users, Globe } from 'lucide-react';
import companyData from '../../lib/data';


const Services = () => {
  const { services } = companyData;

  const iconMap = {
    Code: <Code className="w-8 h-8" />,
    BookOpen: <BookOpen className="w-8 h-8" />,
    Users: <Users className="w-8 h-8" />,
    Globe: <Globe className="w-8 h-8" />
  };

  return (
    <section id="services" className="bg-primary-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Offer</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Comprehensive tech education and development services designed to accelerate your learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4">{iconMap[service.icon]}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
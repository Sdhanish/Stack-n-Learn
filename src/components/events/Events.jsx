import React from 'react';
import { Calendar } from 'lucide-react';
import companyData from '../../lib/data';

const Events = () => {
  const { events } = companyData;

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our workshops, bootcamps, and webinars to enhance your skills and connect with fellow learners
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-medium">{event.type}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.mode === 'Online' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-orange-100 text-orange-600'
                }`}>
                  {event.mode}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                <span>📅 {event.date}</span>
                <span>⏱️ {event.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
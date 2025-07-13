import React from 'react';
import { Star } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-10 -mt-10 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          {/* Google Reviews */}
          <div>
            <div className="flex justify-center items-center text-lg font-semibold text-black">
              4.7 <Star className="w-4 h-4 text-yellow-400 ml-1" /> <Star className="w-4 h-4 text-yellow-400" /> <Star className="w-4 h-4 text-yellow-400" /> <Star className="w-4 h-4 text-yellow-400" /> <Star className="w-4 h-4 text-yellow-400 opacity-50" />
            </div>
            <p className="text-sm font-semibold mt-1 text-gray-700">1320 reviews</p>
          </div>

          {/* Placement Assistance */}
          <div>
            <p className="text-3xl font-bold text-green-600">100%</p>
            <p className="uppercase text-sm font-semibold text-gray-700 mt-1">Placement Assistance</p>
          </div>

          {/* Courses */}
          <div>
            <p className="text-3xl font-bold text-green-600">25+</p>
            <p className="uppercase text-sm font-semibold text-gray-700 mt-1">Courses</p>
          </div>

          {/* Students */}
          <div>
            <p className="text-3xl font-bold text-green-600">7000+</p>
            <p className="uppercase text-sm font-semibold text-gray-700 mt-1">Students</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;

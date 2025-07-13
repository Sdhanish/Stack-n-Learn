import companyData from "../../lib/data";
import { Target, Lightbulb } from 'lucide-react';

const MissionVision = () => {
  const { mission, vision } = companyData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{mission.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {mission.description}
            </p>
          </div>
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{vision.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
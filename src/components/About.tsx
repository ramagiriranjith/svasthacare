import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';
import doctor_2 from '../../public/doctor_2.jpg';

const About = () => {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Patients Treated' },
    { icon: Award, value: '200+', label: 'Expert Doctors' },
    { icon: Clock, value: '24/7', label: 'Emergency Care' },
    { icon: MapPin, value: '25+', label: 'Locations' }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
                About SvasthaCare
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Excellence in Healthcare with SvasthaCare
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to providing exceptional healthcare services with a patient-first approach. 
                Our state-of-the-art facilities and experienced medical professionals ensure you receive 
                the best possible care.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
                  <p className="text-gray-600">Latest medical equipment and diagnostic tools</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Medical Team</h4>
                  <p className="text-gray-600">Board-certified specialists with years of experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Personalized Care</h4>
                  <p className="text-gray-600">Tailored treatment plans for each patient</p>
                </div>
              </div>
            </div>

            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Read Our Story
            </button>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={doctor_2} 
                alt="Modern Hospital"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-shadow"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-500 transition-colors">
                    <stat.icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
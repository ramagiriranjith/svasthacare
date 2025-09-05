import React from 'react';
import { Calendar, Shield, Heart, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-40 lg:pt-44 bg-gradient-to-br from-green-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Your Health is Our
                <span className="block text-primary-600">Priority</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience world-class healthcare with our team of expert doctors and modern facilities. 
                We provide comprehensive medical services with compassionate care.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary-500" />
                <span>Certified Doctors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-primary-500" />
                <span>24/7 Emergency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary-500" />
                <span>Award Winning</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <Calendar size={20} />
                <span>Book Appointment</span>
              </button>
              <button className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Expert Doctors</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8 lg:p-12">
              <img 
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Healthcare Professional"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Care</div>
                    <div className="text-sm text-gray-600">Always Here</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Top Rated</div>
                    <div className="text-sm text-gray-600">Healthcare</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
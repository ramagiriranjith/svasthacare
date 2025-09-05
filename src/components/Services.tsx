import React from 'react';
import { Heart, Brain, Eye, Bone, Baby, Stethoscope, Scissors, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Complete heart care with advanced diagnostic and treatment options for all cardiac conditions.',
      features: ['ECG & Echo', 'Angioplasty', 'Bypass Surgery']
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for brain, spine, and nervous system disorders.',
      features: ['Brain Surgery', 'Spine Care', 'Stroke Treatment']
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Comprehensive eye care from routine checkups to complex surgical procedures.',
      features: ['Cataract Surgery', 'Laser Treatment', 'Retina Care']
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced bone and joint care with minimally invasive surgical techniques.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care']
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents.',
      features: ['Child Development', 'Vaccinations', 'Emergency Care']
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary healthcare for patients of all ages.',
      features: ['Health Checkups', 'Chronic Care', 'Preventive Medicine']
    },
    {
      icon: Scissors,
      title: 'Surgery',
      description: 'Advanced surgical procedures with minimally invasive techniques.',
      features: ['Laparoscopic', 'Robotic Surgery', 'Day Care Surgery']
    },
    {
      icon: Shield,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response team.',
      features: ['Trauma Care', 'Critical Care', 'Ambulance Service']
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We provide comprehensive healthcare services with state-of-the-art technology 
            and experienced medical professionals dedicated to your well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-green-50 to-white p-6 lg:p-8 rounded-2xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 lg:p-8 text-white text-center">
          <h3 className="text-xl lg:text-2xl font-bold mb-2">
            Medical Emergency?
          </h3>
          <p className="text-red-100 mb-4">
            Call our 24/7 emergency hotline for immediate assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:911" className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-red-50 transition-colors">
              Call 911
            </a>
            <a href="tel:+1234567890" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Emergency Line: +1 234 567 890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The care I received was exceptional. The doctors were knowledgeable, compassionate, and made me feel comfortable throughout my treatment.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Outstanding service and state-of-the-art facilities. The staff went above and beyond to ensure my recovery was smooth and successful.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'I highly recommend this healthcare facility. The doctors are skilled, the nurses are caring, and the entire experience was professional.',
      rating: 5
    }
  ];

  const doctors = [
    {
      name: 'Dr. James Wilson',
      specialty: 'Cardiologist',
      experience: '15+ Years',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MD, Harvard Medical School'
    },
    {
      name: 'Dr. Maria Garcia',
      specialty: 'Neurologist',
      experience: '12+ Years',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MD, Johns Hopkins University'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Orthopedic Surgeon',
      experience: '18+ Years',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MD, Stanford Medical School'
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Patient Testimonials */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from patients who have experienced our exceptional care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-50 to-white p-6 lg:p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary-500 mb-4" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Doctors */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Doctors
            </h2>
            <p className="text-lg text-gray-600">
              Our team of board-certified specialists brings years of experience and dedication to your care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {doctors.map((doctor, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {doctor.education}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Experience: {doctor.experience}
                  </p>
                  
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-semibold transition-colors">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Appointment request submitted! We will contact you soon.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Healthcare Street', 'Medical District, NY 10001']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 234 567 890', '+1 234 567 891']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@healthcare.com', 'appointments@healthcare.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 9:00 AM - 6:00 PM']
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600">
            Schedule a consultation with our expert doctors. We're here to help you with all your healthcare needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-green-50 to-white p-6 lg:p-8 rounded-2xl border border-green-100">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-primary-500" />
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                Schedule Appointment
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="general">General Medicine</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us about your symptoms or concerns..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg"
              >
                <Send size={18} />
                <span>Book Appointment</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help you with all your healthcare needs. Contact us through any of the following methods 
                or visit our facility for immediate assistance.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-xl text-white">
              <h4 className="font-bold text-lg mb-2">Emergency Contact</h4>
              <p className="text-red-100 mb-3">For medical emergencies, call immediately:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:911" className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-center hover:bg-red-50 transition-colors">
                  Call 911
                </a>
                <a href="tel:+1234567890" className="border border-white text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-white hover:text-red-600 transition-colors">
                  Emergency: +1 234 567 890
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">123 Healthcare Street, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
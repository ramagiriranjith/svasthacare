import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '6faa5192-0179-4f64-91e8-23e852936843', 
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          location: formData.location,
          message: formData.message,
          subject: `New Appointment Request from ${formData.name}`,
          from_name: 'SvasthaCare',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          service: '',
          location: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Hyderabad, Vijayawada, Vizag']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 94939 94903']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['health.svasthacare@gmail.com']
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
              {/* Web3Forms Access Key (hidden) */}
              <input type="hidden" name="access_key" value="6faa5192-0179-4f64-91e8-23e852936843" />
              <input type="hidden" name="subject" value="New Appointment Request from SvasthaCare" />
              <input type="hidden" name="from_name" value="SvasthaCare Website" />

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">✅ Appointment request submitted successfully!</p>
                  <p className="text-sm">We will contact you soon to confirm your appointment.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">❌ Something went wrong!</p>
                  <p className="text-sm">Please try again or call us directly at +91 94939 94903</p>
                </div>
              )}

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

              {/* <div>
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
              </div> */}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Treatment
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
                    Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a location</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="vijayawada">Vijayawada</option>
                    <option value="vizag">Vizag</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
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
                disabled={isSubmitting}
                className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Book Appointment</span>
                  </>
                )}
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

            {/* Map Placeholder */}
            {/* Map Section */}
            {/* Map Section with Location Selector */}
            <div className="bg-gray-100 rounded-xl p-4">
              {/* Dropdown Above Map */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Choose a location</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="vijayawada">Vijayawada</option>
                  <option value="vizag">Vizag</option>
                </select>
              </div>

              {/* Map Display */}
              <div className="h-64 rounded-xl overflow-hidden flex items-center justify-center">
                {formData.location ? (
                  <iframe
                    title="Location Map"
                    src={
                      formData.location === "hyderabad"
                        ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.4636744089055!2d78.39588947979361!3d17.492415603989816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed05671ccf%3A0x63239195e363b98e!2sRoad%20No.%205%2C%20Kukatpally%20Housing%20Board%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1757594418584!5m2!1sen!2sin"
                        : formData.location === "vizag"
                            ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7480642576693!2d83.30294887453853!3d17.709357683233744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943f0c2e105d5%3A0x21e551a0f17951ff!2sKGH%20Out-Gate!5e0!3m2!1sen!2sin!4v1757600902724!5m2!1sen!2sin"
                            : formData.location === "vijayawada"
                              ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650.546620902569!2d80.62826093583472!3d16.51229402431556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35faacefb7db21%3A0x8282438b46ed2ffa!2sSuryaraopeta%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1757600730148!5m2!1sen!2sin" 
                              : ""
                    }
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Select a location to view map</p>
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
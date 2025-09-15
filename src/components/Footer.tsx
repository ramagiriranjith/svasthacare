import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { title: 'Home', id: 'home' },
    { title: 'About Us', id: 'about' },
    { title: 'Services', id: 'services' },
    { title: 'Testimonials', id: 'testimonials' },
    { title: "FAQ's", id: 'faq' },
    { title: 'Contact', id: 'contact' },
  ];

  const serviceLinks = [
    {title: 'Cosmetic', id: 'services'},
    {title: 'Urology', id: 'services'},
    {title: 'Laproscopy', id: 'services'},
    {title: 'Proctology', id: 'services'},
    {title: 'Vascular', id: 'services'},
    {title: 'Orthopedics', id: 'services'},
    {title: 'Neurology', id: 'services'},
    {title: 'Ophthalmology', id: 'services'},
  ]



  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/svasthacare?igsh=eHdlcW00Njl2YmQx', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1GWo3DK7ba/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://wa.me/919493994903', label: 'WhatsApp' },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-10 rounded-full flex items-center justify-center">
                <img src="favicon-removebg-preview.png" alt="SvasthaCare Logo" />
              </div>
              <span className="text-xl font-bold">SvasthaCare</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing exceptional healthcare services with Compassion, Innovation, and Excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-green-400 transition-colors text-left"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.id)}
                    className="text-gray-300 hover:text-green-400 transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-5 text-primary-400 mt-1" />
                <p className="text-gray-300">Hyderabad, Vijayawada, Vizag, Bangalore</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+919493994903" className="text-gray-300 hover:text-primary-400 transition-colors">
                  +91 94939 94903
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:health.svasthacare@gmail.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                  health.svasthacare@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 SvasthaCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Search, MapPin, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Vijayawada');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const locations = [
    'Vijayawada', 'Vizag', 'Hyderabad', 'Mumbai', 'Delhi', 'Bangalore',
    'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  const treatments = [
    'Hernia Surgery', 'Gallstones Treatment', 'Appendicitis', 'Inguinal Hernia Treatment',
    'Umbilical Hernia Treatment', 'Kidney Stone Treatment', 'Piles Treatment', 'Fissure Surgery',
    'Fistula Treatment', 'Varicose Veins Treatment', 'Cataract Surgery', 'Lasik Surgery',
    'Knee Replacement', 'Hip Replacement', 'ACL Surgery', 'Meniscus Surgery',
    'Heart Bypass Surgery', 'Angioplasty', 'Valve Replacement', 'Pacemaker Surgery',
    'Brain Tumor Surgery', 'Spine Surgery', 'Disc Replacement', 'Scoliosis Treatment'
  ];

  const medicalServices = [
    {
      title: 'Laparoscopy',
      items: [
        'Hernia',
        'Appendicitis',
        'Gallbladder stone'

      ]
    },
    {
      title: 'Urology',
      items: [
        'Circumcision',
        'Kidney stone',
        'Hydrocele',
        'Frenuloplasty',
        'Genitourinary fistula',
        'Kidney transplant',
        'Prostate enlargement'

      ]
    },
    {
      title: 'Cosmetic',
      items: [
        'Gynecomastia',
        'Lipoma',
        'Mole Removal',
        'Hair Transplant',
        'Breast Lift',
        'Sebaceous Cyst',
        'Rhinoplasty',
        'Breast Augmentation',
        'Axillary Breast',
        'Tummy Tuck',
        'Breast Lump',
        'Breast Reduction',
        'Cleft Lip',
        'Hymenoplasty',
        'Vaginoplasty',
        'Labiaplasty'
      ]
    },
    {
      title: 'Orthopedics',
      items: [
        'ACL tear',
        'Disc injury',
        'Joint replacement',
        'Knee Arthroscopy',
        'Rotator cuff repair',
        'Knee Replacement',
        'Carpal Tunnel Syndrome',
        'ACL Reconstruction',
        'Meniscus Tear Treatment',
        'Hip Replacement',
        'Spine Surgery',
        'Shoulder Dislocation',
        'Shoulder Replacement'
      ]
    },
    {
      title: 'Ophthalmology',
      items: [
        'Cataract',
        'Lasik Surgery',
        'Retinal Detachment',
        'Glaucoma Treatment',
        'Squint Surgery',
        'Diabetic Retinopathy',
        'Vitrectomy'
      ]
    },
    {
      title: 'Proctology',
      items: [
        'Piles',
        'Fissure',
        'Fistula',
        'Pilonidal Sinus'
      ]
    },
    {
      title: 'Vascular',
      items: [
        'Varicose Vein',
        'Varicocele',
        'Deep vein thrombosis (DVT)'
      ]
    },
    {
      title: 'ENT',
      items: [
        'Tympanoplasty',
        'Adenoidectomy',
        'Sinus Treatment',
        'Septoplasty',
        'Mastoidectomy',
        'FESS Surgery',
        'Thyroidectomy',
        'Tonsillectomy',
        'Stapedectomy',
        'Myringotomy'
      ]
    },
    {
      title: 'Gynaecology',
      items: [
        'Uterine Fibroids',
        'MTP',
        'Uterus Removal',
        'Ovarian Cyst',
        'Bartholin Cyst',
        'Endometriosis',
        'Adenomyosis',
        'PCOS-PCOD'

      ]
    },
    {
      title: 'Fertility',
      items: [
        'IVF Treatment',
        'IUI Treatment',
        'Female Infertility',
        'Male Infertility',
        'Egg Freezing',

      ]
    }
  ];

  const companyLinks = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Services', id: 'services' },
    { title: 'Testimonials', id: 'testimonials' },
    { title: 'Contact', id: 'contact' }
  ];

  const filteredTreatments = treatments
    .filter(treatment => treatment.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 6);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setShowCompanyDropdown(false);
  };

  const toggleMobileSection = (sectionTitle: string) => {
    setExpandedMobileSection(
      expandedMobileSection === sectionTitle ? null : sectionTitle
    );
  };

  return (
    <>
      {/* Header - raised z-index so its floating children can overlap services row */}
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/sc_logo.png"
                alt="SvasthaCare Logo"
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* Desktop: Location + Search + Our Company */}
            <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
              <FloatingSearchDropdown
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filteredTreatments={filteredTreatments}
              />

              <FloatingLocationDropdown
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                locations={locations}
              />


              <FloatingCompanyDropdown
                companyLinks={companyLinks}
                scrollToSection={scrollToSection}
              />
            </div>

            {/* Desktop: Phone + Appointment */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
              >
                <Phone size={16} />
                <span className="font-medium">+1 234 567 890</span>
              </a>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full transition-colors flex items-center space-x-2">
                <Calendar size={16} />
                <span>Book Free Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search and Location - Below Navbar */}
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex gap-3">
              {/* Mobile Location */}
              <div className="flex-1">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-700 bg-white"
                >
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Search */}
              {/* Mobile Search */}
              <div className="flex-1 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search treatments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSearchSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                {/* Suggestions for Mobile */}
                {showSearchSuggestions && filteredTreatments.length > 0 && (
                  <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-[1000]">
                    {filteredTreatments.map((treatment, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchQuery(treatment);
                          setShowSearchSuggestions(false);
                        }}
                        className="px-4 py-2 text-gray-700 hover:bg-primary-50 cursor-pointer rounded-lg"
                      >
                        {treatment}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t max-h-[70vh] overflow-y-auto">
            <nav className="py-4">
              {/* Our Company Section */}
              <div className="border-b border-gray-100 pb-4 mb-4">
                <button
                  onClick={() => toggleMobileSection('company')}
                  className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors font-medium"
                >
                  <span>Our Company</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${expandedMobileSection === 'company' ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {expandedMobileSection === 'company' && (
                  <div className="pl-6 space-y-1">
                    {companyLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(link.id)}
                        className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        {link.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Medical Services Sections */}
              {medicalServices.map((service, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => toggleMobileSection(service.title)}
                    className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors font-medium"
                  >
                    <span>{service.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedMobileSection === service.title ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  {expandedMobileSection === service.title && (
                    <div className="pl-6 pb-3 space-y-1">
                      {service.items.map((item, itemIndex) => (
                        <button
                          key={itemIndex}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                      {/* <button className="w-full mt-2 mx-4 bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                        View All {service.title}
                      </button> */}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Actions */}
              <div className="px-6 py-4 border-t mt-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-primary-600 mb-3"
                >
                  <Phone size={16} />
                  <span>+1 234 567 890</span>
                </a>
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors flex items-center justify-center space-x-2">
                  <Calendar size={16} />
                  <span>Book Free Appointment</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Medical Services Navigation - Desktop Only */}
      <div className="hidden lg:block fixed top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-sm" style={{ zIndex: 99997 }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-1 py-3">
            {medicalServices.map((service, index) => (
              <FloatingServiceDropdown
                key={index}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const FloatingLocationDropdown = ({
  selectedLocation,
  setSelectedLocation,
  locations
}: {
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  locations: string[];
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

  const handleMouseEnter = () => {
    if (buttonRef) {
      const rect = buttonRef.getBoundingClientRect();
      const scrollY = window.scrollY;

      setDropdownPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom + scrollY
      });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <button
        ref={setButtonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center space-x-2 px-4 py-2.5 w-[180px] justify-center border border-gray-300 rounded-full hover:border-primary-500 transition-colors"

      >
        <MapPin className="w-4 h-4 text-primary-500" />
        <span className="text-gray-700">{selectedLocation}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {isHovered && (
        <div
          className="fixed bg-white border border-gray-200 rounded-xl shadow-2xl z-[10001] transform -translate-x-1/2 transition-all duration-200"
          style={{
            left: `${dropdownPosition.x}px`,
            top: `${dropdownPosition.y + 8}px`,
            width: '200px'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-2 max-h-64 overflow-y-auto">
            <div className="text-xs text-gray-500 px-3 py-2 font-medium border-b border-gray-100 mb-2">
              Select Location
            </div>
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedLocation(location);
                  setIsHovered(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedLocation === location
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const FloatingSearchDropdown = ({
  searchQuery,
  setSearchQuery,
  filteredTreatments
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredTreatments: string[];
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    x: 0,
    y: 0,
    width: 0
  });
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  const handleFocus = () => {
    if (inputRef && searchQuery.length > 0) {
      const rect = inputRef.getBoundingClientRect();
      const scrollY = window.scrollY;

      setDropdownPosition({
        x: rect.left,
        y: rect.bottom + scrollY,
        width: rect.width
      });
      setShowSuggestions(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 0 && inputRef) {
      const rect = inputRef.getBoundingClientRect();
      const scrollY = window.scrollY;

      setDropdownPosition({
        x: rect.left,
        y: rect.bottom + scrollY,
        width: rect.width
      });
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  return (
    <>
      <div className="relative w-[300px]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            ref={setInputRef}
            type="text"
            placeholder="Search for treatments, doctors, hospitals..."
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          />
        </div>
      </div>

      {/* Floating Search Suggestions */}
      {showSuggestions && filteredTreatments.length > 0 && (
        <div
          className="fixed bg-white border border-gray-200 rounded-xl shadow-2xl z-[10001] transition-all duration-200"
          style={{
            left: `${dropdownPosition.x}px`,
            top: `${dropdownPosition.y + 8}px`,
            width: `${dropdownPosition.width}px`
          }}
        >
          <div className="p-2">
            <div className="text-xs text-gray-500 px-3 py-2 font-medium border-b border-gray-100 mb-2">
              Suggested Treatments
            </div>
            {filteredTreatments.map((treatment, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchQuery(treatment);
                  setShowSuggestions(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-primary-50 rounded-lg transition-colors text-gray-700"
              >
                {treatment}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const FloatingCompanyDropdown = ({
  companyLinks,
  scrollToSection
}: {
  companyLinks: { title: string; id: string }[];
  scrollToSection: (id: string) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

  const handleMouseEnter = () => {
    if (buttonRef) {
      const rect = buttonRef.getBoundingClientRect();
      const scrollY = window.scrollY;

      setDropdownPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom + scrollY
      });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <button
        ref={setButtonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
      >
        <span>Our Company</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isHovered && (
        <div
          className="fixed bg-white border border-gray-200 rounded-xl shadow-2xl z-[10001] transform -translate-x-1/2 transition-all duration-200"
          style={{
            left: `${dropdownPosition.x}px`,
            top: `${dropdownPosition.y + 8}px`,
            width: '200px'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-2">
            <div className="text-xs text-gray-500 px-3 py-2 font-medium border-b border-gray-100 mb-2">
              Company Pages
            </div>
            {companyLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsHovered(false);
                }}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const FloatingServiceDropdown = ({
  title,
  items
}: {
  title: string;
  items: string[];
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

  const handleMouseEnter = () => {
    if (buttonRef) {
      const rect = buttonRef.getBoundingClientRect();
      const scrollY = window.scrollY;

      setDropdownPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom + scrollY
      });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <button
        ref={setButtonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors whitespace-nowrap font-medium rounded-lg hover:bg-primary-50"
      >
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Floating Dropdown Portal */}
      {isHovered && (
        <div
          className="fixed bg-white border border-gray-200 rounded-xl shadow-2xl z-[10001] transform -translate-x-1/2 transition-all duration-200 opacity-100 scale-100"
          style={{
            left: `${dropdownPosition.x}px`,
            top: `${dropdownPosition.y + 2}px`,
            width: '280px',
            zIndex: 99999
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-3 max-h-64 overflow-y-auto">
            <h4 className="font-semibold text-gray-900 mb-2 text-s border-b border-gray-100 pb-1">
              {title} Treatments
            </h4>
            <div className="space-y-0.5">
              {items.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left px-2 py-1 text-s text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default Header;

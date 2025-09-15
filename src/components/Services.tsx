import React, { useState, useRef, useEffect } from "react";
import {
  Scissors,
  Droplets,
  Activity,
  Pill,
  HeartPulse,
  Bone,
  Brain,
  Eye,
} from "lucide-react";

const Services = () => {
  const services = [
    { icon: Scissors, title: "Cosmetic", description: "Enhance your appearance with safe and advanced cosmetic treatments.", features: ["Gynecomastia", "Lipoma"] },
    { icon: Droplets, title: "Urology", description: "Comprehensive care for urinary tract and male reproductive health.", features: ["Kidney Stone Removal", "Prostate Surgery", "Laser Treatment"] },
    { icon: Activity, title: "Laproscopy", description: "Minimally invasive surgical procedures with faster recovery times.", features: ["Gallbladder Surgery", "Appendix Removal", "Hernia Repair"] },
    { icon: Pill, title: "Proctology", description: "Expert care for rectum, anus, and colon disorders.", features: ["Piles Surgery", "Fistula Treatment", "Fissure Care"] },
    { icon: HeartPulse, title: "Vascular", description: "Advanced vascular care for arteries, veins, and lymphatic systems.", features: ["Varicose Veins", "Bypass Surgery", "Aneurysm Repair"] },
    { icon: Bone, title: "Orthopedics", description: "Bone, joint, and spine treatments for all age groups.", features: ["Joint Replacement", "Sports Injuries", "Fracture Care"] },
    { icon: Brain, title: "Neurology", description: "Specialized treatment for brain, spine, and nervous system disorders.", features: ["Stroke Care", "Brain Surgery", "Spine Treatment"] },
    { icon: Eye, title: "Ophthalmology", description: "Comprehensive eye care with advanced technology.", features: ["Cataract Surgery", "Laser Treatment", "Retina Care"] },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const cardWidth = 288; // 18rem
  const cardSpacing = 16; // space-x-4 in px

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    // calculate max index so last card is fully visible
    const maxIndex = services.length - Math.floor(containerWidth / (cardWidth + cardSpacing));
    if (activeIndex < maxIndex) setActiveIndex(activeIndex + 1);
  };

  const totalWidth = services.length * cardWidth + (services.length - 1) * cardSpacing;
  const maxTranslateX = Math.max(totalWidth - containerWidth, 0);
  const rawTranslate = activeIndex * (cardWidth + cardSpacing);
  const translateX = rawTranslate > maxTranslateX ? maxTranslateX : rawTranslate;

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our Specialties
          </h2>
          <p className="text-gray-600">
            Explore our wide range of medical specialties, all designed to
            provide you with the best care possible.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100 disabled:opacity-30 z-10"
          >
            ←
          </button>

          {/* Cards Wrapper */}
          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${translateX}px)`,
                gap: `${cardSpacing}px`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {service.description}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={translateX >= maxTranslateX}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100 disabled:opacity-30 z-10"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

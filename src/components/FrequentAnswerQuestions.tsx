import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "May I speak to a doctor online?",
    answer:
      "Yes, Svastha Care offers online doctor consultations. With this service, patients can consult with specialists from anywhere, at any time, according to available slots. Our patients have the option to communicate with doctors via phone or online chat to discuss their health concerns. Our doctors take the time to understand each patient's issues and provide the necessary medications and tests.",
  },
  {
    question: "How can Svastha Care make my surgery more affordable?",
    answer:
      "Svastha Care partners with high-quality small and medium hospitals that have under-utilized resources, enabling us to offer more affordable surgery rates. Even with the lower costs, the resources and procedures provided are on par with those found in larger hospitals.",
  },
  {
    question: "Does SvasthaCare operate its own hospitals?",
    answer:
      "No, Svastha Care does not own any hospitals. Instead, it collaborates with other hospitals. Svasta Care doctors and surgeons perform surgeries using the medical infrastructure of these associated hospitals.",
  },
  {
    question: "Is there insurance coverage for all surgeries at Svastha Care?",
    answer:
      "Yes, our team is here to assist you with your insurance claim. We'll ensure you understand your coverage, help you file the claim, and coordinate with your insurance provider to streamline the process. Our goal is to make your experience hassle-free and ensure you receive the care you need without delay.",
  },
  {
    question: "Does SvasthaCare offer emergency surgical services?",
    answer:
      "No, Svastha Care does not handle emergency surgeries or treatments. Svastha Care exclusively provides elective surgical care, which includes surgeries that are scheduled in advance and do not involve a medical emergency.",
  },
  {
    question: "Do I need to pay any fees to use SvasthaCare services?",
    answer:
      "No, there are no charges for utilizing Svasth Care services. You simply pay your standard medical bill. Our aim is to ensure you have a smooth healthcare experience without any extra fees.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to some of the most common questions about{" "}
            <span className="font-semibold text-primary-600">SvasthaCare</span>.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-900 font-medium focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180 text-primary-600" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

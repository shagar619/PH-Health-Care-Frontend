"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, Shield, Calendar, ToggleLeft, ArrowUp } from "lucide-react";

const accordions = [
  {
    id: "01",
    title: "Our Vision",
    content: "We envision a community where everyone has access to high-quality healthcare and the resources they need to lead healthy, fulfilling lives.",
  },
  {
    id: "02",
    title: "Our Mission",
    content: "Our mission is to provide exceptional, patient-centered care while advancing medical innovation and expanding access to health services for all.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Search For Doctors",
    description: "Search for a doctor based on specialization, location, or availability.",
    bgColor: "bg-[#1877F2]", // Blue
  },
  {
    icon: Shield,
    title: "Check Doctor Profile",
    description: "Explore detailed doctor profiles on our platform to make informed decisions.",
    bgColor: "bg-[#F97316]", // Orange
  },
  {
    icon: Calendar,
    title: "Schedule Appointment",
    description: "After choosing your preferred doctor, select a convenient time slot.",
    bgColor: "bg-[#06B6D4]", // Teal/Cyan
  },
  {
    icon: ToggleLeft,
    title: "Get Your Solution",
    description: "Discuss your health concerns with the doctor and receive the right care.",
    bgColor: "bg-[#6366F1]", // Purple/Indigo
  },
];

export default function TrustSection() {
  const [openAccordion, setOpenAccordion] = useState<string>("01");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? "" : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 bg-[#020817] text-white overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-32">
          
          {/* Left Side: Image Grid */}
          <div className="flex flex-col gap-5">
            {/* Top Large Image */}
            <div className="w-full h-64 md:h-[280px] rounded-[2rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" 
                alt="Doctor with patients" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Two Images */}
            <div className="grid grid-cols-2 gap-5">
              <div className="h-48 md:h-[220px] rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" 
                  alt="Doctor with child" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 md:h-[220px] rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop" 
                  alt="Medical vials" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content & Accordion */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="mb-6 self-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1e3a8a]/40 border border-[#1e3a8a] px-4 py-1.5 text-sm font-medium text-blue-400">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Why Book With Us
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-[1.2]">
              We are committed to <br className="hidden md:block" />
              understanding your <span className="text-[#00B4D8]">unique <br /> needs and delivering care</span>
            </h2>

            {/* Paragraph (Kept exact wording from reference) */}
            <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
              As a trusted healthcare provider in our community, we are passionate about promoting health and wellness beyond the clinic. We actively engage in community outreach programs, health fairs, and educational workshop.
            </p>

            {/* Accordion */}
            <div className="space-y-4">
              {accordions.map((item) => {
                const isOpen = openAccordion === item.id;
                return (
                  <div 
                    key={item.id} 
                    className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                      isOpen ? "border-[#1e3a8a] bg-[#0A1128]" : "border-gray-800 bg-transparent"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between p-6 focus:outline-none"
                    >
                      <span className={`text-xl font-semibold transition-colors ${isOpen ? "text-[#3B82F6]" : "text-white"}`}>
                        {item.id} . {item.title}
                      </span>
                      <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${isOpen ? "bg-[#3B82F6] text-white" : "bg-[#1e3a8a]/40 text-[#3B82F6]"}`}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-gray-400 text-base leading-relaxed">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section: 4 Steps Timeline */}
        <div className="relative mt-20">
          
          {/* Background Dotted Line (Hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] border-t-2 border-dashed border-gray-700/50 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-lg ${step.bgColor}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Scroll to top button (matching bottom right of image) */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </section>
  );
}
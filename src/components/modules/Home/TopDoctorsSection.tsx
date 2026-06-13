"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";

// Mock data matching the reference image exactly
const doctors = [
  {
    id: 1,
    name: "Larry Schmidt",
    specialty: "Neurology specialists",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Roger Schneider",
    specialty: "Obstetrics & Gynaecology",
    image: "https://images.unsplash.com/photo-1594824406967-1bea51ce72bf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Theresa Hamilton",
    specialty: "Medicine specialists",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Brittany Robertson",
    specialty: "Neurology specialists",
    image: "https://images.unsplash.com/photo-1537368910025-7028a411df8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "James Wilson",
    specialty: "Cardiology specialists",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TopDoctorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  // Handle responsive design for the slider
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, doctors.length - cardsToShow);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  return (
    <section className="py-20 bg-[#fbfbfd]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Medical Experts
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-400 hover:text-blue-600 hover:border-blue-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous experts"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Wrapper with Hidden Overflow */}
          <div className="overflow-hidden px-1 py-4">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="relative group flex-shrink-0"
                  style={{ width: `calc(${100 / cardsToShow}% - ${((cardsToShow - 1) * 24) / cardsToShow}px)` }}
                >
                  <div className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] h-full flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    
                    {/* Image Container with Social Hover Overlay */}
                    <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-center"
                      />
                      
                      {/* Social Media Overlay (matches the first card in reference) */}
                      <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex justify-center gap-3 border-t border-white/50">
                        <a href="#" className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                          <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded bg-blue-50 text-blue-400 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-5 flex-1 flex flex-col bg-white">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {doctor.specialty}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-400 hover:text-blue-600 hover:border-blue-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next experts"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}
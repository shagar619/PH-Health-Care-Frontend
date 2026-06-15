"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Mock Testimonial Data
const testimonials = [
{
     id: 1,
     name: "Sarah Jenkins",
     role: "Cardiology Patient",
     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
     quote: "The care I received at Doctoral was absolutely exceptional. From the initial consultation to my post-surgery follow-ups, the team made me feel safe, heard, and incredibly well-cared for. I have my life back.",
     rating: 5,
},
{
     id: 2,
     name: "Michael Chen",
     role: "Neurology Patient",
     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
     quote: "After months of misdiagnoses elsewhere, the specialists here pinpointed my issue within a week. The facility is state-of-the-art, and the doctors genuinely take the time to explain every detail.",
     rating: 5,
},
{
     id: 3,
     name: "Emily Rodriguez",
     role: "Orthopedics Patient",
     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
     quote: "Recovering from a sports injury is tough, but the physical therapy team was phenomenal. The app made it so easy to book appointments and chat with my therapist whenever I had questions.",
     rating: 4,
},
{
     id: 4,
     name: "David Thompson",
     role: "Routine Checkup",
     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
     quote: "The seamless experience of managing my medical records and billing through their platform is a game-changer. It's healthcare finally brought into the 21st century. Highly recommended!",
     rating: 5,
},
];


export default function TestimonialSection() {

     const [currentIndex, setCurrentIndex] = useState(0);
     const [direction, setDirection] = useState(0);

     // Auto-play functionality
     useEffect(() => {
     const timer = setInterval(() => {
     handleNext();
     }, 6000); // Change slide every 6 seconds
     return () => clearInterval(timer);
     }, [currentIndex]);

     const handleNext = () => {
     setDirection(1);
     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
     };

     const handlePrev = () => {
     setDirection(-1);
     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
     };

     const variants = {
     enter: (direction: number) => ({
          x: direction > 0 ? 100 : -100,
          opacity: 0,
          scale: 0.95,
     }),
     center: {
          x: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" },
     },
     exit: (direction: number) => ({
          x: direction < 0 ? 100 : -100,
          opacity: 0,
          scale: 0.95,
          transition: { duration: 0.4, ease: "easeIn" },
     }),
     };


     return (
     <section className="relative py-24 overflow-hidden bg-slate-50 font-sans">

     {/* Background Decorative Blobs */}
     <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2A7F7B]/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
     <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FBBF24]/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

     <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

     {/* Header */}
     <div className="text-center mb-16">
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-4"
     >
     <div className="w-8 h-px bg-amber-400" />
          <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">
               Testimonials
          </span>
     <div className="w-8 h-px bg-amber-400" />
     </motion.div>
     <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
     >
          What Our Patients Say
     </motion.h2>
     </div>

     {/* Carousel Container */}
     <div className="relative max-w-4xl mx-auto">

     {/* Main Glassmorphism Card */}
     <div className="relative h-[400px] md:h-[350px] w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
     <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-12 flex flex-col justify-center"
     >
     {/* Large Quote Icon */}
     <Quote className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 text-[#2A7F7B]/10 rotate-180" />

     {/* Rating */}
     <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
          <Star 
               key={i} 
               className={`w-5 h-5 ${
                    i < testimonials[currentIndex].rating 
                    ? "fill-amber-400 text-amber-400" 
                    : "fill-slate-200 text-slate-200"
               }`} 
          />
          ))}
     </div>

     {/* Quote Text */}
     <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-8 italic relative z-10">
          &quot;{testimonials[currentIndex].quote}&quot;
     </p>

     {/* Author Info */}
     <div className="flex items-center gap-4 mt-auto">
     <div className="relative">
     <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img 
               src={testimonials[currentIndex].image} 
               alt={testimonials[currentIndex].name}
               className="w-full h-full object-cover"
          />
     </div>
     {/* Decorative online indicator */}
     <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
     </div>
     <div>
          <h4 className="font-bold text-slate-900 text-lg">
               {testimonials[currentIndex].name}
          </h4>
          <p className="text-[#2A7F7B] font-medium text-sm">
               {testimonials[currentIndex].role}
          </p>
     </div>
     </div>
     </motion.div>
     </AnimatePresence>
     </div>

     {/* Navigation Controls */}
     <div className="flex items-center justify-between mt-8">

     {/* Pagination Dots */}
     <div className="flex gap-2">
          {testimonials.map((_, idx) => (
          <button
               key={idx}
               onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
               }}
               className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx 
                    ? "w-8 h-2.5 bg-[#2A7F7B]" 
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
               }`}
               aria-label={`Go to slide ${idx + 1}`}
          />
          ))}
     </div>

     {/* Arrows */}
     <div className="flex gap-3">
          <button 
               onClick={handlePrev}
               className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-[#2A7F7B] hover:border-[#2A7F7B] transition-colors focus:outline-none"
          >
               <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
               onClick={handleNext}
               className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-[#2A7F7B] hover:border-[#2A7F7B] transition-colors focus:outline-none"
          >
               <ChevronRight className="w-6 h-6" />
          </button>
     </div>

     </div>
     </div>
     </div>
     </section>
);
}
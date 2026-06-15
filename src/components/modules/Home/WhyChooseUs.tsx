"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const benefits = [
     "Treats minor illnesses",
     "Answers health questions",
     "Conducts health checkups",
     "routine health tests",
     "Orthopaedic surgeon",
     "Endocrinologist",
];


// Custom SVG for the orange hexagonal checkmark seen in the design
const CheckmarkIcon = () => (
     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1">
     <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="#FBBF24" />
     <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
     </svg>
);


export default function WhyChooseUs() {
     return (
     <section className="py-24 bg-white overflow-hidden font-sans">
     <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

     {/* Left Side: Content */}
     <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col relative z-10"
     >
     {/* Subtitle */}
     <div className="flex items-center gap-4 mb-4">
     <div className="w-8 h-px bg-amber-400" />
          <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">
               Why Choose Us
          </span>
     </div>

     {/* Main Heading */}
     <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-slate-900 leading-[1.15] mb-6">
          Why People Trust Doctoral <br className="hidden md:block" />
     <span className="font-light text-slate-700">Treatment</span>
     </h2>

     {/* Description */}
     <p className="text-slate-500 text-base mb-10 leading-relaxed max-w-lg">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
     </p>

     {/* Two-Column List */}
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 mb-12">
          {benefits.map((benefit, index) => (
     <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + (index * 0.1) }}
          className="flex items-start gap-3"
     >
          <CheckmarkIcon />
          <span className="text-slate-800 font-medium">{benefit}</span>
     </motion.div>
     ))}
     </div>

     {/* Split Button */}
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex"
     >
     <button className="flex items-stretch group cursor-pointer">
     <div className="bg-[#2A2F35] hover:bg-amber-200 text-white text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors group-hover:bg-[#1f2328]">
          Read More
     </div>
     <div className="bg-[#51575D] hover:bg-amber-200 text-white px-5 py-4 flex items-center justify-center transition-colors group-hover:bg-[#43484d]">
          <Plus className="w-5 h-5" />
     </div>
     </button>
     </motion.div>
     </motion.div>

     {/* Right Side: Image */}
     <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
     >
     <div className="relative w-full max-w-[600px]">
          <img 
               src="https://kivicare-wordpress.iqonic.design/wp-content/uploads/2022/10/right-banner.png" 
               alt="Doctor reviewing notes" 
               className="w-full h-auto object-contain cursor-pointer"
          />
     </div>
     </motion.div>
     </div>
     </div>
     </section>
);
}
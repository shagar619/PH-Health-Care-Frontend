"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Search, Stethoscope } from "lucide-react";

// 1. Define background images
// IMPORTANT: Replace these placeholders with actual imports from your assets folder
// import hero1 from "@/assets/images/hero/hero-1.jpg";
// import hero2 from "@/assets/images/hero/hero-2.jpg";
// import hero3 from "@/assets/images/hero/hero-3.jpg";

const placeholderImages = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2000&auto=format&fit=crop", // Modern Clinic
  "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=2000&auto=format&fit=crop", // Doctor & Patient
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop", // Telehealth
];

const Hero = () => {
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

     // Auto-slide logic
     useEffect(() => {
     const timer = setInterval(() => {
     setCurrentImageIndex((prev) => (prev + 1) % placeholderImages.length);
     }, 6000); // Change image every 6 seconds

     return () => clearInterval(timer);
     }, []);

     // Animation variants for text content
     const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: {
          staggerChildren: 0.2, // Delay between each text element
          delayChildren: 0.3,
     },
     },
};

     const itemVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
     };

     return (
     <div className="relative h-[calc(100vh-64px)] w-full overflow-hidden border-b bg-background">
     {/* --- Background Image Slider --- */}
     <div className="absolute inset-0 z-0">
     <AnimatePresence mode="popLayout">
     <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
     >
     {/* The Image */}
     <img
          src={placeholderImages[currentImageIndex]}
          alt={`Doctoral Healthcare Scene ${currentImageIndex + 1}`}
          className="h-full w-full object-cover object-center"
     />
     {/* Elegant Dark Overlay for Text Readability */}
     <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/70" />
     </motion.div>
     </AnimatePresence>
     </div>

     {/* --- Content Area --- */}
     <div className="container relative z-10 mx-auto flex h-full items-center px-4 md:px-8">
     <motion.div
          className="max-w-3xl text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
     >
     {/* Badge */}
     <motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
          <Stethoscope className="h-4 w-4" />
          <span>Advanced Healthcare Management</span>
     </motion.div>

     {/* Headline */}
     <motion.h1 
          variants={itemVariants}
          className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
     >
          Your Health, <br />
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Simplified.
          </span>
     </motion.h1>

     {/* Subheading */}
     <motion.p 
          variants={itemVariants}
          className="mb-10 max-w-2xl text-xl text-gray-200 md:text-2xl dark:text-gray-300"
     >
          Access top-tier specialists, manage appointments, and view health records seamlessly with Doctoral. Personalized care, right at your fingertips.
     </motion.p>

     {/* Call to Actions (CTAs) */}
     <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
     <Link href="/doctors">
          <Button size="lg" className="h-14 w-full sm:w-auto gap-2 rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 bg-gradient-to-r from-primary to-blue-600 cursor-pointer">
               <Search className="h-5 w-5" />
               Find Your Doctor
          </Button>
     </Link>

     <Link href="/appointments">
          <Button size="lg" variant="outline" className="h-14 w-full sm:w-auto gap-2 rounded-full px-8 text-base border-white/30 text-white bg-white/10 backdrop-blur-sm transition-all cursor-pointer">
          <CalendarDays className="h-5 w-5" />
               Book Consultation
          </Button>
     </Link>
     </motion.div>
     </motion.div>
     </div>

     {/* Slider Indicators (Dots) */}
     <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
     {placeholderImages.map((_, index) => (
     <button
          key={index}
          onClick={() => setCurrentImageIndex(index)}
          className={`h-3 rounded-full transition-all duration-300 ${
          currentImageIndex === index 
               ? "w-8 bg-primary" 
               : "w-3 bg-white/50 hover:bg-white/80"
          }`}
          aria-label={`Go to slide ${index + 1}`}
     />
     ))}
     </div>
     </div>
);
};

export default Hero;
"use client";

import { motion } from "framer-motion";
import { Plus, Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactSection() {

     return (
     <section className="relative py-24 bg-[#F5F9F9] overflow-hidden font-sans">

     {/* Decorative Bottom Right Squiggle */}
     <div className="absolute bottom-0 right-0 pointer-events-none z-0 opacity-50">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M450 150 C 350 150, 300 250, 200 250 C 100 250, 150 350, 50 350" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
          <path d="M500 100 C 400 100, 350 200, 250 200 C 150 200, 200 300, 100 300" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
          </svg>
     </div>

     <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

     {/* Left Side: Content */}
     <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-center pt-8"
     >
     {/* Subtitle */}
     <div className="flex items-center gap-4 mb-4">
     <div className="w-8 h-px bg-amber-400" />
          <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">
               Contact Us
          </span>
     </div>

     {/* Main Heading */}
     <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#1a2b3c] leading-[1.15] mb-6">
          Get A Glimpse <br />
          Of A <span className="font-light text-slate-700">Psychiatrist</span> <br />
          <span className="font-light text-slate-700">Theraphy</span>
     </h2>

     {/* Description */}
     <p className="text-slate-500 text-base mb-10 leading-relaxed max-w-md pr-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
     </p>

     {/* Social Links */}
     <div className="flex items-center gap-4 mt-auto">
          <span className="text-slate-600 font-medium text-sm">Follow Us :</span>
     <div className="flex items-center gap-5 text-slate-400">
          <a href="#" className="hover:text-teal-700 transition-colors">
               <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-teal-700 transition-colors">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.964H5.078z" />
               </svg>
          </a>
          <a href="#" className="hover:text-teal-700 transition-colors">
               <Instagram className="w-4 h-4" />
          </a>
     </div>
     </div>
     </motion.div>

     {/* Right Side: Form */}
     <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7"
     >
     <form className="w-full mt-4 lg:mt-0" onSubmit={(e) => e.preventDefault()}>

     {/* Input Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
     <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full bg-white border-none px-5 py-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/30 rounded-sm shadow-sm"
     />
     <input 
          type="text" 
          placeholder="Last Name" 
          className="w-full bg-white border-none px-5 py-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/30 rounded-sm shadow-sm"
     />
     <input 
          type="tel" 
          placeholder="Phone Number" 
          className="w-full bg-white border-none px-5 py-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/30 rounded-sm shadow-sm"
     />
     <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full bg-white border-none px-5 py-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/30 rounded-sm shadow-sm"
     />
     </div>

     {/* Textarea */}
     <div className="mb-8">
          <textarea 
               placeholder="Your Message" 
               rows={6}
               className="w-full bg-white border-none px-5 py-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/30 rounded-sm shadow-sm resize-none"
          ></textarea>
     </div>

     {/* Submit Split Button */}
     <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex"
     >
          <button type="submit" className="flex items-stretch group shadow-md cursor-pointer">
     <div className="bg-[#1A6461] text-white text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors group-hover:bg-[#14514e]">
          Send Message
     </div>
     <div className="bg-[#488B88] text-white px-5 py-4 flex items-center justify-center transition-colors group-hover:bg-[#3d7774]">
          <Plus className="w-5 h-5" />
     </div>
     </button>
     </motion.div>

     </form>
     </motion.div>

     </div>
     </div>
     </section>
);
}
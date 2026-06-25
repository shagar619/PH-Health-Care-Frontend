"use client";

import { motion } from "framer-motion";
import { 
     Smartphone, 
     PhoneCall, 
     ArrowRight, 
     Mail, 
     Activity,
     CalendarCheck
} from "lucide-react";

export default function DiscoverMoreSection() {
     // Container animation for staggered children
     const containerVariants = {
     hidden: { opacity: 0 },
     show: {
          opacity: 1,
          transition: {
          staggerChildren: 0.15,
     },
     },
};

     // Individual item animation
     const itemVariants = {
     hidden: { opacity: 0, y: 30 },
     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
     };

     return (
     <section className="py-24 bg-white font-sans overflow-hidden">
     <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

     {/* Section Header */}
     <div className="mb-12 md:mb-16">
     <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0A3D54] mb-4"
     >
          Explore More of Doctoral
     </motion.h2>
     <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#5B8A9E] text-lg max-w-2xl"
     >
          Take full control of your healthcare journey with our integrated tools and 24/7 support systems.
     </motion.p>
     </div>

     {/* Interactive Bento Grid */}
     <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
     >
          
     {/* Card 1: Mobile App (Spans 2 columns on desktop) */}
     <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0A3D54] to-[#1a6587] p-8 md:p-10 text-white shadow-lg group cursor-pointer"
     >
     <div className="relative z-10 w-full md:w-2/3">
     <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
          <Smartphone className="w-6 h-6 text-white" />
     </div>
          <h3 className="text-3xl font-bold mb-4">Get the Doctoral App</h3>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
               Book appointments, track your medical history, and consult with doctors right from your pocket. Available on iOS and Android.
          </p>
     <button className="flex items-center gap-2 bg-white text-[#0A3D54] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all cursor-pointer">
               Download Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
     </button>
     </div>

     {/* Decorative Abstract Phone Mockup */}
     <motion.div 
          className="absolute -bottom-20 -right-10 w-64 h-96 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] hidden md:block"
          whileHover={{ y: -20, rotate: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
     >
     {/* Inner screen detail */}
     <div className="absolute top-8 left-4 right-4 bottom-4 bg-[#0A3D54]/50 rounded-xl border border-white/10 p-4">
     <div className="w-full h-8 bg-white/20 rounded-lg mb-4" />
     <div className="w-3/4 h-4 bg-white/10 rounded mb-2" />
     <div className="w-1/2 h-4 bg-white/10 rounded mb-6" />
     <div className="grid grid-cols-2 gap-2">
     <div className="h-20 bg-white/10 rounded-xl" />
     <div className="h-20 bg-white/10 rounded-xl" />
     </div>
     </div>
     </motion.div>
     </motion.div>

     {/* Card 2: Emergency Contact (Pulsing interaction) */}
     <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          className="relative overflow-hidden rounded-xl bg-[#E85D54] p-8 md:p-10 text-white shadow-lg flex flex-col justify-between group cursor-pointer"
     >
     <div>
     {/* Pulsing Icon */}
     <div className="relative w-12 h-12 mb-6">
     <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
     <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center">
          <PhoneCall className="w-6 h-6 text-[#E85D54]" />
     </div>
     </div>
          <h3 className="text-2xl font-bold mb-3">24/7 Emergency Support</h3>
          <p className="text-white/90 mb-8">
               Immediate medical assistance is just a call away. Our trauma team is always on standby.
          </p>
     </div>
     <div className="text-3xl font-black tracking-wider group-hover:scale-105 transition-transform origin-left">
          911 / <span className="text-white/60">102</span>
     </div>
     </motion.div>

     {/* Card 3: Patient Portal */}
     <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.00, y: -5 }}
          className="bg-[#F0F5F8] p-8 text-[#0A3D54] rounded-xl border border-slate-200 overflow-hidden group hover:border-[#0A66C2]/50 transition-colors cursor-pointer"
     >
     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#0A66C2]">
          <CalendarCheck className="w-6 h-6" />
     </div>
          <h3 className="text-xl font-bold mb-3">Patient Portal</h3>
          <p className="text-[#5B8A9E] mb-6">
               View lab results, request prescription refills, and message your care team securely.
          </p>
     <div className="flex items-center gap-2 font-semibold text-[#0A66C2] group-hover:text-[#064280] transition-colors">
          Access Portal 
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
     </div>
     </motion.div>

     {/* Card 4: Newsletter (Spans 2 columns) */}
     <motion.div 
          variants={itemVariants}
          className="md:col-span-2 rounded-xl bg-white p-8 border border-[#DCE4E8] flex flex-col md:flex-row items-center justify-between gap-8"
     >
     <div className="flex-1">
     <div className="flex items-center gap-3 mb-3">
          <Activity className="w-5 h-5 text-[#0A66C2]" />
          <h3 className="text-xl font-bold text-[#0A3D54]">Health Insights Newsletter</h3>
     </div>
          <p className="text-[#5B8A9E]">
               Get the latest medical news, healthy living tips, and Doctoral updates delivered weekly.
          </p>
     </div>

     {/* Interactive Input Form */}
     <div className="w-full md:w-auto flex-1 flex gap-2 relative">
     <div className="relative w-full">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
     <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent outline-none transition-all"
     />
     </div>
     <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#0A3D54] text-white rounded-xl font-medium hover:bg-[#072a39] transition-colors whitespace-nowrap cursor-pointer"
     >
          Subscribe
     </motion.button>
     </div>
     </motion.div>

     </motion.div>
     </div>
     </section>
);
}
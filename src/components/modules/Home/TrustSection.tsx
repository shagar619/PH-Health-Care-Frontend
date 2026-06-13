"use client";

import { motion } from "framer-motion";
import { Users, Award, Building2, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, label: "Active Patients", value: "50k+" },
  { icon: Award, label: "Verified Specialists", value: "1,200+" },
  { icon: Building2, label: "Partner Clinics", value: "300+" },
  { icon: ShieldCheck, label: "Medical Specialties", value: "45+" },
];

export default function TrustSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950 text-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-blue-600/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-primary/30 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 font-medium text-slate-300">4.9/5 Average Rating</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
              Trusted by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                thousands worldwide.
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              We hold ourselves to the highest medical standards. Every practitioner on Doctoral goes through a rigorous vetting process, ensuring your health is always in the best hands.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full px-8 bg-white text-slate-950 hover:bg-slate-200 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all h-14 text-lg">
                Join the Network
              </Button>
            </div>
          </motion.div>

          {/* Right Floating Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              // Create staggered floating animations
              const yOffset = index % 2 === 0 ? [0, -15, 0] : [0, 15, 0];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  animate={{ y: yOffset }}
                  // Infinite floating animation
                  // @ts-ignore - Framer motion type quirk for arrays
                  transition={{ 
                    y: {
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className={`relative overflow-hidden p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
                  
                  <Icon className="w-10 h-10 text-emerald-400 mb-6" />
                  <div className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.value}</div>
                  <div className="text-sm md:text-base font-medium text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, Stethoscope, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover Specialists",
    description: "Use our AI-powered search to find the exact doctor you need based on symptoms, specialty, or location.",
  },
  {
    icon: CalendarCheck,
    title: "Instant Booking",
    description: "View real-time availability and lock in your appointment with zero friction or phone calls.",
  },
  {
    icon: Stethoscope,
    title: "Expert Consultation",
    description: "Meet your doctor online via secure video or in person at their clinic. Your choice.",
  },
  {
    icon: HeartPulse,
    title: "Ongoing Care",
    description: "Receive digital prescriptions, book follow-ups, and track your health progress in one dashboard.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-32 bg-secondary/20 dark:bg-black overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The Pathway to <span className="text-primary italic">Better Health</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl"
          >
            A frictionless experience designed around you.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Glowing Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/5 via-primary to-primary/5 -translate-x-1/2 rounded-full" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center z-20 shadow-[0_0_30px_rgba(var(--primary),0.5)]">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  </div>

                  {/* Card Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                    className={`ml-20 md:ml-0 w-full md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:order-last text-left"}`}
                  >
                    <div className={`p-8 rounded-3xl bg-background/40 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-background/60 transition-colors ${isEven ? "md:items-end flex flex-col" : "items-start flex flex-col"}`}>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Empty space for grid alignment on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

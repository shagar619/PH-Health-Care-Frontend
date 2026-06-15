"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Mock data matching the questions from your reference
const faqs = [
{
     id: "faq-1",
     question: "How do I book an appointment with a doctor?",
     answer: "You can easily book an appointment by browsing our specialist directory, selecting an available time slot that works for you, and confirming your details through our secure digital platform.",
},
{
     id: "faq-2",
     question: "Can I request a specific doctor when booking my appointment?",
     answer: "Yes, absolutely. Our search filters allow you to find and request specific doctors by name, specialty, or clinic location to ensure you get the care you prefer.",
},
{
     id: "faq-3",
     question: "What should I do if I need to cancel or reschedule my appointment?",
     answer: "You can manage your appointments directly from your patient dashboard. Simply navigate to 'Upcoming Appointments' and select the option to reschedule or cancel at least 24 hours in advance.",
},
{
     id: "faq-4",
     question: "What if I'm running late for my appointment?",
     answer: "If you are running late, please notify the clinic through our in-app messaging system. We generally offer a 15-minute grace period, after which we may need to reschedule your visit.",
},
{
     id: "faq-5",
     question: "Can I book appointments for family members or dependents?",
     answer: "Yes! You can add family members and dependents to your primary account and manage all their appointments, records, and prescriptions from one centralized dashboard.",
},
];


export default function FAQSection() {

     const [openId, setOpenId] = useState<string | null>("faq-1");

     const toggleAccordion = (id: string) => {
     setOpenId(openId === id ? null : id);
     };


     return (
     <section className="py-24 bg-white text-slate-900 overflow-hidden font-sans">
     <div className="container mx-auto px-4 md:px-8 max-w-7xl">

     {/* Section Header */}
     <div className="text-center mb-16 relative">
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
     >
     <p className="text-[#0070F3] font-bold text-sm md:text-base tracking-wide uppercase mb-3">
          Frequently Asked Questions
     </p>
     <h2 className="text-4xl md:text-5xl font-bold text-slate-900 flex items-center justify-center gap-2">
          Get Your Answer
     {/* Decorative Plus Icons matching the design */}
     <div className="relative w-6 h-6 -mt-6">
     <span className="absolute top-0 right-0 text-[#0070F3] text-2xl font-light leading-none">+</span>
     <span className="absolute bottom-0 left-0 text-blue-300 text-xl font-light leading-none">+</span>
     </div>
     </h2>
     </motion.div>
     </div>

     {/* Main Split Layout */}
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

     {/* Left Side: Custom Image & Floating Badge */}
     <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center lg:justify-start"
     >

     {/* Using your exact image asset. 
     Removed the background color so the transparency and built-in wireframes show perfectly.
     */}
     <div className="relative z-10 w-[95%] md:w-[85%] lg:w-full max-w-[550px]">
     <img 
          src="https://i.ibb.co.com/ZzKD6Fw2/faq-img.png" 
          alt="Doctor explaining to patient on tablet" 
          className="w-full h-auto object-contain drop-shadow-sm"
     />

     {/* Floating Badge positioned over the image */}
     <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -bottom-4 right-4 md:right-8 lg:-right-4 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] p-5 flex items-center gap-4 z-20 min-w-[220px]"
     >
     {/* Smiling Emoji Icon */}
     <div className="w-12 h-12 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full flex items-center justify-center text-2xl shadow-inner border border-white">
          😊
     </div>
     <div>
     <div className="text-2xl font-bold text-slate-900 leading-tight">95k+</div>
     <div className="text-slate-500 font-medium text-sm">Happy Patients</div>
     </div>
     </motion.div>
     </div>
     </motion.div>

     {/* Right Side: Accordion */}
     <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 md:gap-4 mt-8 lg:mt-0"
     >
     {faqs.map((faq) => {
     const isOpen = openId === faq.id;

     return (
          <div 
               key={faq.id} 
               className={`border-none rounded-sm transition-all duration-300 ${
               isOpen ? "bg-slate-50 shadow-sm" : "bg-slate-50 hover:bg-slate-100"
               }`}
          >
          <button
               onClick={() => toggleAccordion(faq.id)}
               className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none group"
          >
          <span className="text-slate-700 font-medium md:text-lg pr-4">
               {faq.question}
          </span>

          {/* Expand/Collapse Icon */}
          <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-white shadow-sm flex items-center justify-center rounded-sm text-[#0070F3] group-hover:scale-105 transition-transform">
               {isOpen ? (
               <Minus className="w-4 h-4 md:w-5 md:h-5" />
               ) : (
               <Plus className="w-4 h-4 md:w-5 md:h-5" />
               )}
          </div>
          </button>

          {/* Expandable Content */}
          <AnimatePresence initial={false}>
          {isOpen && (
          <motion.div
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: "auto", opacity: 1 }}
               exit={{ height: 0, opacity: 0 }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
               className="overflow-hidden"
          >
          <div className="p-4 md:p-5 pt-0 text-slate-500 leading-relaxed border-t border-slate-200/50 mt-1">
               {faq.answer}
          </div>
          </motion.div>
          )}
          </AnimatePresence>
          </div>
          );
          })}
          </motion.div>

     </div>
     </div>
     </section>
);
}
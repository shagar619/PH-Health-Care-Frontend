"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
     CheckCircle2, 
     Shield, 
     Stethoscope, 
     Pill, 
     Activity, 
     ArrowRight,
     HeartPulse,
     BadgePlus
} from "lucide-react";

// --- MOCK DATA ---
const plans = [
{
     id: "basic",
     name: "Essential Care",
     price: "$49",
     billing: "per month",
     description: "Perfect for individuals seeking standard coverage and routine checkups.",
     features: ["2 General Consultations/mo", "Basic Blood Tests", "24/7 Telehealth Access", "10% Pharmacy Discount"],
     recommended: false,
},
{
     id: "premium",
     name: "Complete Health",
     price: "$99",
     billing: "per month",
     description: "Comprehensive coverage for individuals who want peace of mind.",
     features: ["Unlimited Consultations", "Advanced Diagnostics", "Priority Specialist Booking", "Free Prescription Delivery", "Annual Full-Body MRI"],
     recommended: true,
},
{
     id: "family",
     name: "Family Shield",
     price: "$189",
     billing: "per month",
     description: "Extensive health protection for you, your partner, and your children.",
     features: ["Covers up to 4 members", "Pediatrician Access", "Dental & Vision Included", "Maternity Support", "Zero Deductible Options"],
     recommended: false,
},
];


const tabData = [
{
     id: "consultations",
     label: "Consultations",
     icon: Stethoscope,
     content: "Gain access to a network of over 5,000 top-tier specialists. Whether you need a routine checkup, a pediatric visit, or specialized cardiac consultation, our plans cover both in-person and telehealth appointments with zero hidden fees.",
},
{
     id: "pharmacy",
     label: "Pharmacy & Meds",
     icon: Pill,
     content: "Enjoy up to 80% off prescription medications. Premium and Family members benefit from free, same-day delivery right to your doorstep. Manage all your refills effortlessly through the Doctoral mobile app.",
},
{
     id: "emergencies",
     label: "Emergencies",
     icon: Activity,
     content: "In critical moments, every second counts. All Doctoral Health Plans include 24/7 emergency room coverage, free ambulance dispatches in major cities, and direct access to trauma centers without prior authorization.",
},
];


export default function HealthPlansPage() {

     const [activeTab, setActiveTab] = useState(tabData[0].id);
     const [isAnnual, setIsAnnual] = useState(false);

     return (
     <main className="min-h-screen bg-[#F8FAFC] font-sans pb-24">

     {/* =========================================
          SECTION 1: HERO WITH FLOATING ELEMENTS
     ========================================= */}
     <section className="relative pt-32 pb-20 overflow-hidden bg-[#0A3D54]">
     {/* Background Gradients */}
     <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0A66C2]/30 rounded-full blur-[100px] pointer-events-none" />
     <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />

     <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

     {/* Text Content */}
     <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
     >
     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-teal-300 font-medium text-sm mb-6 backdrop-blur-md">
          <Shield className="w-4 h-4" />
          <span>Coverage You Can Trust</span>
     </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
               Health Plans Tailored to Your Life.
          </h1>
          <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
               Experience healthcare without the hassle. Transparent pricing, comprehensive coverage, and a network of world-class professionals at your fingertips.
          </p>
     </motion.div>

     {/* Floating Visuals */}
     <div className="relative h-[400px] hidden lg:block">
     <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-72 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl"
     >
          <HeartPulse className="w-10 h-10 text-teal-400 mb-4" />
          <h3 className="text-white font-bold text-xl mb-2">Zero Copays</h3>
          <p className="text-white/70 text-sm">On all preventative care and annual physicals.</p>
     </motion.div>

     <motion.div 
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-64 bg-white border border-slate-100 p-6 rounded-3xl shadow-xl"
     >
          <BadgePlus className="w-10 h-10 text-[#0A66C2] mb-4" />
          <h3 className="text-[#0A3D54] font-bold text-lg mb-2">Instant Approval</h3>
          <p className="text-slate-500 text-sm">No waiting periods for essential services.</p>
     </motion.div>
     </div>
     </div>
     </div>
     </section>

     {/* =========================================
          SECTION 2: INTERACTIVE PLAN TIERS
     ========================================= */}
     <section className="py-24 -mt-8 relative z-20">
     <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

     {/* Billing Toggle */}
     <div className="flex justify-center mb-24">
     <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm inline-flex relative">
     <button 
          onClick={() => setIsAnnual(false)}
          className={`relative z-10 px-8 py-3 rounded-full font-semibold text-sm transition-colors cursor-pointer ${!isAnnual ? "text-white" : "text-slate-600 hover:text-slate-900"}`}
     >
          Monthly Billing
     </button>
     <button 
          onClick={() => setIsAnnual(true)}
          className={`relative z-10 px-8 py-3 rounded-full font-semibold text-sm transition-colors cursor-pointer ${isAnnual ? "text-white" : "text-slate-600 hover:text-slate-900"}`}
     >
          Annual (Save 20%)
     </button>
     {/* Animated Pill Background */}
     <motion.div 
          className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#0A3D54] rounded-full"
          animate={{ x: isAnnual ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
     />
     </div>
     </div>

     {/* Pricing Cards Grid */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
     {plans.map((plan, index) => (
     <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          whileHover={{ y: -10 }}
          className={`relative rounded-xl p-8 md:p-10 cursor-pointer ${
          plan.recommended 
               ? "bg-[#0A3D54] text-white md:-translate-y-4" 
               : "bg-white text-slate-900 border border-slate-200 hover:border-[#0A66C2]/50 transition-colors"
          }`}
          >
          {plan.recommended && (
     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
          Most Popular
     </div>
     )}

     <h3 className={`text-2xl font-bold mb-2 ${plan.recommended ? "text-white" : "text-[#0A3D54]"}`}>
          {plan.name}
     </h3>
     <p className={`text-sm mb-6 h-10 ${plan.recommended ? "text-white/80" : "text-slate-500"}`}>
          {plan.description}
     </p>

     <div className="mb-8">
          <span className="text-5xl font-black tracking-tight">
          {isAnnual ? `$${Math.floor(parseInt(plan.price.replace('$', '')) * 0.8 * 12)}` : plan.price}
          </span>
          <span className={`text-sm font-medium ml-2 ${plan.recommended ? "text-white/70" : "text-slate-500"}`}>
               /{isAnnual ? 'year' : 'month'}
          </span>
     </div>

     <ul className="space-y-4 mb-8">
     {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
               <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.recommended ? "text-teal-400" : "text-[#0A66C2]"}`} />
               <span className={`text-sm font-medium leading-tight ${plan.recommended ? "text-white/90" : "text-slate-700"}`}>
               {feature}
               </span>
          </li>
     ))}
     </ul>

     <button className={`w-full py-4 rounded-xl font-bold transition-transform active:scale-95 cursor-pointer ${
          plan.recommended 
          ? "bg-white text-[#0A3D54] hover:bg-slate-50" 
          : "bg-[#EAF0F3] text-[#0A3D54] hover:bg-[#DCE4E8]"
          }`}>
               Choose {plan.name}
     </button>
     </motion.div>
     ))}
     </div>
     </div>
     </section>

     {/* =========================================
          SECTION 3: ANIMATED COVERAGE TABS
     ========================================= */}
     <section className="py-24 bg-white border-y border-slate-200">
     <div className="container mx-auto px-4 md:px-8 max-w-[1000px]">
     <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D54] mb-4">Inside Your Coverage</h2>
          <p className="text-slate-500 text-lg">Explore exactly what you get when you join the Doctoral family.</p>
     </div>

     <div className="flex flex-col md:flex-row gap-8 items-start">

     {/* Tab Buttons */}
     <div className="flex flex-row md:flex-col gap-2 w-full md:w-1/3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
     {tabData.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
     return (
     <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-4 p-4 rounded-2xl transition-all w-full text-left whitespace-nowrap md:whitespace-normal flex-shrink-0 md:flex-shrink cursor-pointer ${
               isActive 
               ? "bg-[#0A66C2] text-white shadow-md" 
               : "bg-slate-50 text-slate-600 hover:bg-slate-100"
               }`}
          >
               <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-[#0A3D54]"}`} />
               <span className="font-semibold">{tab.label}</span>
          </button>
     );
     })}
     </div>

     {/* Tab Content Area */}
     <div className="w-full md:w-2/3 bg-slate-50 rounded-3xl p-8 md:p-12 min-h-[250px] relative overflow-hidden border border-slate-100">
          <AnimatePresence mode="wait">
          {tabData.map((tab) => 
               activeTab === tab.id ? (
          <motion.div
               key={tab.id}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="absolute inset-8 md:inset-12"
          >
     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#0A66C2]">
          <tab.icon className="w-6 h-6" />
     </div>
          <h3 className="text-2xl font-bold text-[#0A3D54] mb-4">{tab.label} Coverage</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
               {tab.content}
          </p>
     </motion.div>
          ) : null
     )}
     </AnimatePresence>
     </div>

     </div>
     </div>
     </section>

     {/* =========================================
          SECTION 4: GLASSMORPHIC CTA
     ========================================= */}
     <section className="py-24">
     <div className="container mx-auto px-4 md:px-8 max-w-[1000px]">
     <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative rounded-[2.5rem] bg-gradient-to-r from-[#0A3D54] to-[#0A66C2] overflow-hidden p-10 md:p-16 text-center shadow-2xl"
     >
     {/* Background pattern */}
     <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />

     <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
               Ready to secure your health?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
               Join thousands of members who have transformed how they experience healthcare. Enrollment takes less than 5 minutes.
          </p>

     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A3D54] rounded-full font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 group cursor-pointer">
               Enroll Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
               Speak to an Advisor
          </button>
     </div>
     </div>
     </motion.div>
     </div>
     </section>
     </main>
);
}
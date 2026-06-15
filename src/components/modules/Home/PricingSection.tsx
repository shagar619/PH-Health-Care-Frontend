"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Plus } from "lucide-react";


// Updated plans data with both Month and Year pricing
const plans = [
{
     id: 1,
     title: "Explore",
     description: "discuss your issues & create a plan with your talk therapist",
     prices: {
          Month: "$12.29",
          Year: "$120.99", // Adjusted for a hypothetical yearly discount
},
     features: [
     "2 weeks of chat access",
     "30 min Online Follow up",
     "24hour Emergency",
     "Evidence based theraphy",
],
     isHighlighted: false,
},
{
     id: 2,
     title: "First Steps",
     description: "Identify thought patterns, break negative thought loops & initiate positive ones",
     prices: {
          Month: "$33.17",
          Year: "$330.50",
},
     features: [
     "2 weeks of chat access",
     "30 min Online Follow up",
     "24hour Emergency",
     "Evidence based theraphy",
],
     isHighlighted: true,
},
{
     id: 3,
     title: "Mind Your Mind",
     description: "Initiate behavioural changes, learn how to manage your thoughts and emotions",
     prices: {
          Month: "$117.98",
          Year: "$1,150.00",
},
     features: [
     "2 weeks of chat access",
     "30 min Online Follow up",
     "24hour Emergency",
     "Evidence based theraphy",
],
     isHighlighted: false,
},
];


export default function PricingSection() {

     const [billingCycle, setBillingCycle] = useState<"Month" | "Year">("Month");


     return (
     <section className="relative pb-24 pt-36 bg-white overflow-hidden font-sans">

     <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

     {/* Header Section */}
     <div className="text-center mb-12">
     {/* Subtitle */}
     <div className="flex items-center justify-center gap-4 mb-4">
     <div className="w-8 h-px bg-amber-400" />
          <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">
               Pricing Plan
          </span>
     <div className="w-8 h-px bg-amber-400" />
     </div>

     {/* Main Heading */}
     <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
          Plans That Helps You To Grow <br />
     <span className="font-light text-slate-700">Your Business</span>
     </h2>

     {/* Billing Toggle */}
     <div className="inline-flex items-center bg-[#F4F7F8] rounded-full p-1 shadow-sm border border-slate-100">
     <button
          onClick={() => setBillingCycle("Month")}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
          billingCycle === "Month"
          ? "bg-[#2A7F7B] text-white shadow-md"
          : "text-slate-500 hover:text-slate-700"
     }`}
     >
          Month
     </button>
     <button
          onClick={() => setBillingCycle("Year")}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
          billingCycle === "Year"
          ? "bg-[#2A7F7B] text-white shadow-md"
          : "text-slate-500 hover:text-slate-700"
     }`}
     >
          Year
     </button>
     </div>
     </div>

     {/* Pricing Cards Grid */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
     {plans.map((plan, index) => (
     <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-slate-100"
     >

     {/* Card Header */}
     <div 
          className={`px-6 py-10 text-center ${
          plan.isHighlighted ? "bg-[#282C35]" : "bg-[#F4F7F8]"
     }`}
     >
     <h3 
          className={`text-2xl font-bold mb-4 ${
          plan.isHighlighted ? "text-[#FBBF24]" : "text-slate-900"
     }`}
     >
          {plan.title}
     </h3>
     <p 
          className={`text-sm leading-relaxed max-w-[250px] mx-auto ${
          plan.isHighlighted ? "text-slate-200" : "text-slate-500"
          }`}
     >
          {plan.description}
     </p>
     </div>

     {/* Card Body */}
     <div className="flex-1 flex flex-col p-8 bg-white">

     {/* Dynamic Price Area */}
     <div className="text-center mb-8 h-24 flex flex-col justify-end">
          <p className="text-sm text-slate-400 mb-2 font-medium">
               {billingCycle === "Month" ? "Price Per Session" : "Billed Annually"}
          </p>

     {/* AnimatePresence for smooth price transition */}
     <AnimatePresence mode="wait">
     <motion.div 
          key={billingCycle}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className={`text-5xl font-bold ${
          plan.isHighlighted ? "text-[#2A7F7B]" : "text-slate-900"
          }`}
     >
          {plan.prices[billingCycle]}
     </motion.div>
     </AnimatePresence>
     </div>

     {/* Divider */}
     <div className="w-full h-px bg-slate-100 mb-8" />

     {/* Features List */}
     <ul className="space-y-5 mb-10 flex-1">
          {plan.features.map((feature, idx) => (
     <li key={idx} className="flex items-center justify-center gap-3">
     <ChevronRight className="w-4 h-4 text-[#FBBF24] shrink-0" strokeWidth={3} />
     <span className="text-slate-500 text-sm font-medium">{feature}</span>
     </li>
     ))}
     </ul>

     {/* Split Button */}
     <div className="flex justify-center mt-auto">
     <button className="flex items-stretch group cursor-pointer">
     <div 
          className={`text-white text-sm font-semibold px-6 py-3.5 transition-colors ${
          plan.isHighlighted 
          ? "bg-[#282C35] group-hover:bg-[#1f2229]" 
          : "bg-[#2A7F7B] group-hover:bg-[#226663]"
          }`}
     >
          Read More
     </div>
     <div 
          className={`text-white px-4 py-3.5 flex items-center justify-center transition-colors ${
          plan.isHighlighted 
          ? "bg-[#51575D] group-hover:bg-[#43484d]" 
          : "bg-[#519B98] group-hover:bg-[#428582]"
          }`}
     >
          <Plus className="w-4 h-4" />
     </div>
     </button>
     </div>

     </div>
     </motion.div>
     ))}
     </div>

     </div>
     </section>
);
}
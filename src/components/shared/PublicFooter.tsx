"use client";

import { Headphones, MessageSquare, Send, Facebook, Twitter, Instagram, Linkedin, Pin, ArrowUp } from "lucide-react";
import Link from "next/link";

const footerLinks = [
{
     title: "Documentation",
     links: ["Medical", "Operation", "Laboratory", "ICU"],
},
{
     title: "Treatments",
     links: ["Neurology", "Cardiologist", "Dentist", "Urology"],
},
{
     title: "Specialities",
     links: ["Neurology", "Cardiologist", "Dentist", "Urology"],
},
{
     title: "Utilites",
     links: ["Medical", "Operation", "Laboratory", "ICU"],
},
];


export default function PublicFooter() {

     const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
     };

     return (
     <footer className="relative bg-[#F4F9FF] pt-24 pb-6 mt-24">
     {/* Background Image Layer */}
     <div 
          className="absolute inset-0 z-0 opacity-80 pointer-events-none"
          style={{
          backgroundImage: "url('https://i.ibb.co.com/1tZHLVcg/footer-bg-05.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
     }}
     />

     {/* Floating Top Banner */}
     <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20">
     <div className="absolute left-4 right-4 md:left-8 md:right-8 -top-40 bg-[#00B4D8] rounded-[2rem] px-8 py-10 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg shadow-blue-500/20">
     <h2 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
          Working for Your Better Health.
     </h2>

     <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
     {/* Customer Support */}
     <div className="flex items-center gap-4">
     <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00B4D8] shrink-0">
          <Headphones className="w-6 h-6" />
     </div>
     <div className="text-white">
          <p className="text-sm text-blue-100 mb-0.5">Customer Support</p>
          <p className="font-bold text-lg leading-tight">+1 56589 54598</p>
     </div>
     </div>

     {/* Email Support */}
     <div className="flex items-center gap-4">
     <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00B4D8] shrink-0">
          <MessageSquare className="w-6 h-6" />
     </div>
     <div className="text-white">
          <p className="text-sm text-blue-100 mb-0.5">Drop Us an Email</p>
          <p className="font-bold text-lg leading-tight">info1256@example.com</p>
     </div>
     </div>
     </div>
     </div>
     </div>

     {/* Main Footer Content */}
     <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 pt-16">
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">

     {/* Link Columns */}
     {footerLinks.map((section, index) => (
     <div key={index} className="col-span-1">
     <h3 className="text-slate-800 font-bold text-lg mb-6">{section.title}</h3>
     <ul className="space-y-4">
          {section.links.map((link, idx) => (
          <li key={idx}>
          <Link 
               href="#" 
               className="text-slate-500 hover:text-[#00B4D8] transition-colors text-sm md:text-base font-medium"
          >
               {link}
          </Link>
          </li>
          ))}
          </ul>
          </div>
          ))}

     {/* Newsletter Column */}
     <div className="col-span-2 lg:col-span-2">
          <h3 className="text-slate-800 font-bold text-lg mb-6">Newsletter</h3>
          <p className="text-slate-500 text-sm mb-4">
               Subscribe & Stay Updated from the Doctoral
          </p>

     {/* Input Form */}
     <div className="relative mb-8">
     <input 
          type="email" 
          placeholder="Enter Email" 
          className="w-full bg-white border-0 py-4 pl-5 pr-32 rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/50 text-slate-700"
     />
     <button className="absolute right-2 top-2 bottom-2 bg-[#00B4D8] hover:bg-[#009bc2] text-white px-5 rounded-lg font-medium transition-colors flex items-center gap-2">
          <Send className="w-4 h-4" />
               Send
          </button>
     </div>

     {/* Social Links */}
     <h4 className="text-slate-800 font-bold mb-4">Connect With Us</h4>
     <div className="flex gap-3">
     {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
          <a 
               key={idx} 
               href="#" 
               className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-600 hover:bg-[#00B4D8] hover:text-white transition-all shadow-sm"
          >
          <Icon className="w-4 h-4" />
          </a>
          ))}
          </div>
          </div>

     </div>

     {/* Bottom Copyright Bar */}
     <div className="border-t border-slate-200/60 pt-6 pb-2 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <p className="text-slate-500 text-sm font-medium">
               © 2026 Doctoral. All rights reserved.
          </p>
          
     <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
          <Link href="/terms" className="hover:text-[#00B4D8] transition-colors">Terms and Conditions</Link>
          <span className="text-slate-300">•</span>
          <Link href="/privacy" className="hover:text-[#00B4D8] transition-colors">Privacy Policy</Link>
     </div>

     {/* Floating Scroll to Top */}
     <button 
          onClick={scrollToTop}
          className="absolute right-0 -top-5 md:top-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white flex items-center justify-center transition-all bg-white"
          aria-label="Scroll to top"
     >
          <ArrowUp className="w-5 h-5" />
          </button>
     </div>
     </div>
     </footer>
);
}
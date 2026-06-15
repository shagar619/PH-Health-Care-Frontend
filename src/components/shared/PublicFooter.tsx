"use client";

import Link from "next/link";
import { ChevronRight, Star, ArrowUp } from "lucide-react";

const departments = [
     "Oncologist",
     "Neurologist",
     "ENT specialist",
     "Cardiologist",
     "Audiologist",
     "Psychiatrists",
];

const products = [
{
     name: "Asthma Inhaler",
     price: "$45.00",
     image: "https://kivicare-wordpress.iqonic.design/wp-content/uploads/2020/12/Rectangle-5.jpg",
     rating: 5,
},
{
     name: "Dental equipment",
     price: "$22.00",
     image: "https://kivicare-wordpress.iqonic.design/wp-content/uploads/2020/12/Rectangle-11.jpg",
     rating: 5,
},
];

const openingHours = [
     { day: "Weekdays", hours: "9:00 - 20:00" },
     { day: "Saturday", hours: "9:00 - 20:00" },
     { day: "Sunday", hours: "Closed" },
];


export default function PublicFooter() {
     const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
     };


     return (
     <footer className="bg-[#272B31] text-white font-sans">
     {/* Main Footer Content */}
     <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-20 pb-16">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

     {/* Column 1: Brand & Contact */}
     <div className="flex flex-col">
     {/* Logo area */}
     <div className="flex items-center gap-3 mb-6">
     <div className="w-10 h-10 relative flex items-center justify-center">
     {/* Recreating the cross logo with CSS shapes */}
     <div className="absolute w-full h-4 bg-[#FBBF24] rounded-sm"></div>
     <div className="absolute h-full w-4 bg-[#2A7F7B] rounded-sm top-2 left-2"></div>
     </div>
          <span className="text-2xl font-semibold tracking-wide">Doctoral</span>
     </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
               It is a long established fact that a reader will be distracted by the readable content.
          </p>

          <p className="text-xl font-bold mb-2">+ (480) 555-0103</p>
          <p className="text-sm text-slate-400">
               Email us : <a href="mailto:doctoral@example.com" className="text-[#FBBF24] hover:underline">doctoral@example.com</a>
          </p>
          </div>

     {/* Column 2: Departments */}
     <div>
          <h3 className="text-xl font-bold mb-6">Departments</h3>
          <ul className="space-y-4">
          {departments.map((dept, idx) => (
               <li key={idx}>
               <Link 
                    href="#" 
                    className="flex items-center gap-2 text-slate-300 hover:text-[#FBBF24] transition-colors text-sm font-medium group"
               >
                    <ChevronRight className="w-4 h-4 text-[#FBBF24] group-hover:translate-x-1 transition-transform" />
                    {dept}
               </Link>
               </li>
          ))}
          </ul>
          </div>

     {/* Column 3: Popular Products */}
     <div>
          <h3 className="text-xl font-bold mb-6">Popular Products</h3>
          <div className="space-y-6">
          {products.map((product, idx) => (
          <div key={idx} className="flex gap-4 items-center">
          <div className="w-20 h-20 shrink-0 bg-white p-1">
               <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
               />
          </div>
          <div>
               <h4 className="font-semibold text-sm mb-1 hover:text-[#2A7F7B] cursor-pointer transition-colors">
                    {product.name}
               </h4>
          <div className="flex gap-1 mb-1">
               {[...Array(product.rating)].map((_, i) => (
               <Star key={i} className="w-3 h-3 fill-[#FBBF24] text-[#FBBF24]" />
               ))}
          </div>
               <p className="text-slate-400 text-sm">{product.price}</p>
          </div>
          </div>
          ))}
          </div>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
               <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
               <ul className="space-y-4 w-full md:max-w-[250px]">
               {openingHours.map((schedule, idx) => (
               <li 
                    key={idx} 
                    className={`flex justify-between items-center text-sm ${
                    idx !== openingHours.length - 1 ? "border-b border-slate-700/50 pb-4" : ""
               }`}
               >
               <span className="text-slate-400">{schedule.day}</span>
               <span className="text-white font-medium">{schedule.hours}</span>
               </li>
          ))}
          </ul>
          </div>

     </div>
     </div>

     {/* Bottom Copyright Bar */}
     <div className="bg-[#2A7F7B] relative">
     <div className="container mx-auto px-4 py-5 flex items-center justify-center">
          <p className="text-white/90 text-sm font-medium">
          © 2026 Doctoral, All Rights Reserved
          </p>
     </div>

     {/* Floating Scroll to Top Button */}
     <button 
          onClick={scrollToTop}
          className="absolute right-0 top-0 bottom-0 bg-[#226663] hover:bg-[#1a4f4d] w-14 flex items-center justify-center transition-colors text-white"
          aria-label="Scroll to top"
     >
          <ArrowUp className="w-5 h-5" />
     </button>
     </div>
     </footer>
);
}
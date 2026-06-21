"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Heart, 
  Eye, 
  Link as LinkIcon, 
  Star, 
  Stethoscope, 
  Activity, 
  Pill, 
  ShieldAlert,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

// --- MOCK DATA ---

const stats = [
  { value: "359+", label: "Professional Doctors" },
  { value: "85K+", label: "Satisfied Our Clients" },
  { value: "863+", label: "Win International Awards" },
  { value: "86K+", label: "4.9 Star Reviews" },
];

const categories = [
  { id: "all", label: "All", icon: Activity },
  { id: "dental", label: "Dental", icon: Stethoscope },
  { id: "eye", label: "Eye Care", icon: Eye },
  { id: "vitamins", label: "Vitamins", icon: Pill },
  { id: "covid", label: "Covid - 19", icon: ShieldAlert },
];

const products = [
  {
    id: 1,
    name: "Liquid Sanitizer",
    category: "covid",
    image: "https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/09/product-3-500x500.png",
    price: 25,
    oldPrice: 34,
    rating: 4,
  },
  {
    id: 2,
    name: "Lab N99 Face Mask",
    category: "covid",
    image: "https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/08/product-12-500x500.png",
    price: 22,
    oldPrice: 23,
    rating: 3.5,
  },
  {
    id: 3,
    name: "Hand Sanitizer",
    category: "covid",
    image: "https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/08/product-8-500x500.png",
    price: 25,
    oldPrice: 45,
    rating: 5,
  },
  {
    id: 4,
    name: "Temperature Gun",
    category: "covid",
    image: "https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/08/product-4-500x500.png",
    price: 25,
    oldPrice: 45,
    rating: 5,
  },
  {
    id: 5,
    name: "Hand Sanitizer",
    category: "covid",
    image: "https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/08/product-9-500x500.png",
    price: 34,
    oldPrice: null,
    rating: 4,
  },
  {
    id: 6,
    name: "Medical Face Mask",
    category: "covid",
    image: "https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/08/product-2-500x500.png",
    price: 31,
    oldPrice: 32,
    rating: 4,
  },
  {
    id: 7,
    name: "Rubber Glove",
    category: "all",
    image: "https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/08/product-1-500x500.png",
    price: 12,
    oldPrice: 18,
    rating: 5,
  },
  {
    id: 8,
    name: "Guard Face Mask",
    category: "covid",
    image: "https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/08/product-7-500x500.png",
    price: 45,
    oldPrice: 60,
    rating: 5,
  },
];

// Reusable Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center justify-center gap-0.5 my-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star 
          key={star} 
          className={`w-3.5 h-3.5 ${star <= rating ? "fill-[#f1c40f] text-[#f1c40f]" : "fill-slate-200 text-slate-200"}`} 
        />
      ))}
    </div>
  );
};

export default function PharmacyPage() {

  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* --- 1. HERO & STATS SECTION (From Screenshot 3) --- */}
      <section className="relative">
        <div className="relative pt-32 pb-40 px-4 flex items-center justify-center min-h-[500px] bg-[#0A3D54]">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" 
              alt="Medical Consultation" 
              className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A3D54]/90 to-[#0A3D54]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="text-[#1abc9c] font-semibold text-sm tracking-widest uppercase mb-4">
              About Doctoral
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Looking For Any Doctor Or<br/>Nurses Join Us Now
            </h1>
            <p className="text-sm text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#0A3D54] hover:bg-slate-100 font-bold rounded-full transition-colors text-sm cursor-pointer">
                Appointment +
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A3D54] transition-colors text-sm cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Overlapping Stats Bar */}
        <div className="container mx-auto max-w-[1200px] px-4 relative z-20 -mt-16">
          <div className="bg-[#1abc9c] grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-xl border border-[#16a085]/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-white/90 text-xs md:text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. FEATURED PRODUCTS (From Screenshot 3) --- */}
      <section className="py-20 px-4 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#1abc9c] font-semibold text-sm tracking-widest mb-2">Pharmacy Products</p>
              <h2 className="text-3xl font-bold text-[#0A3D54]">Featured Products</h2>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#1abc9c] hover:border-[#1abc9c] transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#1abc9c] hover:border-[#1abc9c] transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(1, 5).map((product) => (
              <div key={`feat-${product.id}`} className="bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col items-center text-center group rounded-xl cursor-pointer hover:border-[#0A66C2]/50 transition-colors">
                <div className="h-48 flex items-center justify-center mb-6 w-full">
                  <img src={product.image} alt={product.name} className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-[#0A3D54] font-bold mb-2 group-hover:text-[#1abc9c] transition-colors">{product.name}</h4>
                <div className="flex items-center gap-2 text-sm font-bold mb-1">
                  {product.oldPrice && <span className="text-slate-400 line-through">${product.oldPrice}</span>}
                  <span className="text-[#1abc9c]">${product.price}</span>
                </div>
                <StarRating rating={product.rating} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. POPULAR MEDICAL PRODUCTS & TABS (From Screenshot 1) --- */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-[1200px]">
          
          <div className="text-center mb-12">
            <p className="text-[#1abc9c] font-medium text-sm mb-3">Pharmacy Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D54] leading-tight">
              Our Popular Medical Products<br/>That We Provides
            </h2>
          </div>

          {/* Tabs Container */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-xl mb-12 flex flex-wrap md:flex-nowrap justify-between p-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex-1 flex flex-col items-center justify-center py-4 px-2 rounded-lg transition-colors cursor-pointer min-w-[100px] ${
                    isActive ? "text-[#1abc9c]" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Icon strokeWidth={1.5} className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-slate-200 p-6 flex flex-col items-center text-center group rounded-xl relative overflow-hidden hover:border-[#0A66C2]/50 transition-colors cursor-pointer"
                >
                  {/* Floating Actions (Left Top) */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button className="w-8 h-8 bg-[#0A3D54] text-white rounded-full flex items-center justify-center hover:bg-[#1abc9c] transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-[#0A3D54] text-white rounded-full flex items-center justify-center hover:bg-[#1abc9c] transition-colors cursor-pointer">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-[#0A3D54] text-white rounded-full flex items-center justify-center hover:bg-[#1abc9c] transition-colors cursor-pointer">
                      <LinkIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="h-48 flex items-center justify-center mb-6 w-full relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-full object-contain mix-blend-multiply group-hover:-translate-y-2 transition-transform duration-500" 
                    />
                  </div>

                  {/* Details */}
                  <div className="relative z-10 bg-white w-full">
                    <h4 className="text-[#0A3D54] font-bold mb-2 text-lg">{product.name}</h4>
                    <div className="flex items-center justify-center gap-2 text-sm font-bold mb-1">
                      {product.oldPrice && <span className="text-slate-400 line-through">${product.oldPrice}</span>}
                      <span className="text-[#1abc9c]">${product.price}</span>
                    </div>
                    <StarRating rating={product.rating} />
                    
                    {/* Hover Add to Cart Button */}
                    <div className="absolute left-0 right-0 top-0 h-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="px-6 py-2.5 bg-[#1abc9c] text-white text-sm font-bold rounded-full hover:bg-[#16a085] transition-colors w-full mx-4 cursor-pointer">
                        Add to cart +
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* --- 4. FEATURES & BANNERS (From Screenshot 2) --- */}
      <section className="py-20 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-[1200px]">
          
          {/* Top Split Area */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            {/* Text Side */}
            <div className="w-full lg:w-1/2">
              <p className="text-[#1abc9c] font-medium mb-4">Features Medicine</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D54] mb-6 leading-tight">
                Our Medicine For<br/>Good Health
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                The current pandemic that the world is undergoing warrants that this is perhaps the most difficult time we are ever going to face in our lives. It is even more difficult for the doctors who are working tirelessly to ensure that all those that are infected are provided with proper medical facilities.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1abc9c] text-white font-bold rounded-full hover:bg-[#16a085] transition-colors"
              >
                Learn More Me +
              </Link>
            </div>

            {/* Images Side */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px]">
              <div className="absolute right-[15%] top-0 w-3/4 h-[90%] rounded-2xl overflow-hidden border border-slate-200 z-10">
                <img 
                  src="https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/09/image-banne-4-big.jpg" 
                  alt="Feature Model" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute right-0 bottom-[10%] w-2/5 border-[6px] border-white rounded-xl overflow-hidden z-20">
                <img 
                  src="https://demo.bravisthemes.com/medibo/wp-content/uploads/2021/09/image-small-banner.jpg" 
                  alt="Medicine Mockup" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Banner Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Banner 1: Face Beauty Lotion */}
            <div className="relative bg-[#F4EBE1] border border-slate-200 rounded-2xl overflow-hidden p-10 flex items-center min-h-[280px]">
              <div className="relative z-10 max-w-[200px]">
                <p className="text-slate-600 text-sm font-medium mb-2">Spa & Beauty</p>
                <h3 className="text-2xl font-bold text-[#0A3D54] mb-6 leading-tight">
                  Face Beauty Loson<br/>Men & Women
                </h3>
                <button className="px-6 py-2.5 bg-[#0A3D54] text-white text-sm font-bold rounded-full hover:bg-[#1abc9c] transition-colors cursor-pointer">
                  Shop Now +
                </button>
              </div>
              {/* Abstract decorative graphic for flat UI mapping */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pr-6 opacity-60">
                <img 
                  src="https://images.unsplash.com/photo-1608248593842-835fa9f74304?auto=format&fit=crop&q=80&w=600" 
                  alt="Lotion Products" 
                  className="w-full h-[120%] object-cover object-right mix-blend-multiply"
                />
              </div>
            </div>

            {/* Banner 2: Vitamin Calcium */}
            <div className="relative bg-[#E2DACB] border border-slate-200 rounded-2xl overflow-hidden p-10 flex items-center min-h-[280px]">
              <div className="relative z-10 max-w-[220px]">
                <p className="text-slate-600 text-sm font-medium mb-2">Spa & Beauty</p>
                <h3 className="text-2xl font-bold text-[#0A3D54] mb-6 leading-tight">
                  Vitamin Calcium<br/>Tablet & Syrup
                </h3>
                <button className="px-6 py-2.5 bg-[#0A3D54] text-white text-sm font-bold rounded-full hover:bg-[#1abc9c] transition-colors cursor-pointer">
                  Shop Now +
                </button>
              </div>
              {/* Abstract decorative graphic */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pr-4">
                <img 
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600" 
                  alt="Vitamin Products" 
                  className="w-full h-[120%] object-cover object-left mix-blend-multiply opacity-70"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
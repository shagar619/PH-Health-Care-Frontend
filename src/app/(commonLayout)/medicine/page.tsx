"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Pill, 
  HeartPulse, 
  Thermometer,  
  ShoppingCart, 
  Star, 
  FileText, 
  UploadCloud,
  ArrowRight,
  ShieldCheck,
  AirVent
} from "lucide-react";

// --- MOCK DATA ---
const categories = [
  { id: "all", name: "All Medicines", icon: Pill },
  { id: "vitamins", name: "Vitamins & Supplements", icon: HeartPulse },
  { id: "pain", name: "Pain Relief", icon: Thermometer },
  { id: "first-aid", name: "First Aid", icon: AirVent },
];

const products = [
  {
    id: 1,
    name: "Complete Multi-Vitamin Complex",
    brand: "HealthPlus",
    category: "vitamins",
    price: "$24.99",
    rating: 4.8,
    reviews: 124,
    rxRequired: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Amoxicillin Trihydrate 500mg",
    brand: "PharmaCorp",
    category: "antibiotics",
    price: "$12.50",
    rating: 4.9,
    reviews: 89,
    rxRequired: true,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Ibuprofen Advanced Relief 400mg",
    brand: "Relieve",
    category: "pain",
    price: "$9.99",
    rating: 4.7,
    reviews: 312,
    rxRequired: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "Lisinopril 10mg Tablets",
    brand: "CardioCare",
    category: "heart",
    price: "$18.00",
    rating: 4.9,
    reviews: 56,
    rxRequired: true,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    name: "Premium First Aid Kit",
    brand: "SafeGuard",
    category: "first-aid",
    price: "$35.00",
    rating: 4.6,
    reviews: 201,
    rxRequired: false,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    name: "Omega-3 Fish Oil 1000mg",
    brand: "NatureWell",
    category: "vitamins",
    price: "$22.50",
    rating: 4.8,
    reviews: 445,
    rxRequired: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
  },
];

export default function MedicinePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartState, setCartState] = useState<{ [key: number]: boolean }>({});

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (id: number) => {
    setCartState(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCartState(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans pb-24">
      
      {/* =========================================
          SECTION 1: GLASSMORPHIC HERO
      ========================================= */}
      <section 
        className="relative pt-32 pb-32 min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Deep overlay for text contrast */}
        <div className="absolute inset-0 bg-[#0A3D54]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent opacity-90" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10 mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-14 rounded-[1rem] shadow-[0_0_50px_rgba(0,0,0,0.3)] text-center relative overflow-hidden"
          >
            {/* Subtle glow inside the glass card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Your Online Pharmacy, <br className="hidden md:block" />
              <span className="text-teal-400">Delivered Fast.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium drop-shadow">
              Order prescription medications, over-the-counter drugs, and health products securely. Doorstep delivery in under 24 hours.
            </p>

            {/* Interactive Glass Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative flex items-center w-full h-16 md:h-18 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-inner overflow-hidden focus-within:bg-white/30 focus-within:ring-2 focus-within:ring-teal-400/50 transition-all">
                <Search className="absolute left-6 w-6 h-6 text-white drop-shadow-sm" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for medicines, vitamins, or brands..."
                  className="w-full h-full pl-16 pr-36 text-lg text-white placeholder:text-white/70 bg-transparent outline-none font-medium"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 md:px-8 bg-teal-500 hover:bg-teal-400 text-[#0A3D54] font-bold text-lg rounded-full transition-colors shadow-lg cursor-pointer">
                  Search
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: PRESCRIPTION UPLOAD BANNER
      ========================================= */}
      <section className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-20 -mt-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-[#0A3D54]/5 border border-slate-100 flex flex-col md:flex-row items-center gap-8 justify-between"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#EAF0F3] rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
              <FileText className="w-8 h-8 text-[#0A66C2]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0A3D54] mb-1">Have a Prescription?</h2>
              <p className="text-slate-500 text-sm md:text-base">Upload your Rx and let our pharmacists prepare your order immediately.</p>
            </div>
          </div>
          
          <button className="w-full md:w-auto relative group overflow-hidden rounded-xl border-2 border-dashed border-[#0A66C2]/40 bg-[#F0F5F8] hover:bg-[#EAF0F3] hover:border-[#0A66C2] transition-colors px-8 py-4 flex items-center justify-center gap-3 cursor-pointer">
            <UploadCloud className="w-6 h-6 text-[#0A66C2] group-hover:-translate-y-1 transition-transform" />
            <span className="font-semibold text-[#0A66C2] text-lg">Upload Prescription</span>
          </button>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 3: STOREFRONT & PRODUCTS
      ========================================= */}
      <section className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        
        {/* Category Filters */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0A3D54] hidden md:block">Browse Medications</h2>
          <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide w-full md:w-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive 
                      ? "bg-[#0A3D54] text-white shadow-lg shadow-[#0A3D54]/20" 
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.22 } }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/30 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative h-60 rounded-2xl bg-slate-50 overflow-hidden mb-6">
                    {product.rxRequired && (
                      <div className="absolute top-4 left-4 z-10 bg-[#E85D54] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                        <FileText className="w-3 h-3" /> Rx Required
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#0A3D54]/0 group-hover:bg-[#0A3D54]/5 transition-colors z-10" />
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 px-4">
                    <p className="text-sm font-bold tracking-wider text-teal-600 uppercase mb-2">{product.brand}</p>
                    <h3 className="text-base font-bold text-[#0A3D54] leading-tight mb-3 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-6">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-slate-700">{product.rating}</span>
                      <span className="text-sm text-slate-400">({product.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-5 pb-4 px-4 border-t border-slate-100 mt-auto">
                    <div className="text-lg font-black text-[#0A3D54]">{product.price}</div>
                    
                    <button 
                      onClick={() => handleAddToCart(product.id)}
                      className={`relative overflow-hidden h-12 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                        cartState[product.id] 
                          ? "bg-teal-500 text-white w-28 gap-2 px-4 shadow-lg shadow-teal-500/30" 
                          : "bg-[#EAF0F3] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white w-12 hover:shadow-lg hover:shadow-[#0A66C2]/30"
                      }`}
                    >
                      {cartState[product.id] ? (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }} 
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 font-bold whitespace-nowrap text-sm"
                        >
                          <ShieldCheck className="w-5 h-5" /> Added
                        </motion.div>
                      ) : (
                        <ShoppingCart className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A3D54] mb-2">No medications found</h3>
                <p className="text-slate-500 text-lg">Try adjusting your search or category filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================
          SECTION 4: CTA PROMO BANNER
      ========================================= */}
      <section className="container mx-auto px-4 md:px-8 max-w-[1200px] mt-32">
        <div className="bg-[#0A3D54] rounded-[1rem] overflow-hidden relative shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#0A66C2] rounded-l-full opacity-20 blur-3xl" />
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-teal-500 opacity-20 blur-3xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-10 md:p-16 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-300 font-medium text-sm mb-8 backdrop-blur-sm">
                <HeartPulse className="w-4 h-4" />
                <span>Doctoral Pharmacy App</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Set Reminders & Get Refills Automatically.
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
                Download the Doctoral app to scan prescriptions, set pill reminders, and subscribe to monthly refills with free, priority delivery.
              </p>
              <button className="px-8 py-4 bg-white text-[#0A3D54] rounded-full font-bold text-lg hover:bg-slate-50 transition-colors flex items-center gap-3 group cursor-pointer">
                Download the App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Visual Phone Mockup */}
            <div className="hidden md:flex justify-end relative">
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-72 h-[450px] bg-white/10 backdrop-blur-md rounded-[48px] border-[6px] border-white/20 p-4 relative shadow-2xl overflow-hidden"
              >
              <div className="w-full h-full bg-[#F8FAFC] rounded-[32px] overflow-hidden relative shadow-inner flex flex-col">
                <div className="absolute top-0 w-full h-24 bg-gradient-to-br from-teal-400 to-teal-500 rounded-b-[2rem] shadow-sm z-0" />
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/20 backdrop-blur-md rounded-b-xl z-10" />

                <div className="mt-28 px-4 space-y-4 relative z-10 flex-1">
                <div className="h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center px-4 gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center"><Pill className="w-6 h-6 text-rose-500" /></div>
                  <div className="flex-1">
                    <div className="h-3 bg-slate-200 rounded w-1/2 mb-3"/>
                    <div className="h-2 bg-slate-100 rounded w-1/3"/>
                    </div>
                </div>
                <div className="h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center px-4 gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><HeartPulse className="w-6 h-6 text-blue-500" /></div>
                <div className="flex-1">
                  <div className="h-3 bg-slate-200 rounded w-2/3 mb-3"/>
                  <div className="h-2 bg-slate-100 rounded w-1/4"/>
                </div>
                </div>
                <div className="h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center px-4 gap-4 opacity-50">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center"><Thermometer className="w-6 h-6 text-amber-500" /></div>
                <div className="flex-1">
                <div className="h-3 bg-slate-200 rounded w-1/2 mb-3"/>
                <div className="h-2 bg-slate-100 rounded w-2/3"/>
                </div>
                </div>
                </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
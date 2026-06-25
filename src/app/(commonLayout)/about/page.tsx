"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
     Info, 
     Heart, 
     ShieldCheck, 
     Microscope, 
     Users,
     CheckCircle2,
     CheckSquare,
     Layout,
     CalendarDays,
     UserPlus,
     Activity
} from "lucide-react";


export default function AboutPage() {

     // Animation variants
     const fadeUp = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
     };

     const staggerContainer = {
     hidden: { opacity: 0 },
     visible: {
     opacity: 1,
     transition: { staggerChildren: 0.2 }
     }
};


     return (
     <main className="min-h-screen bg-white">

     {/* 1. HERO SECTION */}
     <section className="relative pt-32 pb-24 px-4 flex items-center justify-center min-h-[500px]">
     {/* Background Image & Overlay */}
     <div className="absolute inset-0 z-0">
          <img 
               src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
               alt="Medical MRI Machine" 
               className="w-full h-full object-cover"
          />
     <div className="absolute inset-0 bg-[#0A3D54]/85 mix-blend-multiply"></div>
     </div>

     {/* Content */}
     <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center max-w-4xl mx-auto"
     >
     <div className="flex items-center justify-center gap-2 text-[#00B4D8] font-semibold text-sm tracking-widest uppercase mb-4">
          <Info className="w-4 h-4" />
          <span>About Us</span>
     </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
               Dedicated to Exceptional Healthcare
          </h1>
          
          <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
               At Medry, we believe healthcare should be reliable, compassionate, and accessible. Our mission is to provide high-quality medical services supported by experienced professionals and modern medical technology to improve the health and wellbeing of every patient we serve.
          </p>
          
          <Link 
               href="/contact"
               className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00B4D8] text-white font-bold rounded-full hover:bg-[#0096b4] transition-colors"
          >
               GET STARTED
          </Link>
     </motion.div>
     </section>

     {/* 2. OVERVIEW SECTION */}
     <section className="py-20 px-4">
     <div className="container mx-auto max-w-[1200px]">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

     {/* Text Content */}
     <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
     >
     <div className="flex items-center gap-2 text-[#00B4D8] font-bold text-sm tracking-widest uppercase mb-4">
          <CheckCircle2 className="w-4 h-4" />
          <span>Overview</span>
     </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D54] mb-6 leading-tight">
               Committed to Your Health and Wellbeing
          </h2>

     <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
               Medry is a modern healthcare provider focused on delivering comprehensive medical services for individuals and families. Our team of experienced doctors, nurses, and healthcare specialists work together to provide accurate diagnosis, effective treatments, and compassionate patient care.
          </p>
          <p>
               With advanced medical facilities and a patient-first philosophy, Medry ensures that every individual receives personalized healthcare solutions tailored to their needs. From preventive care to specialized treatments, we strive to create a healthcare experience built on trust, expertise, and innovation.
          </p>
     </div>
     </motion.div>

     {/* Image Content */}
     <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-slate-200"
     >
     <img 
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200" 
          alt="Modern Hospital Building" 
          className="w-full h-auto object-cover max-h-[400px]"
     />
     </motion.div>

     </div>
     </div>
     </section>

     {/* 3. MISSION, PROMISE, VISION CARDS */}
     <section className="pb-20 px-4">
     <div className="container mx-auto max-w-[1200px]">
     <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200"
     >
     {/* Our Mission */}
     <motion.div variants={fadeUp} className="bg-slate-50 p-10 lg:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200">
          <h3 className="text-2xl font-bold text-[#0A3D54] mb-4">Our Mission</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
               To help individuals achieve natural and sustainable weight loss through products backed by research, transparency, and trust. We are here to simplify your journey and guide you toward a healthier, more confident lifestyle.
          </p>
     </motion.div>

     {/* Our Promise (Dark/Gradient Middle Card) */}
     <motion.div variants={fadeUp} className="bg-gradient-to-br from-[#0A3D54] to-[#00B4D8] p-10 lg:p-12 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
          <p className="text-white/90 leading-relaxed text-sm">
               We promise honesty, quality, and support in everything we do. Your body deserves the best and that is exactly what we strive to provide. Lorem ipsum dolor sit amet consectetur adipiscing elit tellus luctus.
          </p>
     </motion.div>

     {/* Our Vision */}
     <motion.div variants={fadeUp} className="bg-slate-50 p-10 lg:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-200">
          <h3 className="text-2xl font-bold text-[#0A3D54] mb-4">Our Vision</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
               Our vision is to empower millions of people to take control of their health with safe, science-backed solutions that truly work. We aim to make weight-loss simple, accessible, and sustainable - no confusion.
          </p>
     </motion.div>
     </motion.div>
     </div>
     </section>

     {/* 4. STATS SECTION */}
     <section className="py-12 border-y border-slate-200 bg-white">
     <div className="container mx-auto max-w-[1200px] px-4">
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x md:divide-slate-200">
     <div className="text-center px-4">
          <h4 className="text-4xl lg:text-5xl font-bold text-[#0A3D54] mb-2">15+</h4>
          <p className="text-slate-500 text-sm font-medium">Years of Experience</p>
     </div>
     <div className="text-center px-4">
          <h4 className="text-4xl lg:text-5xl font-bold text-[#0A3D54] mb-2">20+</h4>
          <p className="text-slate-500 text-sm font-medium">Certified Specialists</p>
     </div>
     <div className="text-center px-4">
          <h4 className="text-4xl lg:text-5xl font-bold text-[#0A3D54] mb-2">5,000+</h4>
          <p className="text-slate-500 text-sm font-medium">Happy Patients</p>
     </div>
     <div className="text-center px-4">
          <h4 className="text-4xl lg:text-5xl font-bold text-[#0A3D54] mb-2">10+</h4>
          <p className="text-slate-500 text-sm font-medium">Medical Departments</p>
     </div>
     </div>
     </div>
     </section>

     {/* 5. OUR CORE VALUES */}
     <section className="py-24 bg-[#F8FAFC]">
     <div className="container mx-auto max-w-[1200px] px-4">
     <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D54] mb-4">Our Core Values</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
               The principles that guide our everyday decisions and ensure we provide the best possible care to our patients.
          </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
     {[
          { icon: Heart, title: "Compassionate Care", desc: "We treat every patient with empathy, dignity, and respect." },
          { icon: ShieldCheck, title: "Integrity & Trust", desc: "We uphold the highest ethical standards in all our practices." },
          { icon: Microscope, title: "Innovation", desc: "We continuously adopt the latest medical technologies." },
          { icon: Users, title: "Collaboration", desc: "Our specialists work as a unified team for your health." },
     ].map((value, idx) => (
     <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white p-8 rounded-xl border border-slate-200 text-center hover:border-[#00B4D8] transition-colors"
     >
     <div className="w-16 h-16 bg-[#00B4D8]/10 text-[#00B4D8] rounded-full flex items-center justify-center mx-auto mb-6">
          <value.icon className="w-8 h-8" />
     </div>
          <h4 className="text-xl font-bold text-[#0A3D54] mb-3">{value.title}</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
     </motion.div>
     ))}
     </div>
     </div>
     </section>

     {/* 6. WHY CHOOSE US (Based on Screenshot 2026-06-21 071656.jpg) */}
     <section className="py-24 bg-white">
     <div className="container mx-auto max-w-[1200px] px-4">
     <div className="flex flex-col lg:flex-row items-center gap-16">

     {/* Image Side */}
     <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
     >
     <div className="rounded-2xl overflow-hidden">
          <img 
               src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
               alt="Modern Clinic Reception" 
               className="w-full h-[670px] object-cover"
          />
     </div>
     </motion.div>

     {/* Content Side */}
     <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full lg:w-1/2"
     >
     <motion.div variants={fadeUp} className="flex items-center gap-2 text-[#00B4D8] font-bold text-sm tracking-widest uppercase mb-4">
          <Layout className="w-4 h-4" />
          <span>Why Choose Us</span>
     </motion.div>

     <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#0A3D54] mb-6 leading-tight">
          Healthcare Built on Trust and Expertise
     </motion.h2>

     <motion.p variants={fadeUp} className="text-slate-600 mb-10 leading-relaxed">
          Experience reliable healthcare delivered by experienced professionals in a modern and supportive environment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
     </motion.p>

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
     {/* Grid Item 1 */}
     <motion.div variants={fadeUp}>
     <div className="flex gap-3">
          <CheckSquare className="w-6 h-6 text-[#1abc9c] shrink-0" strokeWidth={1.5} />
     <div>
          <h4 className="text-base font-bold text-[#0A3D54] mb-2">Experienced Medical Team</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
               Our doctors and specialists bring years of expertise across multiple medical disciplines.
          </p>
     </div>
     </div>
     </motion.div>

     {/* Grid Item 2 */}
     <motion.div variants={fadeUp}>
     <div className="flex gap-3">
          <CheckSquare className="w-6 h-6 text-[#1abc9c] shrink-0" strokeWidth={1.5} />
     <div>
          <h4 className="text-base font-bold text-[#0A3D54] mb-2">Advanced Medical Technology</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
               We use modern diagnostic tools and treatment methods to ensure accurate care.
          </p>
     </div>
     </div>
     </motion.div>

     {/* Grid Item 3 */}
     <motion.div variants={fadeUp}>
     <div className="flex gap-3">
          <CheckSquare className="w-6 h-6 text-[#1abc9c] shrink-0" strokeWidth={1.5} />
     <div>
          <h4 className="text-base font-bold text-[#0A3D54] mb-2">Patient-Focused Approach</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
               Every treatment plan is designed around the individual needs and comfort of our patients.
          </p>
     </div>
     </div>
     </motion.div>

     {/* Grid Item 4 */}
     <motion.div variants={fadeUp}>
     <div className="flex gap-3">
          <CheckSquare className="w-6 h-6 text-[#1abc9c] shrink-0" strokeWidth={1.5} />
     <div>
          <h4 className="text-base font-bold text-[#0A3D54] mb-2">Comprehensive Medical Services</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
               From routine checkups to specialized treatments, Medry offers complete healthcare solutions.
          </p>
     </div>
     </div>
     </motion.div>
     </div>

     <motion.div variants={fadeUp}>
     <Link 
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1abc9c] text-white font-bold rounded-full hover:bg-[#16a085] transition-colors"
     >
          GET STARTED TODAY
     </Link>
     </motion.div>

     </motion.div>
     </div>
     </div>
     </section>

     {/* 7. YOUR CARE JOURNEY (New Beautiful Section) */}
     <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
     <div className="container mx-auto max-w-[1200px] px-4">
     <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D54] mb-4">Your Care Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
               We have streamlined our healthcare process to ensure you receive prompt, effective, and stress-free medical attention from the moment you reach out.
          </p>
     </div>

     <div className="relative">
     {/* Connecting Line (Desktop Only) */}
     <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
     {/* Step 1 */}
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative z-10 text-center"
     >
     <div className="w-24 h-24 mx-auto bg-white border-4 border-[#F8FAFC] rounded-full flex items-center justify-center shadow-[0_0_0_1px_rgba(203,213,225,1)] mb-6 text-[#00B4D8]">
          <CalendarDays className="w-10 h-10" />
     </div>
          <span className="inline-block px-3 py-1 bg-[#0A3D54] text-white text-xs font-bold rounded-full mb-4">
               Step 01
          </span>
          <h4 className="text-xl font-bold text-[#0A3D54] mb-3">Book Appointment</h4>
          <p className="text-slate-600 text-sm leading-relaxed px-4">
               Easily schedule your visit online or over the phone. Choose a time that perfectly fits your personal schedule.
          </p>
     </motion.div>

     {/* Step 2 */}
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative z-10 text-center"
     >
     <div className="w-24 h-24 mx-auto bg-white border-4 border-[#F8FAFC] rounded-full flex items-center justify-center shadow-[0_0_0_1px_rgba(203,213,225,1)] mb-6 text-[#00B4D8]">
          <UserPlus className="w-10 h-10" />
     </div>
          <span className="inline-block px-3 py-1 bg-[#0A3D54] text-white text-xs font-bold rounded-full mb-4">
               Step 02
          </span>
          <h4 className="text-xl font-bold text-[#0A3D54] mb-3">Expert Consultation</h4>
          <p className="text-slate-600 text-sm leading-relaxed px-4">
               Meet with our specialized doctors for a comprehensive review of your medical history and a thorough diagnosis.
          </p>
     </motion.div>

     {/* Step 3 */}
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative z-10 text-center"
     >
     <div className="w-24 h-24 mx-auto bg-white border-4 border-[#F8FAFC] rounded-full flex items-center justify-center shadow-[0_0_0_1px_rgba(203,213,225,1)] mb-6 text-[#00B4D8]">
          <Activity className="w-10 h-10" />
     </div>
          <span className="inline-block px-3 py-1 bg-[#0A3D54] text-white text-xs font-bold rounded-full mb-4">
               Step 03
          </span>
          <h4 className="text-xl font-bold text-[#0A3D54] mb-3">Get Treatment</h4>
          <p className="text-slate-600 text-sm leading-relaxed px-4">
               Receive a personalized treatment plan utilizing advanced medical technologies for a speedy recovery.
          </p>
          </motion.div>
     </div>
     </div>
     </div>
     </section>

     </main>
);
}
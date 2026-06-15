"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── animation presets ─────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
     hidden: { opacity: 0, y: 28 },
     visible: {
     opacity: 1, y: 0,
     transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
},
});

/* ── services data ─────────────────────────────────────────── */
const services = [
{
     id: "cardiac-surgery",
     title: "Cardiac Surgery",
     description:
          "At Doctoral, we deliver advanced Cardiac Surgery services with precision, compassion, and a commitment to saving lives. Our team of experienced cardiovascular surgeons uses the latest techniques and technology to ensure the best outcomes for our patients.",
     image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
     href: "/consultation",
},
{
     id: "bills-insurance",
     title: "Bills & Insurance",
     description:
          "At Doctoral, we understand that dealing with medical bills and insurance claims can be confusing and time-consuming. That's why we offer dedicated support to help you navigate every step with ease and confidence.",
     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
     href: "/health-plans",
},
{
     id: "cancer-screening",
     title: "Cancer Screening",
     description:
          "At Doctoral, early detection is at the heart of better outcomes. Our Cancer Screening services are designed to identify warning signs before symptoms arise, giving patients the best possible chance for effective treatment.",
     image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
     href: "/diagnostics",
},
{
     id: "neurology",
     title: "Neurology",
     description:
          "At Doctoral, our Neurology department is dedicated to diagnosing, treating, and managing a wide range of disorders affecting the brain, spinal cord, and nervous system with cutting-edge technology.",
     image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
     href: "/consultation",
},
{
     id: "orthopaedics",
     title: "Orthopaedics",
     description:
          "At Doctoral, our Orthopaedic specialists deliver comprehensive care for bones, joints, and muscles — from sports injuries to complex reconstructive surgery — restoring your mobility and quality of life.",
     image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
     href: "/consultation",
},
{
     id: "diagnostics",
     title: "Diagnostics",
     description:
          "Accurate, fast diagnostics are the foundation of great care. Doctoral's state-of-the-art diagnostic labs offer a full range of tests — from blood panels to advanced imaging — with rapid results you can trust.",
     image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
     href: "/diagnostics",
},
];

/* How many cards visible at once (desktop) */
const VISIBLE = 4;

/* ── slider arrow button ───────────────────────────────────── */
function ArrowBtn({
     dir,
     onClick,
     disabled,
}: {
     dir: "left" | "right";
     onClick: () => void;
     disabled: boolean;
}) {
     return (
     <button
          onClick={onClick}
          disabled={disabled}
          aria-label={dir === "left" ? "Previous services" : "Next services"}
          className={[
          "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer",
          disabled
          ? "border-slate-200 text-slate-300 cursor-not-allowed dark:border-slate-700 dark:text-slate-600"
          : "border-slate-300 text-slate-500 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600 dark:border-slate-600 dark:text-slate-400 dark:hover:border-teal-500 dark:hover:bg-teal-900/20 dark:hover:text-teal-400",
     ].join(" ")}
     >
     {dir === "left" ? (
     <ChevronLeft className="h-5 w-5" />
     ) : (
     <ChevronRight className="h-5 w-5" />
     )}
     </button>
);
}

/* ── single service card ───────────────────────────────────── */
function ServiceCard({
     service,
     index,
}: {
     service: (typeof services)[0];
     index: number;
}) {
     return (
     <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.22 } }}
          className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/30 cursor-pointer"
     >
     {/* Image */}
     <div className="relative h-[210px] w-full overflow-hidden">
     <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
     />
     {/* subtle gradient overlay at bottom */}
     <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/20 to-transparent" />
     </div>

     {/* Body */}
     <div className="flex flex-1 flex-col px-6 py-6">
     <h3 className="mb-3 text-[1.05rem] font-bold text-slate-900 dark:text-white">
          {service.title}
     </h3>
     <p className="mb-5 flex-1 text-[14px] leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-4">
          {service.description}
     </p>
     <Link
          href={service.href}
          className="inline-flex items-center gap-1 text-[14px] font-semibold text-sky-600 transition-all duration-200 hover:gap-2 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
     >
          Learn more
          <ChevronRight className="h-4 w-4" />
     </Link>
     </div>
     </motion.div>
);
}


/* ── main component ─────────────────────────────────────────── */
export default function ServicesSection() {

     const ref    = useRef(null);
     const inView = useInView(ref, { once: true, margin: "-80px" });
     const [startIdx, setStartIdx] = useState(0);

     const maxStart = services.length - VISIBLE;

     const prev = useCallback(
     () => setStartIdx((i) => Math.max(i - 1, 0)),
     []
     );
     const next = useCallback(
     () => setStartIdx((i) => Math.min(i + 1, maxStart)),
     [maxStart]
     );

     const visible = services.slice(startIdx, startIdx + VISIBLE);

     return (
     <section
          ref={ref}
          className="relative overflow-hidden bg-white py-20 lg:py-28 dark:bg-slate-950"
     >
     <div className="container relative z-10 mx-auto px-5 lg:px-10">

     {/* ── Header ── */}
     <div className="mb-14 flex flex-col items-center text-center">
     <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-4 text-[2rem] font-bold tracking-tight text-slate-900 dark:text-white sm:text-[2.4rem] lg:text-[2.6rem]"
     >
          Our Services
     </motion.h2>
     <motion.p
          variants={fadeUp(0.08)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl text-base leading-[1.5] text-slate-500 dark:text-slate-400"
     >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     </motion.p>
     </div>

     {/* ── Slider row ── */}
     <motion.div
          variants={fadeUp(0.16)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4"
     >
     {/* Left arrow */}
     <ArrowBtn dir="left" onClick={prev} disabled={startIdx === 0} />

     {/* Cards viewport */}
     <div className="min-w-0 flex-1 overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
     <motion.div
          key={startIdx}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
     >
          {visible.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
     ))}
     </motion.div>
          </AnimatePresence>
     </div>

     {/* Right arrow */}
          <ArrowBtn dir="right" onClick={next} disabled={startIdx >= maxStart} />
     </motion.div>

     {/* ── Dot indicators ── */}
     <motion.div
          variants={fadeUp(0.24)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 flex justify-center gap-2"
     >
     {Array.from({ length: maxStart + 1 }).map((_, i) => (
     <button
          key={i}
          onClick={() => setStartIdx(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={[
               "h-2 rounded-full transition-all duration-300",
               i === startIdx
               ? "w-6 bg-teal-600"
               : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500",
          ].join(" ")}
     />
     ))}
     </motion.div>

     </div>
     </section>
);
}
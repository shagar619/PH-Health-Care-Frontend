"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const features = [
  "Connecting patients with 4,200+ verified, board-certified doctors across Bangladesh.",
  "Real-time diagnostics, prescriptions, and health records — all in one place.",
  "Dedicated NGO partnerships for accessible, affordable care for all.",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-20 lg:py-48 dark:bg-slate-950"
    >
      {/* subtle bg glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-sky-50 opacity-70 blur-3xl dark:bg-sky-950/20" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-emerald-50 opacity-60 blur-3xl dark:bg-emerald-950/20" />

      <div className="w-11/12 relative z-10 mx-auto grid grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2 lg:gap-32 lg:px-8">

        {/* ── LEFT: image collage ── */}
        <motion.div
          className="relative h-[500px] lg:h-[540px]"
          variants={fadeLeft(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Corner accent frame */}
          <div className="absolute left-4 top-4 h-full w-full rounded-3xl border-2 border-sky-100 dark:border-sky-900/40" />

          {/* Primary image — top-left */}
          <motion.div
            variants={fadeLeft(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute left-0 top-0 h-[340px] w-[68%] overflow-hidden rounded-2xl shadow-2xl shadow-slate-300/50 dark:shadow-black/40"
          >
            <img
              src="https://kivicare-wordpress.iqonic.design/wp-content/uploads/2023/05/lab-2-min.jpg"
              alt="Lab researcher working with samples"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/25 bg-white/15 px-3 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold text-white">Live Lab Monitoring</span>
            </div>
          </motion.div>

          {/* Secondary image — bottom-right */}
          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute bottom-0 right-0 h-[270px] w-[60%] overflow-hidden rounded-2xl shadow-2xl shadow-slate-300/50 dark:shadow-black/40 dark:ring-slate-950"
          >
            <img
              src="https://kivicare-wordpress.iqonic.design/wp-content/uploads/2023/05/lab-1-min.jpg"
              alt="Doctor analysing under microscope"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </motion.div>

          {/* Stat badge — Satisfaction */}
          <motion.div
            variants={fadeUp(0.35)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute -right-5 top-[38%] flex flex-col items-center gap-0.5 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="text-3xl font-extrabold tracking-tight text-sky-500">
              98<span className="text-xl">%</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Satisfaction</span>
          </motion.div>

          {/* Stat badge — Years */}
          <motion.div
            variants={fadeUp(0.45)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute -left-5 bottom-28 flex flex-col items-center gap-0.5 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="text-3xl font-extrabold tracking-tight text-emerald-500">
              10<span className="text-xl">+</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years of Care</span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: copy ── */}
        <div className="flex flex-col">

          {/* Eyebrow */}
          <motion.div
            variants={fadeRight(0.05)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-0.5 w-8 rounded-full bg-sky-500" />
            <span className="text-base font-bold uppercase tracking-[0.2em] text-sky-500">About Us</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeRight(0.12)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-10 text-[2.1rem] font-extrabold leading-[1.2] tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[3rem]"
          >
            Journey Of Discover The{" "}
            <br className="hidden sm:block" />
            Uncovering{" "}
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              True Identity
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeRight(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-7 text-lg font-medium leading-[1.5] text-gray-500 dark:text-slate-400"
          >
              Laboratory is a company that provides software solutions and digital services to businesses, with a focus on innovation and customer satisfaction.
          </motion.p>

          {/* Feature checklist */}
          <ul className="mb-10 flex flex-col gap-4">
            {features.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeRight(0.26 + i * 0.08)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-sky-500" />
                <span className="text-[15px] font-medium leading-relaxed text-gray-500 dark:text-slate-400">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Divider */}
          <motion.hr
            variants={fadeRight(0.5)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-8 border-slate-100 dark:border-slate-800"
          />

          {/* Founder row */}
          {/* <motion.div
            variants={fadeRight(0.56)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center gap-5"
          >
            <div className="relative flex-shrink-0">
              <div className="h-[52px] w-[52px] overflow-hidden rounded-full ring-2 ring-sky-100 ring-offset-2 dark:ring-sky-800 dark:ring-offset-slate-950">
                <img
                  src="https://kivicare-wordpress.iqonic.design/wp-content/uploads/2023/05/lab-user.png"
                  alt="Mr. Mark Williams"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-emerald-400 dark:border-slate-950" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Mr. Mark Williams</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">CEO &amp; Founder</p>
            </div>

            <div className="mx-1 h-12 w-px bg-slate-200 dark:bg-slate-700" />

            <img
              src="https://kivicare-wordpress.iqonic.design/wp-content/uploads/2023/05/lab-signature.png"
              alt="Mr. Mark Williams signature"
              className="h-10 w-auto opacity-55 grayscale dark:invert dark:opacity-35"
            />
          </motion.div> */}

          
          <motion.div
            variants={fadeLeft(0.56)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center gap-4"
          >
            {/* icon circle with ripple */}
            <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 shadow-lg shadow-teal-600/30 transition-all duration-300 hover:scale-105 hover:shadow-teal-500/50">
              <span className="absolute inset-0 animate-ping rounded-full bg-teal-500 opacity-20" />
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Feel free to contact us here
              </span>
              <a
                href="tel:+12025550104"
                className="text-[15px] font-bold text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                Call: +1-202-555-0104
              </a>
            </div>
          </motion.div>

          
        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Video, FileText, Activity, ShieldPlus, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Instant Video Consultations",
    description: "Connect with top-tier specialists in HD video. No waiting rooms, just immediate care.",
    icon: Video,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10",
    iconColor: "text-blue-500",
  },
  {
    title: "Smart E-Prescriptions",
    description: "Digital prescriptions sent instantly to your phone and local pharmacy.",
    icon: FileText,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-500",
  },
  {
    title: "Secure Health Vault",
    description: "Military-grade encryption for all your medical records and lab results.",
    icon: Activity,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-500",
  },
  {
    title: "Family Health Plans",
    description: "Comprehensive coverage and preventive care plans tailored for your entire family's well-being.",
    icon: ShieldPlus,
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-br from-primary/10 to-blue-500/10",
    iconColor: "text-primary",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-md"
            >
              <Activity className="w-4 h-4" /> Unmatched Services
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              Next-Generation <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Healthcare Management</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className="group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              View all services 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[250px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`group relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl hover:shadow-primary/5 transition-all duration-500 ${feature.className}`}
              >
                {/* Inner shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-background/50 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-6 shadow-inner ${feature.iconColor}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}















// "use client";

// import { motion } from "framer-motion";
// import { Video, FileText, Activity, ShieldPlus } from "lucide-react";

// const features = [
//   {
//     title: "Telehealth Sessions",
//     desc: "HD video calls with instant connectivity.",
//     icon: Video,
//     span: "md:col-span-2 md:row-span-2",
//   },
//   {
//     title: "E-Prescriptions",
//     desc: "Sent instantly to your pharmacy.",
//     icon: FileText,
//     span: "md:col-span-1 md:row-span-1",
//   },
//   {
//     title: "Health Vault",
//     desc: "Military-grade encrypted records.",
//     icon: Activity,
//     span: "md:col-span-1 md:row-span-1",
//   },
//   {
//     title: "Family Care",
//     desc: "Unified dashboards for the whole family.",
//     icon: ShieldPlus,
//     span: "md:col-span-2 md:row-span-1",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="relative py-32 bg-background">
//       <div className="container relative z-10 mx-auto px-4 md:px-8">
        
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
//             A New Standard of Care
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[220px] max-w-6xl mx-auto">
//           {features.map((feature, i) => {
//             const Icon = feature.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 whileHover={{ scale: 0.98 }}
//                 className={`group relative flex flex-col justify-between p-8 rounded-3xl glass-panel overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] ${feature.span}`}
//               >
//                 {/* Background Hover Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 <div className="relative z-10">
//                   <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
//                     <Icon className="w-7 h-7" />
//                   </div>
//                 </div>
                
//                 <div className="relative z-10 mt-auto">
//                   <h3 className="text-2xl font-semibold mb-2 text-foreground">{feature.title}</h3>
//                   <p className="text-muted-foreground">{feature.desc}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
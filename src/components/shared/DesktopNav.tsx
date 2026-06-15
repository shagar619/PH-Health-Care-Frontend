"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { navItems } from "@/config/nav"; // <-- Import directly here

export default function DesktopNav() {

     const pathname = usePathname();
     const [hoveredPath, setHoveredPath] = useState<string | null>(null);


     return (
     <nav className="hidden md:flex items-center space-x-1">
     {navItems.map((item) => {
     const isActive = pathname === item.href;

     return (
     <Link
          key={item.href}
          href={item.href}
          onMouseEnter={() => setHoveredPath(item.href)}
          onMouseLeave={() => setHoveredPath(null)}
          className={`relative px-4 py-2 text-base font-medium transition-colors duration-200 ${
          isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
          }`}
          >
          {/* Hover Background Animation */}
          {hoveredPath === item.href && (
          <motion.div
               layoutId="navbar-hover"
               className="absolute inset-0 z-0 rounded-full bg-primary/10 dark:bg-primary/20"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          )}

          {/* Active Indicator Underline */}
          {isActive && (
          <motion.div
               layoutId="navbar-active"
               className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-t-full"
               transition={{ duration: 0.3, ease: "easeOut" }}
          />
          )}

          <span className="relative z-10">{item.label}</span>
          </Link>
     );
     })}
     </nav>
);
}
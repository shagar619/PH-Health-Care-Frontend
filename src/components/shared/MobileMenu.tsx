"use client";

import { UserInfo } from "@/types/user.interface";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { LayoutDashboard, Menu, LogIn } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AISearchDialog from "./AISSearchDialog";
import UserDropdown from "../modules/Dashboard/UserDropdown";
import { usePathname } from "next/navigation";
import logo from "../../assets/images/logo.png";
import { navItems } from "@/config/nav"; // <-- Import directly here

interface MobileMenuProps {
     hasAccessToken: boolean;
     userInfo?: UserInfo | null;
     dashboardRoute?: string;
}

const MobileMenu = ({
     hasAccessToken,
     userInfo,
     dashboardRoute,
}: MobileMenuProps) => {

     const pathname = usePathname();

     const containerVariants = {
     hidden: { opacity: 0 },
     show: {
          opacity: 1,
          transition: { staggerChildren: 0.05 },
     },
     };

     const itemVariants = {
     hidden: { opacity: 0, x: -20 },
     show: { opacity: 1, x: 0 },
     };


     return (
     <div className="md:hidden">
     <Sheet>
     <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-primary/10 cursor-pointer">
          <Menu className="h-6 w-6" />
          </Button>
     </SheetTrigger>

     <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 flex flex-col bg-background/95 backdrop-blur-xl">
     <SheetHeader className="p-6 border-b text-left">
          <SheetTitle className="flex items-center gap-2">
          <img src={logo.src} alt="Logo" className="h-8 w-auto cursor-pointer" />
          </SheetTitle>
     </SheetHeader>

     <div className="flex-1 overflow-y-auto p-6">
     <motion.nav 
          className="flex flex-col space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate="show"
     >
     {navItems.map((link) => {
     const Icon = link.icon;
     const isActive = pathname === link.href;

     return (
          <motion.div key={link.label} variants={itemVariants}>
          <Link
               href={link.href}
               className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all ${
               isActive 
               ? "bg-primary/10 text-primary" 
               : "text-muted-foreground hover:bg-secondary hover:text-foreground"
               }`}
          >
          <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
               {link.label}
          </Link>
          </motion.div>
          );
          })}
          </motion.nav>
          </div>

          <div className="p-6 border-t bg-secondary/30 flex flex-col gap-4">
          <AISearchDialog />

          {hasAccessToken && userInfo ? (
          <div className="flex flex-col gap-3">
          <Link href={dashboardRoute || "/"}>
          <Button className="w-full gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer" size="lg">
               <LayoutDashboard className="h-5 w-5" />
                    Dashboard
               </Button>
          </Link>
          <div className="flex justify-center bg-background rounded-lg p-2 border">
               <UserDropdown userInfo={userInfo} />
          </div>
          </div>
          ) : (
          <Link href="/login">
          <Button className="w-full gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer" size="lg">
               <LogIn className="h-5 w-5" />
               Login
          </Button>
          </Link>
          )}
          </div>
          </SheetContent>
     </Sheet>
     </div>
);
};

export default MobileMenu;
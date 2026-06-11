"use client";

import { UserInfo } from "@/types/user.interface";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { LayoutDashboard, Menu, Stethoscope } from "lucide-react";
import Link from "next/link";
import AISearchDialog from "./AISSearchDialog";
import UserDropdown from "../modules/Dashboard/UserDropdown";

interface MobileMenuProps {
     navItems: Array<{ href: string; label: string }>;
     hasAccessToken: boolean;
     userInfo?: UserInfo | null;
     dashboardRoute?: string;
}

const MobileMenu = ({
     navItems,
     hasAccessToken,
     userInfo,
     dashboardRoute,
}: MobileMenuProps) => {

     return (
     <div className="md:hidden">
     <Sheet>
          <SheetTrigger asChild>
          <Button
               variant="ghost"
               size="icon"
               className="h-9 w-9 rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-700 dark:hover:bg-sky-950/40 dark:hover:text-sky-400 transition-all duration-200"
          >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
          </Button>
     </SheetTrigger>

     <SheetContent
          side="right"
          className="w-[300px] sm:w-[360px] border-l border-slate-200/80 bg-white/95 backdrop-blur-xl p-0 dark:border-slate-800/80 dark:bg-slate-950/95"
     >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

          {/* Sheet Header */}
          <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 px-5 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 shadow-md shadow-sky-500/30">
          <Stethoscope className="h-4 w-4 text-white" />
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
               Doctoral
          </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-3 py-4 gap-0.5">
          {navItems.map((link) => (
          <Link
               key={link.label}
               href={link.href}
               className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-all duration-150 hover:bg-sky-50 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-400"
          >
               {link.label}
          </Link>
          ))}
          </nav>

          {/* Divider */}
          <div className="mx-5 border-t border-slate-100 dark:border-slate-800" />

          {/* Bottom Actions */}
          <div className="flex flex-col gap-3 px-5 py-5">
          <div className="w-full">
          <AISearchDialog />
          </div>

          {hasAccessToken && userInfo ? (
          <div className="flex flex-col gap-3">
          <Link href={dashboardRoute || "/"}>
               <Button className="w-full gap-2 bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-500/25 transition-all duration-200">
               <LayoutDashboard className="h-4 w-4" />
                    Dashboard
               </Button>
          </Link>
          <div className="flex justify-center">
               <UserDropdown userInfo={userInfo} />
          </div>
          </div>
          ) : (
          <Link href="/login">
               <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-500/25 transition-all duration-200">
               Login
               </Button>
          </Link>
          )}
          </div>

          {/* Decorative gradient footer */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sky-50/60 to-transparent dark:from-sky-950/20 pointer-events-none rounded-b-lg" />
          </SheetContent>
     </Sheet>
     </div>
);
};

export default MobileMenu;
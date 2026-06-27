"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetTitle } from "@/components/ui/sheet";
import { getIconComponent } from "@/lib/icon-mapper";
import { cn } from "@/lib/utils";
import { NavSection } from "@/types/dashboard.interface";
import { UserInfo } from "@/types/user.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity } from "lucide-react";


interface DashboardMobileSidebarProps {
     userInfo: UserInfo;
     navItems: NavSection[];
     dashboardHome: string;
}



const DashboardMobileSidebar = ({
     navItems,
     dashboardHome,
}: DashboardMobileSidebarProps) => {

     const pathname = usePathname();

     return (
     <div className="flex h-full flex-col bg-white">
     <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

     {/* Brand Header */}
     <div className="flex h-20 items-center border-b border-slate-100 px-6 shrink-0">
     <Link href={dashboardHome} className="flex items-center gap-3 group">
     <div className="w-10 h-10 bg-[#0A3D54] rounded-xl flex items-center justify-center group-hover:bg-[#00B4D8] transition-colors">
          <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
     </div>
          <span className="text-[19px] font-black text-[#0A3D54] tracking-wide">
               DOCTORAL<span className="text-[#00B4D8]">.</span>
          </span>
     </Link>
     </div>

     {/* Navigation */}
     <ScrollArea className="flex-1 px-4 py-6">
     <nav className="space-y-8">
          {navItems.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-3">
          {section.title && (
               <h4 className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    {section.title}
               </h4>
          )}

     <div className="space-y-1.5">
     {section.items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = getIconComponent(item.icon);


     return (
          <Link
               key={item.href}
               href={item.href}
               className={cn("flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 group",
                    isActive
                    ? "bg-[#EAF0F3] text-[#0A66C2]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0A3D54]"
               )}
          >
               <Icon 
                    className={cn("h-5 w-5 transition-colors", 
                    isActive ? "text-[#0A66C2]" : "text-slate-400 group-hover:text-[#0A3D54]"
               )} 
                    strokeWidth={isActive ? 2.5 : 2} 
               />
               <span className="flex-1">{item.title}</span>

               {item.badge && (
               <Badge
                    variant="secondary"
                    className={cn(
                    "ml-auto font-bold border-none",
                    isActive ? "bg-[#0A66C2] text-white" : "bg-slate-100 text-slate-500"
               )}
               >
                    {item.badge}
               </Badge>
               )}
               </Link>
               );
               })}
          </div>
          </div>
          ))}
     </nav>
     </ScrollArea>
     </div>
);
};

export default DashboardMobileSidebar;
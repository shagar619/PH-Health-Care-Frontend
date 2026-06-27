// "use client";

// import { NavSection } from "@/types/dashboard.interface";
// import { UserInfo } from "@/types/user.interface";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ScrollArea } from "@radix-ui/react-scroll-area";
// import { getIconComponent } from "@/lib/icon-mapper";
// import { cn } from "@/lib/utils";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";


// interface DashboardSidebarContentProps {
//      userInfo: UserInfo;
//      navItems: NavSection[];
//      dashboardHome: string;
// }

// const DashboardSidebarContent = ({
//      userInfo,
//      navItems,
//      dashboardHome,
// }: DashboardSidebarContentProps) => {

// const pathname = usePathname();


// return (
//      <div className="hidden md:flex h-full w-64 flex-col border-r bg-card">
//       {/* Logo/Brand */}
//      <div className="flex h-16 items-center border-b px-6">
//      <Link href={dashboardHome} className="flex items-center space-x-2">
//           <span className="text-xl font-bold text-primary">PH Healthcare</span>
//      </Link>
//      </div>

//      {/* Navigation */}
//      <ScrollArea className="flex-1 px-3 py-4">
//      <nav className="space-y-6">
//           {navItems.map((section, sectionIdx) => (
//      <div key={sectionIdx}>
//           {section.title && (
//      <h4 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
//           {section.title}
//      </h4>
//      )}
//      <div className="space-y-1">
//           {section.items.map((item) => {
//           const isActive = pathname === item.href;
//           const Icon = getIconComponent(item.icon);

//      return (
//      <Link
//           key={item.href}
//           href={item.href}
//           className={cn(
//           "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
//           isActive
//           ? "bg-primary text-primary-foreground"
//           : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
//           )}
//           >
//      <Icon className="h-4 w-4" />
//      <span className="flex-1">{item.title}</span>
//           {item.badge && (
//      <Badge
//           variant={isActive ? "secondary" : "default"}
//           className="ml-auto"
//           >
//           {item.badge}
//      </Badge>
//      )}
//      </Link>
//      );
//      })}
//      </div>
//           {sectionIdx < navItems.length - 1 && (
//      <Separator className="my-4" />
//      )}
//      </div>
//      ))}
//      </nav>
//      </ScrollArea>

//      {/* User Info at Bottom */}
//      <div className="border-t p-4">
//      <div className="flex items-center gap-3">
//      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
//      <span className="text-sm font-semibold text-primary">
//           {userInfo.name.charAt(0).toUpperCase()}
//      </span>
//      </div>
//      <div className="flex-1 overflow-hidden">
//           <p className="text-sm font-medium truncate">{userInfo.name}</p>
//           <p className="text-xs text-muted-foreground capitalize">
//           {userInfo.role.toLowerCase()}
//           </p>
//      </div>
//      </div>
//      </div>
// </div>
// );
// };

// export default DashboardSidebarContent;























"use client";

import { NavSection } from "@/types/dashboard.interface";
import { UserInfo } from "@/types/user.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getIconComponent } from "@/lib/icon-mapper";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react"; // Using this as a brand logo icon

interface DashboardSidebarContentProps {
  userInfo: UserInfo;
  navItems: NavSection[];
  dashboardHome: string;
}

const DashboardSidebarContent = ({
  userInfo,
  navItems,
  dashboardHome,
}: DashboardSidebarContentProps) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex h-full w-[280px] flex-col bg-white border-r border-slate-200">
      
      {/* Brand Header */}
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
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
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 group",
                        isActive
                          ? "bg-[#EAF0F3] text-[#0A66C2]" // Active State
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#0A3D54]" // Inactive State
                      )}
                    >
                      <Icon 
                        className={cn(
                          "h-5 w-5 transition-colors", 
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

export default DashboardSidebarContent;
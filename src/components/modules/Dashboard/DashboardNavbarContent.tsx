"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavSection } from "@/types/dashboard.interface";
import { UserInfo } from "@/types/user.interface";
import { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import UserDropdown from "./UserDropdown";
import DashboardMobileSidebar from "./DashboardMobileSidebar";
import AISearchDialog from "@/components/shared/AISSearchDialog";
import NotificationDropdown from "./NotificationDropdown";


interface DashboardNavbarContentProps {
     userInfo: UserInfo;
     navItems?: NavSection[];
     dashboardHome?: string;
}


const DashboardNavbarContent = ({
     userInfo,
     navItems,
     dashboardHome,
}: DashboardNavbarContentProps) => {

     const [isOpen, setIsOpen] = useState(false);
     const [isMobile, setIsMobile] = useState(false);
     const [searchQuery, setSearchQuery] = useState("");
     const [aiDialogOpen, setAiDialogOpen] = useState(false);

     useEffect(() => {
     const checkSmallerScreen = () => setIsMobile(window.innerWidth < 768);
     checkSmallerScreen();
     window.addEventListener("resize", checkSmallerScreen);
     return () => window.removeEventListener("resize", checkSmallerScreen);
     }, []);

     const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
     if (e.key === "Enter" && searchQuery.trim()) setAiDialogOpen(true);
     };

     const handleSearchIconClick = () => {
     if (searchQuery.trim()) setAiDialogOpen(true);
     };


     return (
     // Clean flat border, no heavy shadow
     <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 h-20 flex items-center">
     <div className="flex w-full items-center justify-between gap-4 px-4 md:px-8">

     {/* Mobile Menu Toggle */}
     <div className="flex items-center gap-4 lg:hidden">
          <Sheet open={isMobile && isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50">
               <Menu className="h-5 w-5" />
          </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0 border-r border-slate-200">
          <DashboardMobileSidebar
               userInfo={userInfo}
               navItems={navItems || []}
               dashboardHome={dashboardHome || ""}
          />
          </SheetContent>
          </Sheet>
     </div>

     {/* Search Bar & AI Search */}
     <div className="flex-1 flex items-center max-w-xl">
     <div className="relative w-full hidden sm:block">
          <Search
               className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 cursor-pointer hover:text-[#00B4D8] transition-colors"
               onClick={handleSearchIconClick}
          />
          <Input
               type="text"
               placeholder="Search doctors, patients, or symptoms..."
               className="pl-12 pr-4 h-12 rounded-full bg-slate-50 border-slate-200 focus-visible:ring-[#00B4D8] focus-visible:border-transparent text-[15px]"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               onKeyDown={handleSearchKeyDown}
          />
     </div>

          <AISearchDialog
               initialSymptoms={searchQuery}
               externalOpen={aiDialogOpen}
               onOpenChange={(open) => {
               setAiDialogOpen(open);
               if (!open) setSearchQuery("");
          }}
               onSearchComplete={() => setSearchQuery("")}
          />
     </div>

     {/* Right Side Actions */}
     <div className="flex items-center gap-3 md:gap-4 shrink-0">
     <NotificationDropdown />
     {/* Vertical Separator */}
     <div className="hidden sm:block w-px h-8 bg-slate-200 mx-2"></div>
          <UserDropdown userInfo={userInfo} />
     </div>

     </div>
     </header>
);
};

export default DashboardNavbarContent;
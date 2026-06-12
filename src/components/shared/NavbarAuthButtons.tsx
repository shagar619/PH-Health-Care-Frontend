"use client";

import { UserInfo } from "@/types/user.interface";
import { Button } from "../ui/button";
import Link from "next/link";
import UserDropdown from "../modules/Dashboard/UserDropdown";
import { LayoutDashboard, LogIn } from "lucide-react";
import { useAuthToken } from "@/hooks/useAuthToken";

interface NavbarAuthButtonsProps {
     initialHasToken: boolean;
     initialUserInfo: UserInfo | null;
     initialDashboardRoute: string;
}

export default function NavbarAuthButtons({
     initialHasToken,
     initialUserInfo,
     initialDashboardRoute,
}: NavbarAuthButtonsProps) {

     const clientHasToken = useAuthToken();

     const hasToken = clientHasToken || initialHasToken;
     const userInfo = hasToken ? initialUserInfo : null;
     const dashboardRoute = initialDashboardRoute;

     if (hasToken && userInfo) {
     return (
     <div className="flex items-center space-x-4 animate-in fade-in zoom-in duration-300">
     <Link href={dashboardRoute}>
     <Button 
          variant="outline" 
          className="gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300 shadow-sm rounded-full px-5"
     >
     <LayoutDashboard className="h-4 w-4" />
          Dashboard
     </Button>
     </Link>
     <UserDropdown userInfo={userInfo} />
     </div>
     );
     }


     return (
     <Link href="/login">
     <Button 
          className="gap-2 rounded-full px-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
     >
     <LogIn className="h-4 w-4" />
          Login
     </Button>
     </Link>
);
}
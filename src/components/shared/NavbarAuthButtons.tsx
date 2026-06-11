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
     <div className="flex items-center gap-2">
     <Link href={dashboardRoute}>
          <Button
               variant="outline"
               size="sm"
               className="gap-2 border-slate-200 bg-white text-slate-700 shadow-sm hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-700 dark:hover:bg-sky-950/40 dark:hover:text-sky-400 transition-all duration-200 font-medium cursor-pointer"
          >
          <LayoutDashboard className="h-3.5 w-3.5" />
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
          size="sm"
          className="gap-2 bg-sky-600 hover:bg-sky-700 text-white shadow-md hover:shadow-sky-500/40 transition-all duration-200 font-medium cursor-pointer"
     >
     <LogIn className="h-3.5 w-3.5" />
          Login
     </Button>
     </Link>
);
}
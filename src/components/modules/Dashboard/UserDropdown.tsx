"use client";

import LogoutButton from "@/components/shared/LogoutButton";
import { Button } from "@/components/ui/button";
import { 
     DropdownMenu, 
     DropdownMenuContent, 
     DropdownMenuItem, 
     DropdownMenuLabel, 
     DropdownMenuSeparator, 
     DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { logoutUser } from "@/services/auth/logoutUser";
import { UserInfo } from "@/types/user.interface";
import { Settings, User, LogOut } from "lucide-react";
import Link from "next/link";


interface UserDropdownProps {
     userInfo: UserInfo;
}


const UserDropdown = ({ userInfo }: UserDropdownProps) => {

     const handleLogout = async () => {
     await logoutUser();
     };

     return (
     <DropdownMenu>
     {/* TRIGGER BUTTON */}
     <DropdownMenuTrigger asChild>
     <Button 
          variant="outline" 
          size="icon" 
          className="relative h-10 w-10 rounded-full bg-[#EAF0F3] hover:bg-[#DCE4E8] border border-slate-200 cursor-pointer transition-colors"
     >
          <span className="text-[15px] font-bold text-[#0A3D54]">
          {userInfo.name.charAt(0).toUpperCase()}
          </span>
     </Button>
     </DropdownMenuTrigger>

     {/* DROPDOWN CONTENT */}
     <DropdownMenuContent 
          align="end" 
          className="w-64 p-2 bg-white border border-slate-200 rounded-2xl shadow-sm"
     >

     {/* HEADER INFO */}
     <DropdownMenuLabel className="p-0 mb-1">
     <div className="flex flex-col space-y-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
     <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-bold text-[#0A3D54] truncate">
               {userInfo.name}
          </p>
     {/* Role Badge */}
          <span className="bg-[#00B4D8]/10 text-[#00B4D8] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0">
               {userInfo.role}
          </span>
     </div>
          <p className="text-xs text-slate-500 truncate font-medium">
          {userInfo.email}
          </p>
     </div>
     </DropdownMenuLabel>

     <DropdownMenuSeparator className="bg-slate-100 my-1" />

     {/* MENU LINKS */}
     <div className="space-y-1">
     <DropdownMenuItem asChild className="cursor-pointer rounded-xl p-2.5 text-slate-600 hover:text-[#0A3D54] hover:bg-slate-50 focus:bg-slate-50 transition-colors">
     <Link href={"/my-profile"}>
          <User className="mr-3 h-4 w-4" strokeWidth={2} />
          <span className="font-medium">My Profile</span>
     </Link>
     </DropdownMenuItem>

     <DropdownMenuItem asChild className="cursor-pointer rounded-xl p-2.5 text-slate-600 hover:text-[#0A3D54] hover:bg-slate-50 focus:bg-slate-50 transition-colors">
     <Link href={"/change-password"}>
          <Settings className="mr-3 h-4 w-4" strokeWidth={2} />
          <span className="font-medium">Change Password</span>
     </Link>
     </DropdownMenuItem>
     </div>

     <DropdownMenuSeparator className="bg-slate-100 my-1" />

     {/* LOGOUT ACTION */}
     <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer rounded-xl p-2.5 text-rose-600 hover:bg-rose-50 hover:text-rose-700 focus:bg-rose-50 focus:text-rose-700 transition-colors"
     >
     {/* Note: Assuming LogoutButton handles its own text, 
     but adding an icon wrapper here ensures consistency with the above links */}
     <div className="flex items-center font-medium w-full">
          <LogOut className="mr-3 h-4 w-4" strokeWidth={2} />
          <LogoutButton />
     </div>
     </DropdownMenuItem>

     </DropdownMenuContent>
     </DropdownMenu>
);
};

export default UserDropdown;
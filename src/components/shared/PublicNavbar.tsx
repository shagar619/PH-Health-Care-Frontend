import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getCookie } from "@/services/auth/tokenHandlers";
import Link from "next/link";
import AISearchDialog from "./AISSearchDialog";
import NavbarAuthButtons from "./NavbarAuthButtons";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/images/logo.png";

const PublicNavbar = async () => {
const navItems = [
     { href: "/consultation", label: "Consultation" },
     { href: "/health-plans", label: "Health Plans" },
     { href: "/medicine", label: "Medicine" },
     { href: "/diagnostics", label: "Diagnostics" },
     { href: "/ngos", label: "NGOs" },
     ];

const accessToken = await getCookie("accessToken");
const userInfo = accessToken ? await getUserInfo() : null;

const dashboardRoute = userInfo
     ? getDefaultDashboardRoute(userInfo.role)
     : "/";

     return (
     <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/80 shadow-sm shadow-slate-200/40 dark:shadow-slate-900/40">
     <div className="container mx-auto flex h-18 items-center justify-between px-4 lg:px-6">

     {/* Logo */}
     <Link
          href="/"
          className="group flex items-center space-x-2.5 transition-opacity hover:opacity-90"
     >
          <div className="relative">
            {/* Subtle glow ring behind logo */}
          <span className="absolute -inset-1 rounded-full blur-sm transition-all duration-300" />
          <img
               src={logo.src}
               alt="Doctoral Logo"
               className="relative h-8 w-auto"
          />
          </div>
     </Link>

     {/* Desktop Nav */}
     <nav className="hidden md:flex items-center gap-1">
          {navItems.map((link) => (
          <Link
               key={link.label}
               href={link.href}
               prefetch={true}
               className="relative px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 rounded-md hover:bg-sky-50 dark:hover:bg-sky-950/40 group"
          >
               {link.label}
               {/* Animated underline */}
               <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-sky-500 transition-transform duration-200 group-hover:scale-x-100 rounded-full" />
          </Link>
          ))}
     </nav>

     {/* Desktop Actions */}
     <div className="hidden md:flex items-center gap-2">
          <AISearchDialog />
          <NavbarAuthButtons
               initialHasToken={!!accessToken}
               initialUserInfo={userInfo}
               initialDashboardRoute={dashboardRoute}
          />
     </div>

     {/* Mobile Menu */}
     <MobileMenu
          navItems={navItems}
          hasAccessToken={!!accessToken}
          userInfo={userInfo}
          dashboardRoute={dashboardRoute}
     />
     </div>

     {/* Decorative bottom gradient line */}
     <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
     </header>
);
};

export default PublicNavbar;
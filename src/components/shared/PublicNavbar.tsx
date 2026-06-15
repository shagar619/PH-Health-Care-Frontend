import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getCookie } from "@/services/auth/tokenHandlers";
import Link from "next/link";
import AISearchDialog from "./AISSearchDialog";
import NavbarAuthButtons from "./NavbarAuthButtons";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";
import logo from "../../assets/images/logo.png";

const PublicNavbar = async () => {

     const accessToken = await getCookie("accessToken");
     const userInfo = accessToken ? await getUserInfo() : null;

     const dashboardRoute = userInfo
     ? getDefaultDashboardRoute(userInfo.role)
     : "/";

     return (
     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-300">
     <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">

     {/* Logo Section */}
     <Link 
          href="/" 
          className="flex items-center space-x-2 transition-transform hover:scale-105 duration-300"
     >
          <img src={logo.src} alt="PH Doc Logo" className="h-8 w-auto drop-shadow-sm" />
     </Link>

     {/* Desktop Navigation (Client Component) - PROPS REMOVED */}
     <DesktopNav />

     {/* Right Actions */}
     <div className="hidden md:flex items-center space-x-4">
     <AISearchDialog />
     <div className="h-6 w-px bg-border/50" />
     <NavbarAuthButtons
          initialHasToken={!!accessToken}
          initialUserInfo={userInfo}
          initialDashboardRoute={dashboardRoute}
     />
     </div>

     {/* Mobile Menu (Client Component) - NAV PROPS REMOVED */}
     <MobileMenu
          hasAccessToken={!!accessToken}
          userInfo={userInfo}
          dashboardRoute={dashboardRoute}
     />
     </div>
     </header>
);
};

export default PublicNavbar;
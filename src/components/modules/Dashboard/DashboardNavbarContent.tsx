import { NavSection } from "@/types/dashboard.interface";
import { UserInfo } from "@/types/user.interface";


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
     return (
          <div>Dashboard Navbar Content</div>
     )
}



export default DashboardNavbarContent;
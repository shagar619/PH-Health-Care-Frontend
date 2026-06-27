import DashboardNavbar from "@/components/modules/Dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/modules/Dashboard/DashboardSidebar";

export const dynamic = "force-dynamic";

const CommonDashboardLayout = async ({
     children,
}: {
     children: React.ReactNode;
}) => {

     return (
     // Changed bg color to the app's standard light slate background
     <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
     <DashboardSidebar />
     <div className="flex flex-1 flex-col overflow-hidden">
     <DashboardNavbar />
     {/* Adjusted padding for a more breathable layout */}
     <main className="flex-1 overflow-y-auto p-6 md:p-8">
     <div className="max-w-7xl mx-auto w-full">
          {children}
     </div>
     </main>
     </div>
     </div>
);
};

export default CommonDashboardLayout;
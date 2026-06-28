// import { AppointmentBarChart } from "@/components/shared/AppointmentBarChart";
// import { DashboardSkeleton } from "@/components/shared/DashboardSkeleton";
// import { StatsCard } from "@/components/shared/StatCard";
// import { getDashboardMetaData } from "@/services/meta/dashboard.service";
// import { IAdminDashboardMeta } from "@/types/meta.interface";
// import { Suspense } from "react";


// async function AdminDashboardContent() {

//      const result = await getDashboardMetaData();

//      const data: IAdminDashboardMeta = result.data;

//      // console.log("Dashboard Data:", data);

//      const totalRevenue = data.totalRevenue?._sum?.amount || 0;

//      return (
//      <div className="space-y-6">
//      {/* Stats Cards Grid */}
//      <div
//      className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${
//           data.adminCount !== undefined ? "xl:grid-cols-6" : "xl:grid-cols-5"
//      }`}
//      >
//      <StatsCard
//           title="Total Appointments"
//           value={data.appointmentCount.toLocaleString()}
//           iconName="CalendarDays"
//           description="All time appointments"
//           iconClassName="bg-blue-100"
//      />
//      <StatsCard
//           title="Total Patients"
//           value={data.patientCount.toLocaleString()}
//           iconName="Users"
//           description="Registered patients"
//           iconClassName="bg-green-100"
//      />
//      <StatsCard
//           title="Total Doctors"
//           value={data.doctorCount.toLocaleString()}
//           iconName="Stethoscope"
//           description="Active doctors"
//           iconClassName="bg-purple-100"
//      />
//      {data.adminCount !== undefined && (
//      <StatsCard
//           title="Total Admins"
//           value={data.adminCount.toLocaleString()}
//           iconName="UserCog"
//           description="System administrators"
//           iconClassName="bg-orange-100"
//      />
//      )}
//      <StatsCard
//           title="Total Payments"
//           value={data.paymentCount.toLocaleString()}
//           iconName="CreditCard"
//           description="Payment transactions"
//           iconClassName="bg-indigo-100"
//      />
//      <StatsCard
//           title="Total Revenue"
//           value={`$${totalRevenue.toLocaleString()}`}
//           iconName="DollarSign"
//           description="Total earnings"
//           iconClassName="bg-emerald-100"
//      />
//      </div>

//      {/* Charts Section */}
//      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
//      <AppointmentBarChart data={data.barChartData} />
//      {/* <AppointmentPieChart data={data.pieCharData} /> */}
//      </div>
//      </div>
// );
// }


// const AdminDashboardPage = () => {

//      return (
//      <div className="space-y-6">
//      <div>
//           <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
//           <p className="text-muted-foreground">
//           Overview of your healthcare system statistics
//           </p>
//      </div>

//      <Suspense fallback={<DashboardSkeleton />}>
//      <AdminDashboardContent />
//      </Suspense>
//      </div>
// );
// };

// export default AdminDashboardPage;























import { Suspense } from "react";
import { getDashboardMetaData } from "@/services/meta/dashboard.service";
import { IAdminDashboardMeta } from "@/types/meta.interface";
import { StatsCard } from "@/components/shared/StatCard";
import { AppointmentBarChart } from "@/components/shared/AppointmentBarChart";
import { AppointmentPieChart } from "@/components/shared/AppointmentPieChart";
import { DashboardSkeleton } from "@/components/shared/DashboardSkeleton";
import { 
  CalendarDays, 
  Users, 
  Stethoscope, 
  DollarSign, 
  CreditCard, 
  ShieldCheck 
} from "lucide-react";

async function AdminDashboardContent() {
  const result = await getDashboardMetaData();
  const data: IAdminDashboardMeta = result.data;

  const totalRevenue = data?.totalRevenue?._sum?.amount || 0;

  return (
    <div className="space-y-6">
      
      {/* 1. PRIMARY KPI TIER (Strict 4-Column Grid) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          description="Gross verified earnings"
          iconClassName="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          isHero={true}
        />
        <StatsCard
          title="Appointments"
          value={data?.appointmentCount?.toLocaleString() || 0}
          icon={CalendarDays}
          description="Total processed schedules"
          iconClassName="bg-blue-500/10 text-blue-600 dark:text-blue-400"
        />
        <StatsCard
          title="Active Patients"
          value={data?.patientCount?.toLocaleString() || 0}
          icon={Users}
          description="Registered patient base"
          iconClassName="bg-amber-500/10 text-amber-600 dark:text-amber-400"
        />
        <StatsCard
          title="Medical Staff"
          value={data?.doctorCount?.toLocaleString() || 0}
          icon={Stethoscope}
          description="Licensed doctors onboard"
          iconClassName="bg-purple-500/10 text-purple-600 dark:text-purple-400"
        />
      </div>

      {/* 2. ANALYTICS SPLIT TIER (Asymmetric 4 : 3 ratio) */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-7 items-start">
        
        {/* Left: Main Volume Chart (Spans 4 columns) */}
        <div className="lg:col-span-4 h-full">
          <AppointmentBarChart data={data?.barChartData || []} />
        </div>

        {/* Right: Operational Health Sidebar (Spans 3 columns) */}
        <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
          
          {/* Secondary Stats Cluster */}
          <div className="grid grid-cols-2 gap-4">
            <StatsCard
              title="Transactions"
              value={data?.paymentCount?.toLocaleString() || 0}
              icon={CreditCard}
              iconClassName="bg-zinc-500/10 text-zinc-600"
            />
            <StatsCard
              title="System Admins"
              value={data?.adminCount?.toLocaleString() || 1}
              icon={ShieldCheck}
              iconClassName="bg-cyan-500/10 text-cyan-600"
            />
          </div>

          {/* Restored Pie Chart taking the bottom right slot */}
          <AppointmentPieChart data={data?.pieCharData || []} />

        </div>

      </div>

    </div>
  );
}

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 animate-in fade-in-50 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            System Overview
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time medical infrastructure metrics & financial logging.
          </p>
        </div>
        
        {/* Visual anchor point for future actions */}
        <div className="flex items-center gap-2">
           <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 ring-1 ring-inset ring-emerald-500/20 dark:text-emerald-400">
             <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
             Live Database
           </span>
        </div>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <AdminDashboardContent />
      </Suspense>
    </div>
  );
}
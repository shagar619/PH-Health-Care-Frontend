

export default function DoctorDashboardLoading() {
     return (
     <div className="space-y-6">
     <div>
          <h1 className="text-3xl font-bold tracking-tight">Doctor Dashboard</h1>
          <p className="text-muted-foreground">
          Overview of your medical practice and patient statistics
          </p>
     </div>
     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"></div>
          <div className="animate-pulse rounded-md bg-muted h-24 w-full" />
          <div className="animate-pulse rounded-md bg-muted h-24 w-full" />
          <div className="animate-pulse rounded-md bg-muted h-24 w-full" />
          <div className="animate-pulse rounded-md bg-muted h-24 w-full" />
     </div>
);
}

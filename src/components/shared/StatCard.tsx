// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import * as Icons from "lucide-react";
// import { cn } from "@/lib/utils";



// interface StatsCardProps {
//      title: string;
//      value: string | number;
//      iconName: string;
//      description?: string;
//      trend?: {
//           value: number;
//           isPositive: boolean;
//      };
//      className?: string;
//      iconClassName?: string;
// }

// export function StatsCard({
//      title,
//      value,
//      iconName,
//      description,
//      trend,
//      className,
//      iconClassName,
// }: StatsCardProps) {

//      // Dynamically get the icon component
//      const Icon = (Icons as any)[iconName] || Icons.HelpCircle;

//      return (
//      <Card
//      className={cn("hover:shadow-lg transition-all duration-300 hover:scale-105",className)}
//      >
//      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//      <CardTitle className="text-sm font-medium text-muted-foreground">
//           {title}
//      </CardTitle>
//      <div
//      className={cn("h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center transition-colors",iconClassName)}
//      >
//           <Icon className="h-5 w-5 text-primary" />
//      </div>
//      </CardHeader>
//      <CardContent>
//      <div className="text-2xl font-bold">{value}</div>
//      {description && (
//           <p className="text-xs text-muted-foreground mt-1">{description}</p>
//      )}
//      {trend && (
//      <div className="flex items-center gap-1 mt-2">
//           <span
//           className={cn("text-xs font-medium",trend.isPositive ? "text-green-600" : "text-red-600")}
//           >
//           {trend.isPositive ? "+" : ""}
//           {trend.value}%
//           </span>
//           <span className="text-xs text-muted-foreground">
//                from last month
//           </span>
//           </div>
//      )}
//      </CardContent>
//      </Card>
// );
// }


















"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon; // <--- Strictly typed component, unlocks Tree-Shaking
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  iconClassName?: string;
  isHero?: boolean;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className,
  iconClassName,
  isHero = false,
}: StatsCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-200 border-border/60 bg-card hover:border-border hover:shadow-sm",
        isHero && "border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground tracking-tight">
          {title}
        </CardTitle>
        <div
          className={cn(
            "h-9 w-9 rounded-lg bg-muted flex items-center justify-center transition-colors",
            iconClassName
          )}
        >
          <Icon className="h-4 w-4 text-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight tabular-nums">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{description}</p>
        )}
        {trend && (
          <div className="flex items-center gap-1.5 mt-2.5 text-xs">
            <span
              className={cn(
                "font-semibold px-1.5 py-0.5 rounded",
                trend.isPositive 
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
              )}
            >
              {trend.isPositive ? "+" : ""}{trend.value}%
            </span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
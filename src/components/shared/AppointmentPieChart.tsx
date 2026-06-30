"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

interface PieChartData {
  status: string;
  count: number;
}

const STATUS_COLORS: Record<string, string> = {
  COMPLETED: "#10b981", // emerald
  SCHEDULED: "#3b82f6", // blue
  INPROGRESS: "#f59e0b", // amber
  CANCELED: "#ef4444",  // red
};

export function AppointmentPieChart({ data = [] }: { data: PieChartData[] }) {
  const total = data.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <Card className="flex flex-col justify-between border-border/60">
      <CardHeader className="pb-0">
        <CardTitle className="text-base font-semibold">Status Distribution</CardTitle>
        <CardDescription>Breakdown of all registered bookings</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center pt-4">
        <div className="h-[210px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={4}
                dataKey="count"
                nameKey="status"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={STATUS_COLORS[entry.status] || "#8884d8"} 
                    strokeWidth={0}
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value} bookings`, 'Count']}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Clean Legend */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full mt-2 pt-4 border-t border-border/40 text-xs">
          {data.map((item) => (
            <div key={item.status} className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 truncate">
                <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: STATUS_COLORS[item.status] || "#ccc" }} />
                <span className="capitalize text-muted-foreground truncate">{item.status.toLowerCase()}</span>
              </div>
              <span className="font-medium tabular-nums">{Math.round((item.count / (total || 1)) * 100)}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
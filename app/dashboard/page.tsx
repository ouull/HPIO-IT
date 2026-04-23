import { MonitorSmartphone, Shield, FileText, Users } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function DashboardOverview() {
  // Mock Data untuk saat ini (karena db masih kosong)
  const stats = [
    { label: "Total Assets", value: "1,240", icon: <MonitorSmartphone size={24} />, trend: "+12%" },
    { label: "Active Systems", value: "8", icon: <Shield size={24} />, trend: "All Good" },
    { label: "SOP Documents", value: "45", icon: <FileText size={24} />, trend: "+3 New" },
    { label: "Personnel", value: "32", icon: <Users size={24} />, trend: "Fixed" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-zinc-400 mt-1">Ringkasan sistem operasional IT dan infrastruktur.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-primary/10 text-blue-primary rounded-xl">
                {stat.icon}
              </div>
              <span className="text-xs font-medium px-2 py-1 bg-white/5 rounded-full text-zinc-400">
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-400 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 h-96 flex items-center justify-center">
          <p className="text-zinc-500">Asset Condition Chart Placeholder</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 h-96 flex items-center justify-center">
          <p className="text-zinc-500">Recent Activities Placeholder</p>
        </div>
      </div>
    </div>
  );
}

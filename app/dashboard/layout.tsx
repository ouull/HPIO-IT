import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, MapPin, Users, MonitorSmartphone, Settings, LogOut } from "lucide-react";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const menu = [
    { label: "Overview", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
    { label: "Locations", icon: <MapPin size={20} />, href: "/dashboard/locations" },
    { label: "Organization", icon: <Users size={20} />, href: "/dashboard/organization" },
    { label: "Assets", icon: <MonitorSmartphone size={20} />, href: "/dashboard/assets" },
    { label: "Systems", icon: <Settings size={20} />, href: "/dashboard/systems" },
  ];

  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-black-main border-r border-white/5 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xl font-bold text-blue-primary">HPIO Dashboard</h2>
          <p className="text-xs text-zinc-500 mt-1">Role: {(session.user as any).role}</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menu.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-white/5 flex items-center px-6 bg-black-main/50 backdrop-blur-md">
          <div className="ml-auto flex items-center gap-4">
            <span className="text-sm font-medium">{session.user?.name}</span>
            <div className="w-8 h-8 rounded-full bg-blue-primary text-black-main flex items-center justify-center font-bold">
              {session.user?.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

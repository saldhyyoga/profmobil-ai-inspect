
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  FileText,
  Settings,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isCollapsed: boolean;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  href, 
  isCollapsed,
  isActive
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-automotive-100 hover:text-automotive-600",
        isActive ? "bg-automotive-100 text-automotive-600" : "text-gray-600",
        isCollapsed && "justify-center"
      )}
    >
      <div className="flex shrink-0 items-center justify-center">
        {icon}
      </div>
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};

interface DashboardSidebarProps {
  className?: string;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // User role navigation items
  const userNavItems = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Dashboard",
      href: "/dashboard"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Jadwalkan Inspeksi",
      href: "/dashboard/schedule-inspection"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: "Riwayat Inspeksi",
      href: "/dashboard/inspection-history"
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Pengaturan",
      href: "/dashboard/settings"
    }
  ];

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-white transition-all duration-300",
        isCollapsed ? "w-[70px]" : "w-64",
        className
      )}
    >
      <div className="flex flex-col gap-2 p-4">
        {userNavItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isCollapsed={isCollapsed}
            isActive={location.pathname === item.href}
          />
        ))}
      </div>

      <div className="mt-auto p-4">
        <Button
          variant="ghost"
          size="icon"
          className="w-full flex justify-center hover:bg-automotive-100 hover:text-automotive-600"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;

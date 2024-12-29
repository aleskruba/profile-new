"use client"; // Ensure that this is a client-side component

import { cn } from "@/lib/utils";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation"; // Client-side hook for pathname
import { HomeIcon, User2, LucideIcon } from "lucide-react"; // Import all required icons

// Icon mapping
const iconMapping: Record<string, LucideIcon> = {
  HomeIcon,
  User2,
};

type DashboardLink = {
  id: number;
  name: string;
  href: "/dashboard" | "/dashboard/myskills" | "/dashboard/projects" | "/dashboard/certificates" | "/dashboard/contact";
  icon:string
};

interface DashboardLinksClientProps {
  dashboardLinks: DashboardLink[];
}

export function DashboardLinksClient({ dashboardLinks }: DashboardLinksClientProps) {
    const fullpathname = usePathname(); 
    const pathname = fullpathname.slice(3); // Get the current pathname
  
    return (
      <>
        {dashboardLinks.map((link) => {
          const isActive = pathname === link.href; // Check if current path matches the link's href
          const IconComponent = iconMapping[link.icon]; // Get the icon component dynamically
  
          return (
            <Link
              href={link.href}
              key={link.id}
              className={cn(
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground",
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
              )}
            >
              {IconComponent && <IconComponent className="size-4" />} {/* Render the icon */}
              {link.name}
            </Link>
          );
        })}
      </>
    );
  }
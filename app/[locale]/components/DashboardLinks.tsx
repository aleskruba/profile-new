// Server Component - DashboardLinks

import { getTranslations } from "next-intl/server";
import { DashboardLinksClient } from "./DashboardLinksClient"; // Import the client component




export async function DashboardLinks() {
  // Fetch translations on the server side
  const t = await getTranslations("Links");

  // Define the dashboard links with correct icon components
  const dashboardLinks = [
    {
      id: 0,
      name: t("aboutme"),
      href: "/dashboard" as "/dashboard", // Cast href to the correct union type
      icon: "HomeIcon",

    },
    {
      id: 1,
      name: t("myskills"),
      href: "/dashboard/myskills" as "/dashboard/myskills", // Cast href to the correct union type
      icon: "User2",
   
    },
    {
      id: 2,
      name: t("myprojects"),
      href: "/dashboard/projects" as "/dashboard/projects", // Cast href to the correct union type
      icon: "User2",
   
    },
    {
      id: 3,
      name: t("mycertificates"),
      href: "/dashboard/certificates" as "/dashboard/certificates", // Cast href to the correct union type
      icon: "User2",
    },
    {
      id: 4,
      name: t("contact"),
      href: "/dashboard/contact" as "/dashboard/contact", // Cast href to the correct union type
      icon: "User2",
    },
  ];

  // Pass the translations and links to the client component
  return (
    <div>
      <DashboardLinksClient dashboardLinks={dashboardLinks} />
    </div>
  );
}

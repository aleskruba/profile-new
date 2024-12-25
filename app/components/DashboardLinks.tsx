"use client"

import { cn } from "@/lib/utils"
import { HomeIcon, User2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const dashboardLinks  = [
    {
        id:0,
        name:"about me",
        href:"/dashboard",
        icon:HomeIcon,
        
    },
    {
        id:1,
        name:"my skills",
        href:"/dashboard/myskills",
        icon:User2,
    },
    {
        id:2,
        name:"my projects",
        href:"/dashboard/projects",
        icon:User2,
    },
    {
        id:3,
        name:"contact",
        href:"/dashboard/contact",
        icon:User2,
    }
]

export function DashboardLinks(){

    const pathname = usePathname()

    return (
        <>
        {dashboardLinks.map(link =>{
            return (
            <Link href={link.href} 
                  key={link.id}
                  className={cn(pathname=== link.href ? 
                            'text-primary bg-primary/10' : 
                            'text-muted-foreground hover:text-foreground',
                            'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary '
                        )}
                  >
                <link.icon className="size-4"/>
                {link.name}
            </Link>            
            )
        })}
        </>
    )
}
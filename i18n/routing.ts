import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'cz'],
 
  // Used when no locale matches
  defaultLocale: 'en',

  pathnames:{
    "/":{
        en:"/",
        cz:"/"
      },
    "/dashboard":{
      en:"/dashboard",
      cz:"/dashboard"
    },
    "/dashboard/contact":{
      en:"/dashboard/contact",
      cz:"/dashboard/contact"
    },
    "/dashboard/myskills":{
      en:"/dashboard/myskills",
      cz:"/dashboard/myskills"
    },
    "/dashboard/certificates":{
      en:"/dashboard/certificates",
      cz:"/dashboard/certificates"
    },
    "/dashboard/projects":{
      en:"/dashboard/projects",
      cz:"/dashboard/projects"
    }
}
});
 
export type Locale = (typeof routing.locales)[number]

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
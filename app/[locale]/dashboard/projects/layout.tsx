import { ReactNode } from "react";

import { getTranslations,getMessages } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>; // `params` is a Promise
}): Promise<Metadata> {
  // Await the promise to resolve params
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Fetch the messages based on the locale
  const messages = await getMessages({ locale });

  // Safely access the title from the messages
  const title = (messages.Links as Record<string, string>)?.myprojects;

  // Return the metadata object with the title
  return {
    title,
  };
}

export default async function MySkillsLayout({children}:{children : ReactNode}){
  return (
    <div > 
         
         <main className="bg-green-500 flex ">
            {children}
    </main>
</div>
  )
}


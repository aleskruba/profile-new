import { Button } from "@/components/ui/button";
import { getMessages, getTranslations } from 'next-intl/server';
import {Link} from '@/i18n/routing';
import DropDownSettingComponents from "./components/DropDownSettingComponents";
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
  const title = (messages.Links as Record<string, string>)?.introduction;

  // Return the metadata object with the title
  return {
    title,
  };
}

export default async function Home() {
  const t = await getTranslations('HomePage');
  const s = await getTranslations('Settings');



  return (
<div className="flex flex-col min-h-screen 
  dark:bg-gradient-to-b dark:from-gray-800 dark:via-blue-900 dark:to-gray-900 
  bg-gradient-to-b from-blue-100 via-white to-gray-100 text-center pt-2 px-6">   
       <nav className="flex justify-end">  
            <DropDownSettingComponents settings={s('settings')} 
                                                   language={s('language')}
                                                   en={s('en')}
                                                   cz={s('cz')}
                                                   dark={s('dark')}
                                                   light={s('light')}
                                                   themeText={s('theme')}
                                                   /> 
     </nav>
     <div className="flex flex-col items-center justify-center h-[75vh]">

      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">{t('title')}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-6 text-justify">
      {t('welcome1')} <span className="font-bold text-blue-500 ">Aleš</span>,{t('welcome2')}
</p>
<Button className="px-6 py-3 text-lg font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600">
<Link href="/dashboard">{t('ViewPortfolio')}</Link>

</Button>
    </div>
    </div>
  );
}

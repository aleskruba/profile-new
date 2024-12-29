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
    description: 'Ales Kruba -My perosnal portfolio',
  };
}

export default async function Home() {
  const t = await getTranslations('HomePage');
  const s = await getTranslations('Settings');



  return (
<div className="flex flex-col min-h-screen 
  dark:bg-gradient-to-b dark:from-gray-800  dark:to-gray-900 
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
     <div className="flex flex-col items-start justify-center h-auto md:min-h-[75vh] pt-10 md:pt-0  md:mx-28">
  <h1 className="text-2xl md:text-4xl text-center font-extrabold text-gray-800 dark:text-gray-200 mb-3 md:md-6">
    {t('title')}
  </h1>
  
  <p className="text-base md:text-lg pt-3 md:pt-2 text-gray-600 dark:text-gray-300 mb-3 md:md-6 text-justify ">
    {t('welcome1')} <span className="font-bold text-blue-700 dark:text-blue-300">Aleš Kruba</span> {t('welcome2')}
  </p>

  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3 md:md-6 text-justify">
    {t('mainText1')} 
    <span className="font-bold text-blue-700 dark:text-blue-300">{t('boldILive')}</span>

    {t('mainText2')} 
    <span className="font-bold text-blue-700 dark:text-blue-300">{t('boldLanguages')}</span>.
  </p>

  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3 md:md-6 text-justify">
    {t('mainText3')}
    <span className="font-bold text-blue-700 dark:text-blue-300">{t('boldTechnologies')}</span>
    {t('mainText4')}
    <span className="font-bold text-blue-700 dark:text-blue-300">{t('boldFrameworks')}</span>
    {t('mainText5')}
    <span className="font-bold text-blue-700 dark:text-blue-300">{t('boldBackend')}</span>.
  </p>

  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3 md:md-6 text-justify">
    {t('mainText6')}
  </p>
  </div>
  <div className="flex justify-center md:pt-12 pt-6 ">
  <Button className="px-6 py-3 text-base md:text-lg font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out">
    <Link href="/dashboard">{t('ViewPortfolio')}</Link>
  </Button>
  </div>

    </div>
  );
}

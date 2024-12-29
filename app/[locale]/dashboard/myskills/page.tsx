import {  getTranslations } from 'next-intl/server';

export default async function DashboardRoute() {

    const t = await getTranslations('MySkills');

    return (
<div className="text-left px-0 md:px-6 py-0 md:py-8 max-w-6xl mx-auto">
<h1 className='
  text-center pt-4 pb-4 text-base md:text-xl 
  font-semibold 
  bg-gradient-to-r
  from-black via-blue-800 to-black
  text-transparent 
  bg-clip-text
  dark:from-gray-300 dark:via-blue-500 dark:to-gray-300
 border-b-2 dark:border-gray-200 border-gray-800
 mt-4
'
>{t('el44')}
    
  </h1>
<h1 className="text-xl font-semibold mt-4 mb-6 dark:text-blue-300 text-blue-800">{t('el1')}</h1>

<ul className="space-y-4">
  <li className="text-base font-medium">
  <span className='font-bold '>JavaScript / TypeScript</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el2')}</li>
      <li>{t('el3')}</li>
      <li>{t('el4')}</li>
      <li>{t('el5')}</li>
      <li>{t('el6')}</li>
    </ul>
  </li>
  <li className="text-base font-medium">
     <span className='font-bold '>React js</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el8')}</li>
      <li>{t('el9')}</li>
      <li>{t('el10')}</li>
      <li>{t('el20')}</li>
      <li>{t('el11')}</li>
      <li>{t('el12')}</li>
      <li>{t('el13')}</li>
    </ul>
  </li> 
  <li className="text-base font-medium">
     <span className='font-bold'>Next js</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el14')}</li>
      <li>{t('el16')}</li>
      <li>{t('el17')}</li>
      <li>{t('el18')}</li>
    </ul>
  </li>
</ul>

<p className="mt-6 text-sm">
  {t('el43')}
</p>
<p className="mt-6 text-sm">
  {t('el19')}
</p>

<p className="mt-6 text-sm">
  {t('el21')}
</p>


<h1 className="text-xl font-semibold mb-6 pt-8 dark:text-blue-300 text-blue-800">{t('el22')}</h1>


<ul className="space-y-4">
  <li className="text-base font-medium">
    <span className="font-bold">Express</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el23')}</li>
      <li>{t('el24')}</li>
      <li>{t('el25')}</li>
      <li>{t('el26')}</li>
      <li>{t('el27')}</li>
    </ul>
  </li>
  <li className="text-base font-medium">
    <span className="font-bold">{t('el32')}</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el28')}</li>
      <li>{t('el29')}</li>
      <li>{t('el30')}</li>
      <li>{t('el31')}</li>
    </ul>
  </li>
</ul>

<h1 className="text-xl font-semibold mb-6 pt-8 dark:text-blue-300 text-blue-800">{t('el33')}</h1>

<ul className="space-y-4">

  <li className="text-base font-medium">
    <span className='font-bold'>Cloudinary</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el34')}</li>
    </ul>
  </li>
  

  <li className="text-base font-medium">
    <span className='font-bold'>GitHub</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el35')}</li>
    </ul>
  </li>
  

  <li className="text-base font-medium">
    <span className='font-bold'>Docker</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el36')} </li>
    </ul>
  </li>

  </ul>


  <h1 className="text-xl font-semibold mb-6 pt-8 dark:text-blue-300 text-blue-800">{t('el37')}</h1>
  <ul className="space-y-4">
  <li className="text-base font-medium">
    <span className='font-bold'>PHP</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el38')}</li>
      <li>{t('el39')}</li>
    </ul>
  </li>
  
  <li className="text-base font-medium">
    <span className='font-bold'>Python (Flask & Django)</span>
    <ul className="list-disc text-sm pl-6 space-y-2">
      <li>{t('el40')}</li>
      <li>{t('el41')}</li>
      <li>{t('el42')}</li>
    </ul>
  </li>
</ul>

</div>

    )
  }
  
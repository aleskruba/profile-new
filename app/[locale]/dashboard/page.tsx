
import {  getTranslations } from 'next-intl/server';

export default async function DashboardRoute() {

  const t = await getTranslations('AboutMe');

  return (
  
  <div className="text-left px-0 md:px-6 py-0 md:py-8 max-w-6xl mx-auto ">

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

    <p className='pt-4 text-left'>
{t('ProfessionalExperience')}
</p>
<p className='pt-8 text-left'>
{t('ProgrammingJourney')}
</p>
<p className='pt-8 text-left'>
{t('CareerTransition')}
</p> 
<p className='pt-8 text-left'>
{t('CareerGoal')}
</p>
  </div>
  

  )
}

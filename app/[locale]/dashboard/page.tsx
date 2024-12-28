
import { getMessages, getTranslations } from 'next-intl/server';

export default async function DashboardRoute() {

  const t = await getTranslations('AboutMe');

  return (
  
  <div className="text-left px-6 py-8 max-w-6xl mx-auto ">
    <p className='pt-4 text-justify'>
{t('ProfessionalExperience')}
</p>
<p className='pt-8 text-justify'>
{t('ProgrammingJourney')}
</p>
<p className='pt-8 text-justify'>
{t('CareerTransition')}
</p> 
<p className='pt-8 text-justify'>
{t('CareerGoal')}
</p>
  </div>
  

  )
}

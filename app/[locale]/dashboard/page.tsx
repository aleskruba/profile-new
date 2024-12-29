
import {  getTranslations } from 'next-intl/server';
import OfferComponent from '../components/OfferComponent';

export default async function DashboardRoute() {

  const t = await getTranslations('AboutMe');

  return (
  
  <div className="text-left px-0 md:px-6  max-w-6xl mx-auto ">
    <OfferComponent text={t('el44')}/>


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

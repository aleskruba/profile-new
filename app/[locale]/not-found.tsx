import {useTranslations} from 'next-intl';
import { getTranslations } from 'next-intl/server';
export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');


  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="text-center">
        <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPV4Ik79TtubjJ0tQ5TfrLC4CVkeWX-MgdYw&s" 
            alt="404 Not Found"
            className="mx-auto w-80 h-60 object-cover rounded-lg shadow-lg"
        />
        <h1 className="mt-8 text-4xl font-bold text-gray-800">{t('title')}</h1>
        <p className="mt-4 text-gray-600">{t('text')}</p>
        <a 
            href="/" 
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-md shadow-md hover:bg-blue-700"
        >
           {t('return')}
        </a>
    </div>
</div>
  )
}
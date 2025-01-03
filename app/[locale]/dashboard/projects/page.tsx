import Link from "next/link";
import { Github, ExternalLink,ArrowBigRight } from 'lucide-react';
import {  getTranslations } from 'next-intl/server';

import ProjectCards from "../../components/ProjectCards";

export default async function SkillsRoute() {

  const t = await getTranslations('MyProjects');

    return (

        <>
        <div className="text-left">
          <div className="max-w-6xl mx-auto ">

    <p className="mb-6 font-bold text-lg text-center">
 {t('el1')}
    </p>
    
    <section className="mb-8">
      <h2 className=" font-semibold mb-2">TravelTips</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li> {t('el2')}</li>
        <li>{t('el3')}
          <ul className="list-disc ml-6 space-y-1">
            <li>{t('el4')}</li>
            <li>{t('el5')}</li>
          </ul>
        </li>
        <li>{t('el6')}</li>
      </ul>
    </section>
    
    <section className="mb-8">
      <h2 className="font-semibold mb-2">{t('el7')}</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>{t('el8')}</li>
        <li>{t('el3')}
          <ul className="list-disc ml-6 space-y-1">
            <li>{t('el9')}</li>
            <li>{t('el10')}</li>
            <li>{t('el11')}</li>
            <li>{t('el12')}</li>
          </ul>
        </li>
      </ul>
    </section>
    
    <section>
      <h2 className="font-semibold mb-2">{t('el13')}</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>{t('el14')}
          <ul className="list-disc ml-6 space-y-1">
            <li>{t('el15')}</li>
            <li>{t('el16')}</li>
          </ul>
        </li>
        <li>{t('el17')}
          <ul className="list-disc ml-6 space-y-1">
            <li>{t('el18')}</li>
          </ul>
        </li>
      </ul>
    </section>

    <div className="border-t-2 mt-4 dark:border-gray-300 border-gray-700">
        <p className="text-xl font-bold mb-4 mt-6">{t('el19')}</p>
        <h1 className=" font-bold mb-3 underline">{t('el20')}</h1>
        
        <div className="flex items-center relative pb-2 "> 
        <div className="text-blue-800 dark:text-blue-200 absolute top-2 left-0 animate-ping">
          <ArrowBigRight  />
        </div>
        <div className="ml-8 flex items-center  pt-2 gap-2 dark:text-green-700 dark:hover:dark:text-gray-900 hover:text-green-600 transition-colors duration-300 bg-green-200 px-4 py-1">
          <ExternalLink className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300transition-colors duration-300 bg-gray-300" />
          <Link href="https://travelapp-itpa.onrender.com" passHref target="_blank" className="text-base font-medium">Visit the app
  
          </Link>
        </div>
        </div>

        <div className="pl-4  border-b-2  dark:border-gray-300 border-gray-700">
            
            <p className="text-md font-semibold mb-2">Technology Stack:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Frontend: React.js</li>
                <li>Backend: Express.js</li>
                <li>Socket: Real-Time Communication: Socket.io</li>
            </ul>

            <h2 className="text-lg font-semibold mb-2">{t('el24')}</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Session-Based Authentication using Redis</li>
                <li>Prisma ORM for server-database interaction</li>
                <li>{t('el23')}</li>
            </ul>

            <h2 className="text-lg font-semibold mb-2">{t('el23')}</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Context API</li>    
                <li>Optimistic Updates implemented with TanStack Query</li>
            </ul>

            <h2 className="text-lg font-semibold mb-2">Real-Time Communication:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>{t('el22')}</li>
            </ul>

            <div className="flex flex-col gap-2 pt-2">
            <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/aleskruba/travelapp"  target="_blank"  className="text-base font-medium">
        Frontend Code on GitHub
        </Link>
        
      </div>
      <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/aleskruba/travelapp-server"  target="_blank"  className="text-base font-medium">
        Backend Server on GitHub
        </Link>
        
      </div>
      <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/aleskruba/travelappsocket.git"  target="_blank"  className="text-base font-medium">
        Socket Io Server on GitHub
        </Link>
        
      </div>
  
    </div>




    <span className="text-xs italic font-bold">{t('el21')} </span>


            </div>


            <h1 className=" font-bold mb-3 mt-10 underline">{t('el26')}</h1>
            <div className="pl-4 border-b-2  dark:border-gray-300 border-gray-700 pb-6">
    <p className="text-md font-semibold mb-2">Technology Stack:</p>
    <ul className="list-disc list-inside mb-4">
        <li>Frontend: React.js</li>
        <li>Backend: Express.js</li>
        <li>Socket: Real-Time Communication: Socket.io</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">{t('el24')}</h2>
    <ul className="list-disc list-inside mb-4">
        <li>Authentication: Token-Based Authentication using JWT</li>
        <li>SQL for server-side APIs</li>
        <li>{t('el27')}(One-Time Password)</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">{t('el23')}</h2>
    <ul className="list-disc list-inside mb-4">
        <li>State Management: Context API for global state management</li>
        <li>Optimistic Updates: Implemented using React's `useState` for smoother user experience</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">Real-Time Communication:</h2>
    <ul className="list-disc list-inside mb-4">
        <li>{t('el22')}</li>
    </ul>

 
            <div className="flex flex-col gap-2 pt-2">
            <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/aleskruba/travel.git"  target="_blank"  className="text-base font-medium">
        Frontend Code on GitHub
        </Link>
        
      </div>
      <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/aleskruba/travelBackend.git"  target="_blank"  className="text-base font-medium">
        Backend Server on GitHub
        </Link>
        
      </div>
      <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/aleskruba/travelSocket.git"  target="_blank"  className="text-base font-medium">
        Socket Io Server on GitHub
        </Link>
        
      </div>
  
    </div>


   
</div>
<h1 className="font-bold mb-3 mt-6 underline">{t('el28')}</h1>
<div className="pl-4 border-b-2  dark:border-gray-300 border-gray-700 pb-6">

    <p className="text-md font-semibold mb-2">Technology Stack:</p>
    <ul className="list-disc list-inside mb-4">
        <li>Frontend: Vanilla JS (without frameworks)</li>
        <li>Backend: PHP</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">{t('el24')}</h2>
    <ul className="list-disc list-inside mb-4">
        <li>Session Management: Using PHP sessions for authentication and user data storage</li>
        <li>SQL for Server-Side APIs</li>
        <li>{t('el27')}</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">{t('el25')}</h2>
    <ul className="list-disc list-inside mb-4">
        <li>Vanilla JS: DOM manipulation using native JavaScript selectors (no libraries or frameworks)</li>
    </ul>
    <div className="flex items-center w-44 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
    <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/aleskruba/travel-app-PHP.git"  target="_blank"  className="text-base font-medium">
       Code on GitHub
        </Link>
      </div>
</div>

        </div>
  </div>

  
  <p className="mb-6 font-bold text-lg text-center mt-4">
  {t('el29')}
    </p>


    
        </div>
        <ProjectCards/>
    
        </>
    )
  }
  
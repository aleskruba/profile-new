import Link from "next/link";
import { Github, ExternalLink } from 'lucide-react';
import ProjectCards from "../../components/ProjectCards";

export default async function SkillsRoute() {


    return (

        <>
        <div className="text-left">
          <div className="max-w-6xl mx-auto ">

    <p className="mb-6 font-bold text-lg text-center">
     During last year  I created an app called <span className="font-bold">TravelTips</span> to help travelers connect and share their experiences. It has two main parts:
    </p>
    
    <section className="mb-8">
      <h2 className=" font-semibold mb-2">TravelTips</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>A space where logged-in users can choose a country and leave real-time comments about it.</li>
        <li>Users can:
          <ul className="list-disc ml-6 space-y-1">
            <li>Reply to comments and give likes.</li>
            <li>Delete their own messages if they want.</li>
          </ul>
        </li>
        <li>People who aren’t logged in can only read the messages, but they can’t reply or like them.</li>
      </ul>
    </section>
    
    <section className="mb-8">
      <h2 className="font-semibold mb-2">TravelMates</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>A place where users can find travel buddies for their trips.</li>
        <li>Users can:
          <ul className="list-disc ml-6 space-y-1">
            <li>Create a Trip: Add details like destination, dates, and preferences.</li>
            <li>Comment and Reply: Engage in real-time discussions about trips.</li>
            <li>Manage Content: Update or delete their trips and messages anytime.</li>
            <li>Filter Options: Easily find trips based on specific criteria, such as destination, travel dates, or other preferences.</li>
          </ul>
        </li>
      </ul>
    </section>
    
    <section>
      <h2 className="font-semibold mb-2">Other Features</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Sign-In Options:
          <ul className="list-disc ml-6 space-y-1">
            <li>You can log in with email and password or use Google for faster access.</li>
            <li>There’s also a “forgot password” feature if needed.</li>
          </ul>
        </li>
        <li>User Profiles:
          <ul className="list-disc ml-6 space-y-1">
            <li>Users can update their profiles and upload a profile picture.</li>
          </ul>
        </li>
      </ul>
    </section>

    <div className="border-t-2 mt-4 dark:border-gray-300 border-gray-700">
        <p className="text-xl font-bold mb-4 mt-6">I created this app in three versions:</p>
        <h1 className=" font-bold mb-3 underline">Last version deployed on render.com</h1>
        <div className="pl-4  border-b-2  dark:border-gray-300 border-gray-700">
            
            <p className="text-md font-semibold mb-2">Technology Stack:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Frontend: React.js</li>
                <li>Backend: Express.js</li>
                <li>Socket Server: Socket.io</li>
            </ul>

            <h2 className="text-lg font-semibold mb-2">Backend Features:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Session-Based Authentication using Redis</li>
                <li>Prisma ORM for server-database interaction</li>
                <li>Forgotten Password functionality with password reset links</li>
            </ul>

            <h2 className="text-lg font-semibold mb-2">Frontend Features:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Context API</li>    
                <li>Optimistic Updates implemented with TanStack Query</li>
            </ul>

            <h2 className="text-lg font-semibold mb-2">Real-Time Communication:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Real-time messaging using Socket.io</li>
            </ul>

            <div className="flex flex-col gap-2 pt-2">
            <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/your-repository" passHref target="_blank"  className="text-base font-medium">
        Frontend Code on GitHub
        </Link>
        
      </div>
      <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/your-repository" passHref target="_blank"  className="text-base font-medium">
        Backend Code on GitHub
        </Link>
        
      </div>
      <div className="flex items-center w-64 pt-2 dark:text-green-700 dark:hover:dark:text-gray-900 hover:text-green-600 transition-colors duration-300 bg-green-200 px-2 py-1">
        <ExternalLink className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300transition-colors duration-300 bg-gray-300" />
        <Link href="https://yourwebsite.com" passHref target="_blank" className="text-base font-medium">HTML Link
 
        </Link>
      </div>
    </div>

    <span className="text-xs italic font-bold">Please note that since I am using the free version of Render for deployment, there may be a slight delay of around 20 seconds when starting the servers after running the app. This is because the free tier typically requires the servers to 'wake up' when they are accessed for the first time after a period of inactivity. </span>


            </div>


            <h1 className=" font-bold mb-3 mt-10 underline">Previous version</h1>
            <div className="pl-4 border-b-2  dark:border-gray-300 border-gray-700 pb-6">
    <p className="text-md font-semibold mb-2">Technology Stack:</p>
    <ul className="list-disc list-inside mb-4">
        <li>Frontend: React.js</li>
        <li>Backend: Express.js</li>
        <li>Real-Time Communication: Socket.io</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">Backend Features:</h2>
    <ul className="list-disc list-inside mb-4">
        <li>Authentication: Token-Based Authentication using JWT</li>
        <li>SQL for server-side APIs</li>
        <li>Forgot Password functionality with OTP (One-Time Password)</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">Frontend Features:</h2>
    <ul className="list-disc list-inside mb-4">
        <li>State Management: Context API for global state management</li>
        <li>Optimistic Updates: Implemented using React's `useState` for smoother user experience</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">Real-Time Communication:</h2>
    <ul className="list-disc list-inside mb-4">
        <li>Real-Time Messaging: Integrated real-time communication using Socket.io</li>
    </ul>

    <div className="flex flex-col gap-2 pt-2">
            <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/your-repository" passHref target="_blank"  className="text-base font-medium">
        Frontend Code on GitHub
        </Link>
        
      </div>
      <div className="flex  w-64 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/your-repository" passHref target="_blank"  className="text-base font-medium">
        Backend Code on GitHub
        </Link>
        
      </div>
          </div>

   
</div>
<h1 className="font-bold mb-3 mt-6 underline">First Version: Using PHP and Vanilla JS</h1>
<div className="pl-4 border-b-2  dark:border-gray-300 border-gray-700 pb-6">

    <p className="text-md font-semibold mb-2">Technology Stack:</p>
    <ul className="list-disc list-inside mb-4">
        <li>Frontend: Vanilla JS (without frameworks)</li>
        <li>Backend: PHP</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">Backend Features:</h2>
    <ul className="list-disc list-inside mb-4">
        <li>Session Management: Using PHP sessions for authentication and user data storage</li>
        <li>SQL for Server-Side APIs</li>
        <li>Forgot Password functionality with OTP (One-Time Password) for secure password recovery</li>
    </ul>

    <h2 className="text-lg font-semibold mb-2">Frontend Features:</h2>
    <ul className="list-disc list-inside mb-4">
        <li>Vanilla JS: DOM manipulation using native JavaScript selectors (no libraries or frameworks)</li>
    </ul>
    <div className="flex items-center w-44 space-x-2 dark:text-blue-700 dark:hover:dark:text-gray-900 hover:text-blue-600 transition-colors duration-300 bg-gray-200 px-2 py-1">
    <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 bg-gray-300 transition-colors duration-300" />
        <Link href="https://github.com/your-repository" passHref target="_blank"  className="text-base font-medium">
       Code on GitHub
        </Link>
      </div>
</div>

        </div>
  </div>

  
  <p className="mb-6 font-bold text-lg text-center mt-4">
Bellow you can find other project that i created in the past
    </p>


    
        </div>
        <ProjectCards/>
    
        </>
    )
  }
  
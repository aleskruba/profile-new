import Image from "next/image";
import Man from "@/public/man.jpg"
import Email from "@/public/emailwhite.png"
import Phone from "@/public/phonered.png"
import {  Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import Link from "next/link";
import UserForm from "../../components/UserForm";
import {  getTranslations } from 'next-intl/server';



export default async function DashboardRoute() {

    const t = await getTranslations('Contact');



  return (
    <div className="text-left px-0 md:px-6 max-w-6xl mx-auto">
 
      <div className="text-center mb-8">
        <h1 className="text-base text-justify  md:text-center md:text-xl font-thin   font-mono  pt-1 md:pt-0 pb-4  border-b-2 
    dark:border-gray-200 border-gray-800">
            {t('el1')}
                    </h1>
      </div>

   
      <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
        <div className="flex flex-col space-y-4 mb-8">


          
               <div className="flex items-center text-lg">
                <Image src={Man} alt="name" className="w-14 h-14 mr-2 rounded-full object-cover"  />
                <span className="font-bold text-2xl">Aleš Kruba</span>
                </div>
                         

            <div className="flex items-center">
            <Image src={Email} alt="email" className="w-6 h-6 mr-2" />
            <Link href="mailto:aleskruba@dokram.com" className="text-lg hover:text-blue-500">
              aleskruba@dokram.com
            </Link>
            </div>
            <div className="flex items-center">
            <Image src={Phone} alt="phone" className="w-6 h-6 mr-2" />
            <span className="text-lg">+420 728 949 062</span>
            </div>

            <div className="flex gap-4 pt-4 w-full border-t-2 dark:border-gray-200 border-gray-800">
                    <Link href="https://github.com/aleskruba"   target="_blank" >
                    <Github className="w-5 h-5 cursor-pointer" />
                    </Link>
                    <Link href="https://github.com/aleskruba"   target="_blank" >
                    <Linkedin className="w-5 h-5 cursor-pointer" />
                </Link>
                </div>
        </div>


        <div className="w-[100%] md:w-[70%] md:px-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-6 rounded-lg shadow-md">

  <h1 className="text-lg md:text-2xl font-bold text-blue-900 mb-4 text-center">
  {t('el3')} 🏡
  </h1>


  <p className="md:text-base text-xs text-blue-800 text-center mb-6">
  {t('el2')}😊
  </p>


  <div className="overflow-hidden rounded-lg shadow-md border border-blue-300">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26542.852359488792!2d16.565107720384307!3d49.19506020783753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712946e3443f6fb%3A0x400af0f661c9c70!2sBrno%2C%20Czech%20Republic!5e0!3m2!1sen!2scz!4v1696072828923!5m2!1sen!2scz"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</div>

      </div>


      <div className="bg-gray-100 darK:bg-gray-200 text-black p-6 rounded-lg shadow-md mt-10">
        <UserForm/>
      </div>
    </div>
  );
}

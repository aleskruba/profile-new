import {  getTranslations } from 'next-intl/server';
import OfferComponent from '../../components/OfferComponent';
import Image from "next/image";
import Backend from "@/public/cert-backend.png"
import Frontend from "@/public/cert-frontend.png"
import Link from 'next/link';
import CVComponent from '../../components/CVComponent';

export default async function CertificatesRoute() {

    const a = await getTranslations('AboutMe');
    const t = await getTranslations('Certificates');

    return (
        <div className="text-left px-0 md:px-6  max-w-6xl mx-auto">
            <OfferComponent text={a('el44')}/>
        <div className='mt-4 flex flex-col items-center justify-center'>

            <h1 className="text-center pb-4">{t('cert1')}</h1>

        <div className="flex flex-col xl:flex-row gap-4 md:gap-8">
      <Link href="https://coursera.org/share/9b89569b382c5880307c775af5ab931f"
            target="_blank" 
            className="w-72 h-64 md:w-96 md:h-72 relative">
        <Image
          src={Frontend}
          fill      
          alt="Frontend certificate"
          className="hover:scale-y-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </Link>

      <Link href="https://coursera.org/share/8ca14215a7cc8dd71df4bc0d8d8376dc"
             target="_blank" 
             className="w-72 h-64 md:w-96 md:h-72 relative" >
        <Image
          src={Backend}
          fill
          alt="Backend certificate"
          className="hover:scale-y-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  />
      </Link>

      
    </div>
   
        <div className='mt-6 md:mt-12 flex flex-col'>
    <h1 className="text-center font-bold pb-4" >{t('cv')}</h1>

    <h5 className="text-base text-center">{t('cv1')}</h5>
    </div>

        <CVComponent/>

        </div>
    

        </div>
    )
  }
  
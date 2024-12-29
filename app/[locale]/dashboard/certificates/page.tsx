import {  getTranslations } from 'next-intl/server';
import OfferComponent from '../../components/OfferComponent';
import Image from "next/image";
import Backend from "@/public/cert-backend.png"
import Frontend from "@/public/cert-frontend.png"
import Link from 'next/link';

export default async function CertificatesRoute() {

    const a = await getTranslations('AboutMe');

    return (
        <div className="text-left px-0 md:px-6  max-w-6xl mx-auto">
            <OfferComponent text={a('el44')}/>
        <div className='mt-4 flex flex-col items-center justify-center'>

        <div className="flex flex-col md:flex-row gap-2">
      <Link href="https://coursera.org/share/9b89569b382c5880307c775af5ab931f"
            target="_blank" 
            className="w-72 h-64 md:w-96 md:h-72 relative">
        <Image
          src={Frontend}
          fill      
          alt="Frontend certificate"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </Link>

      <Link href="https://coursera.org/share/8ca14215a7cc8dd71df4bc0d8d8376dc"
             target="_blank" 
             className="w-72 h-64 md:w-96 md:h-72 relative" >
        <Image
          src={Backend}
          fill
          alt="Backend certificate"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  />
      </Link>
    </div>


        </div>
    
        </div>
    )
  }
  
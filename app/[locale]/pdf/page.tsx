"use client"
import React, { useEffect, useState } from 'react'
import {  PDFViewer} from '@react-pdf/renderer';
import { MyCV } from '../components/ResumeEn';
import { MyCVCZ } from '../components/ResumeCz';
import { usePathname } from "next/navigation";

export default function MyResume() {

    const [isClient, setIsClient] = useState(false)
    const pathname = usePathname(); 
    const lang = pathname.split("/")[1];

    useEffect(() => {
      setIsClient(true)
    }, [])
    
    return (
        <div>
             { isClient ?
          <div className='w-full h-[750px]'>
            <PDFViewer width="100%" height="100%"> 
            {lang  === 'cz' ? <MyCVCZ/> : <MyCV/>}
            </PDFViewer> 
          </div>      : null}
        </div>
      )
}

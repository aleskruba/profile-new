"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Check } from 'lucide-react';
import { usePathname } from "next/navigation";
import Pdf from "@/public/cvsmall.png"
import Image from "next/image";

export default function CVComponent() {
  const [note, setNote] = useState<string>("");
  const [allowSubmit,setAllowSubmit] = useState<boolean>(false);
      const pathname = usePathname(); 
      const lang = pathname.split("/")[1];

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
    setAllowSubmit(false)
    if (allowSubmit && event.target.value.length < 1 ) {
      setAllowSubmit(false)
      setNote('')
    }
    };



  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAllowSubmit(true)
  
    console.log('submitted')
  };

  const openTestPage = () => {
    localStorage.setItem("note", note); // Save the note in local storage
    window.open(`/${lang}/pdf`, "_blank", "noopener,noreferrer"); // Construct the URL with the language
    setAllowSubmit(false)
    setNote('')
  };

  return (
    <div className="p-6 flex justify-center">
      <div>
        <form onSubmit={onSubmitHandler}>
           <div className="flex items-center justify-center gap-2 mb-2 ">
          
    
            <div className="flex flex-col">
            <input
              id="note"
              type="text"
              name="note"
              value={note}
              onChange={onChangeHandler}
              maxLength={400}
              className="  w-[60vw] p-2 border-b-2 dark:bg-gray-600 dark:text-white border-gray-300 focus:border-blue-500 focus:outline-none placeholder-gray-400 text-gray-700"
              placeholder={lang === 'en' ? `max 400 characters` : `max 400 znaků`}
            />

              {note.length > 399 &&   
             <span className="text-xl text-red-800 dark:text-red-200 ">  {lang === 'en' ? `max 400 characters !` : `max 400 znaků !`}          </span>
              }
             </div>

             <div className="mt-10">
                
             </div>
      {note.length < 400 ? 
            <button
              type="submit"
              className={`flex items-center justify-center w-10 h-10 rounded-full ${note.length > 0 ? allowSubmit ? 'bg-green-700 text-gray-100 cursor-none' : 'bg-yellow-300 cursor-pointer text-gray-100' : 'bg-gray-100 cursor-none text-gray-300 '}`}
             >
              <Check /> {/* Replace with your Check icon */}
            </button>
        : null }

            </div>
 
            {note.length > 0 && !allowSubmit ?
            <span className="text-base text-red-800 dark:text-red-200 ">
                {lang === 'en' ?
                    'You have to submit the note or leave it empty in order to open cv' 
                    :
                    'Chcete-li otevřít životopis, musíte poznámku uložit nebo ji nechat prázdnou'}
            </span>
            : null }
    </form>

 
           <div className="mt-8 flex justify-center w-full bg-red">
      
           <button
        className={`${allowSubmit || note.length < 1 ? 'cursor-pointer opacity-100' : 'cursor-none opacity-10'}`}
        onClick={openTestPage}
        >
        <Image src={Pdf} alt='Pdf' width={300} height={450}/>

        </button>         

            </div>          

   
   


      </div>
    </div>
  );
}

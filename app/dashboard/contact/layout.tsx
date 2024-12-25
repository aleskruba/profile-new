import { ReactNode } from "react";

export default async function ContactLayout({children}:{children : ReactNode}){
  return (
    <div > 
         
         <main className="bg-yellow-500 flex ">
            {children}
    </main>
</div>
  )
}



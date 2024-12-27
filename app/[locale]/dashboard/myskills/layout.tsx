import { ReactNode } from "react";

export default async function SkillsLayout({children}:{children : ReactNode}){
  return (
    <div > 
         
         <main className="bg-red-500 flex ">
            {children}
    </main>
</div>
  )
}


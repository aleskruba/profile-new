import { ReactNode } from "react";

export default async function MySkillsLayout({children}:{children : ReactNode}){
  return (
    <div > 
         
         <main className="bg-green-500 flex ">
            {children}
    </main>
</div>
  )
}


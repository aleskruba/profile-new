import React from 'react'

interface OfferProps {
    text:string
}

function OfferComponent({text}:OfferProps) {
  return (
    <h1 className='
    text-center pt-1 md:pt-0 pb-4 text-base md:text-xl 
    font-mono
     border-b-2 
     dark:border-gray-200 border-gray-800
   mt-4
    
  '
  >{text}
      
    </h1>
  )
}

export default OfferComponent
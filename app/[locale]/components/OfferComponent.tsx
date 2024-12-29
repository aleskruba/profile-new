import React from 'react'

interface OfferProps {
    text:string
}

function OfferComponent({text}:OfferProps) {
  return (
    <h1 className='
    text-center pt-1 md:pt-4 pb-4 text-base md:text-xl 
    font-semibold 
    bg-gradient-to-r
    from-black via-blue-800 to-black
    text-transparent 
    bg-clip-text
    dark:from-gray-300 dark:via-blue-500 dark:to-gray-300
   border-b-2 dark:border-gray-200 border-gray-800
   mt-4
  '
  >{text}
      
    </h1>
  )
}

export default OfferComponent
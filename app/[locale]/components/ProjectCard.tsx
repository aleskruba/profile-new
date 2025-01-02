"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    image: string;
    title: string;
    htmlContent: string; // Updated to accept HTML content
    url: string;
    github: string;
}

const ProjectCard = ({ image, title, htmlContent, url, github }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip(event: React.MouseEvent<HTMLDivElement>) {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
            event.stopPropagation(); // Prevents the click event from propagating to parent elements
        }
    }

    return (
        <div
            onClick={handleFlip}
            className='w-[330px] md:w-[450px] lg:w-[600px] h-[400px] md:h-[320px] lg:h-[340px] rounded-md cursor-pointer relative mr-4 md:mr-0 mt-6 md:mt-0'
        >
            <motion.div
                className='flip-card-inner w-full h-full'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: 'normal' }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div
       style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top left', // This will make the image start from the top-left corner
    }}
                    className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'
                >
                    <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
                    <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                        Description &gt;
                    </div>
                </div>
                <div
                    style={{ backgroundColor: 'black' }}
                    className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'
                >
                    <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]' />
                    <div className='text-base text-violet-400'>{title}</div>
                         <div className='flex flex-col gap-4 py-3 z-[30] text-xs' dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
            </motion.div>
            <div className='absolute bottom-2 right-3'>
                <div className='flex justify-center items-center bottom-10 right-2 z-50 bg-gray-300 hover:text-white hover:bg-gray-800 text-lg w-[150px] h-[25px]'>
                    <a target="_blank" href={github} onClick={(e) => e.stopPropagation()}>
                        Code on Github
                    </a>
                </div>
                <div className='flex justify-center items-center mt-2 bottom-2 right-2 z-50 bg-gray-300 hover:text-white hover:bg-violet-800 text-lg w-[150px] h-[25px]'>
                    <a target="_blank" href={url} onClick={(e) => e.stopPropagation()}>
                        Visit the page
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
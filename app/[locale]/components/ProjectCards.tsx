"use client"
import ProjectCard from './ProjectCard';
import { Projects } from '@/app/constants';
import React from 'react';

function ProjectCards() {
    return (
<div className='pt-4 text-black h-full flex flex-wrap gap-4 overflow-hidden items-center justify-center bg-center bg-cover bg-gradient-to-t from-black to-very-dark-purple'>
        {/* max-h-[80vh] sets the maximum height of the container */}
        {/* overflow-y-auto enables vertical scrolling when necessary */}
        {Projects.map((project, index) => (
            <ProjectCard
                key={index}
                title={project.title}
                htmlContent={project.text} // Pass the HTML content
                image={project.src}
                github={project.github}
                url={project.url}
            />
        ))}
</div>


    );
}

export default ProjectCards;

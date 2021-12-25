import React from 'react'
import './FeaturedContainer.css';
import {ReactComponent as Link} from '../assets/link.svg'

export default function FeaturedContainer(project) {
    return (
        <div className='featuredProjectContainer'>
            <div className='projectContent'>
                <p className='projectTitle'>{project.title}</p>
                <p>{project.date}</p>
                <p>{project.subject}</p>
                <p className='projectDescription'>{project.description}</p>
                <p className='projectTools'>{project.tools}</p>
            </div>
            <div className='projectEtc'>
                <div className='projectImg'>
                    <img src={project.src} alt='project' />
                </div>
                <p className='projectInstructions'>{project.instructions}</p>
                <div className='projectLinks'>
                    {project.link && (
                        <a href={project.link}
                        target="_blank"
                        rel="noreferrer">
                            <Link />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

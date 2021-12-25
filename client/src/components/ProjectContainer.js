import React from 'react'
import './ProjectContainer.css';
import {ReactComponent as Link} from '../assets/link.svg'

export default function ProjectContainer(project) {
    return (
        <div className='projectContainer'>
            <p className='projectTitle'>{project.title}</p>
            <p className='projectDescription'>{project.description}</p>
            <p className='projectTools'>{project.tools}</p>
            {/* <div className='projectLinks'>
                {project.link && (
                    <a href={project.link}
                    target="_blank"
                    rel="noreferrer">
                        <Link />
                    </a>
                )}
            </div> */}
        </div>
    )
}

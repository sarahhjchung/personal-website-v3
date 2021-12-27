import React from 'react'
import './ProjectContainer.css';

export default function ProjectContainer(project) {
    return (
        <a href={project.link} target="_blank"
        rel="noreferrer" className='projectContainer'>
            {/* <div className='projectContent'> */}
                <p className='projectTitle'>{project.title}</p>
                <p className='projectDescription'>{project.description}</p>
                <p className='projectTools'>{project.tools}</p>
            {/* </div> */}
        </a>
        
    )
}

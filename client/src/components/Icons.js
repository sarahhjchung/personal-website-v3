import React from 'react'
import './Icon.css';

export default function Icons() {
    return (
        <div className='header'>
            <hr />
            <a id='logo' href='/'>
                Sarah Chung
            </a>
            <div className='headerRight'>
                <a href='/about' className={active.active === 'about' ? 'active' : ''}>
                    About Me
                </a>
                <a href='/projects' className={active.active === 'projects' ? 'active' : ''}>
                    My Projects
                </a>
                <a href='/work' className={active.active === 'work' ? 'active' : ''}>
                    Work Experience
                </a>
            </div>
            <hr />
        </div>
    )
}
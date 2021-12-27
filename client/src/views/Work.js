import React from 'react'
import Header from '../components/Header';
import Icons from '../components/Icons';

import './Work.css'

import workImg from '../assets/work.png'

export default function Work() {
    return (
        <div>
            <Header active='work'/>
            <h1 className='workHeader'>Work <br/>Experience</h1>
            <div className='workContainer'>
                <div class="progressBar">
                    <div class="step">
                        <div class="label">
                            <a href='https://www.techintern.io/' target="_blank" rel="noreferrer">
                                Techintern
                            </a>
                            <p className='position'>Fullstack Developer Co-op</p>
                            <p>May 2021 - Sept 2021</p>
                        </div>
                        <div class="stepCounter"></div>
                    </div>
                    <div class="step">
                        <div class="label">
                            <a href='http://vincilabs.net/' target="_blank" rel="noreferrer">
                                Vincilabs
                            </a>
                            <p className='position'>Web Developer</p>
                            <p>Oct 2021 - Current</p>
                        </div>
                        <div class="stepCounter"></div>
                    </div>
                    <div class="step">
                        <div class="lastLabel">
                            <p>Looking for PEY opportunities<br /> <br /></p>
                        </div>
                        <div class="stepCounter"></div>
                    </div>
                </div>
                <img src={workImg} alt='girl on vespa' className='workImg'/>
            </div>
            <Icons />
        </div>
    )
}
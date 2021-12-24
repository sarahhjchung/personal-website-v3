import React from 'react'
import Header from '../components/Header';
import image from '../assets/home1.png'
import './Home.css';
import Icons from '../components/Icons';

export default function Home() {
    return (
        <div>
            <Header />
            <div className='centerContainer'>
                <img src={image} alt='girl on rocket' id='homeImage'/>
                <div className='homeContainer'>
                    <h1>Hi! Welcome to <br/> my portfolio</h1>
                    <p>I am currently a 3rd year Computer Science student at 
                        the University of Toronto. I am passionate about web 
                        development, game design, UX/UI, and all creative 
                        things you can find in this large field!</p>
                </div>
            </div>
            <Icons />
        </div>
    )
}
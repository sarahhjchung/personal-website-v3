import React from 'react'
import Header from '../components/Header';
import Icons from '../components/Icons';
import './About.css';
import image from '../assets/about.png'

export default function About() {
    return (
        <div>
            <Header active='about'/>
            <div className='aboutContainer'>
                <h1>About <br />me</h1>

            </div>
            <img id='aboutImage' src={image} alt='phone'/>
            <Icons />
        </div>
    )
}
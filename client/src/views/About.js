import React from 'react'
import Header from '../components/Header';
import Icons from '../components/Icons';
import './About.css';

import image from '../assets/about.png'
import {ReactComponent as Hair} from '../assets/hair.svg'
import {ReactComponent as Game} from '../assets/game.svg'
import {ReactComponent as Photo} from '../assets/photo.svg'
import {ReactComponent as Movie} from '../assets/movie.svg'
import {ReactComponent as Music} from '../assets/music.svg'

export default function About() {
    return (
        <div>
            <Header active='about'/>
            <div className='aboutContent'>
                <h1 className='aboutHeader'>About <br />me</h1>
                <div className='glassContainer'>
                    <h3>Fun Facts</h3>
                    <table>
                        <tr>
                            <td><Hair /></td>
                            <td>I've had 6 different hair colours in my life so far.</td>
                        </tr>
                        <tr>
                            <td><Game /></td>
                            <td>My current favourite video game is Stardew Valley.</td>
                        </tr>
                        <tr>
                            <td><Movie /></td>
                            <td>I love animated shorts (favourites include One Small 
                        Step, Empty Space, and Hair Love).</td>
                        </tr>
                        <tr>
                            <td><Photo /></td>
                            <td>Sky photos are my favourite and you'll find a lot of 
                        them on my <a href="https://vsco.co/sarah-chung/gallery" target="_blank"rel="noreferrer">VSCO</a></td>
                        </tr>
                        <tr>
                            <td><Music /></td>
                            <td>In summer 2020, I created a{' '} 
                        <a href="https://youtu.be/ybuqMkGXuDY"
                        target="_blank"
                        rel="noreferrer"
                        >{' '}
                        lofi song
                        </a> during lockdown.</td>
                        </tr>
                    </table>
                </div>
                <div className='glassContainer'>
                    <h3>Courses</h3>
                    <table>
                        <tr>
                            <td>CSC343</td>
                            <td>Intro to Databases</td>
                        </tr>
                        <tr>
                            <td>CSC311</td>
                            <td>Intro to Machine Learning</td>
                        </tr>
                        <tr>
                            <td>CSC369</td>
                            <td>Operating Systems</td>
                        </tr>
                        <tr>
                            <td>CSC309</td>
                            <td>Programming on the Web</td>
                        </tr>
                        <tr>
                            <td>MAT235</td>
                            <td>Multivariable Calculus</td>
                        </tr>
                        <tr>
                            <td>CSC258</td>
                            <td>Computer Organization</td>
                        </tr>
                        <tr>
                            <td>CSC263</td>
                            <td>Data Structures and Analysis</td>
                        </tr>
                        <tr>
                            <td>CSC209</td>
                            <td>Software Tools and Systems Programming</td>
                        </tr>
                        <tr>
                            <td>STA247</td>
                            <td>Probability with Computer Apppcations</td>
                        </tr>
                        <tr>
                            <td>CSC236</td>
                            <td>Introduction to the Theory of Computation</td>
                        </tr>
                        <tr>
                            <td>CSC207</td>
                            <td>Software Design</td>
                        </tr>
                        <tr>
                            <td>MAT223</td>
                            <td>Linear Algebra I</td>
                        </tr>
                    </table>
                </div>
                <div className='glassContainer'>
                    <h3>Electives I Enjoyed</h3>
                    <table>
                        <tr>
                            <td>MAT198</td>
                            <td>Cryptology: The Mathematics of Secrecy and Security</td>
                        </tr>
                        <tr>
                            <td>WGS160</td>
                            <td>Intro to Women and Gender Studies</td>
                        </tr>
                        <tr>
                            <td>LIN200</td>
                            <td>Intro to Languages</td>
                        </tr>
                        <tr>
                            <td>PSY100</td>
                            <td>Intro to Psychology</td>
                        </tr>
                        <tr>
                            <td>ENG235</td>
                            <td>The Graphic Novel</td>
                        </tr>
                        <tr>
                            <td>SOC100</td>
                            <td>Sociological Perspectives</td>
                        </tr>
                        <tr>
                            <td>SOC150</td>
                            <td>Sociological Inquiries</td>
                        </tr>
                    </table>
                </div>
                <div className='glassContainer'>
                    <h3>Say hello!</h3>
                    <p>
                        Feel free to click on the icons on the bottom 
                        right to check out my resume or any of my socials.
                    </p>
                </div>
            </div>
            <img id='aboutImage' src={image} alt='phone'/>
            <Icons />
        </div>
    )
}
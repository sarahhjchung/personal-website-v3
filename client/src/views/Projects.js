import React from 'react'
import Header from '../components/Header';
import Icons from '../components/Icons';
import FeaturedContainer from '../components/FeaturedContainer';
import ProjectContainer from '../components/ProjectContainer';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Projects.css'

import outhouse from '../assets/outhouse.png'
import chatty from '../assets/chatty.png'
import dataproject from '../assets/dataproject.png'
import datadiscussion from '../assets/dataproject.pdf'

export default function Projects() {
    return (
        <div>
            <Header active='projects'/>
            <h1 className='projectsHeader'>My <br/>Featured <br/>Projects</h1>
            <div className='projectsPage'>
                <Carousel className='carousel'>
                    <FeaturedContainer 
                    title='Outhouse' 
                    description='Outhouse is a webapp that allows the UofT community to 
                    find the best washrooms on campus. Users can find washrooms, leave 
                    reviews for washrooms they’ve visited, and view the latest reports 
                    that other users have shared.'
                    instructions='Click on the link to visit the webapp and log
                    in with username: user and password: user OR username: admin and 
                    password: admin.' 
                    date='Oct 2021-Dec 2021' 
                    subject='CSC309 Group Project' 
                    tools='React JS - Express JS - MongoDB - Heroku'
                    src={outhouse}
                    link='https://outhouse-uoft.herokuapp.com'
                    />
                    <FeaturedContainer 
                    title='Chatty.js'
                    description='Chatty.js is a JS library to let you quickly set up a 
                    simple chatbox for your web app.'
                    instructions='Click on the link to learn more about the library.'
                    date='Oct 2021-Dec 2021'
                    subject='CSC309 Individual Project'
                    tools='Javascript - HTML - CSS - Express JS - Heroku'
                    src={chatty}
                    link='https://chattyjs.herokuapp.com/index.html'
                    />
                    <FeaturedContainer 
                    title='Video Game Data Project'
                    description='I completed a research project on video game sales to
                    learn how to create a good schema from an online dataset, thoroughly
                    go through a data cleaning process, analyze data using SQL queries, 
                    and come to meaningful conclusions using the query results.'
                    instructions='You can read the final report here.'
                    date='Oct 2021-Dec 2021'
                    subject='CSC343 Group Project'
                    tools='PostGreSQL'
                    src={dataproject}
                    link={datadiscussion}
                    />
                </Carousel>
                <h1 className='allProjectsHeader'>All Projects</h1>
                <div className='allProjectsContainer'>
                    <a href='https://google.com'>
                        <ProjectContainer 
                        title='Lofi Adventures'
                        description='A platform video game with original artwork 
                        and music.'
                        tools='Python - Pygame'
                        />
                    </a>
                    
                    <ProjectContainer 
                    title='LifeOS'
                    description='A productivity chrome extension made for 
                    nwHacks 2021.'
                    tools='Mithril JS - HTML - CSS'
                    />
                    <ProjectContainer 
                    title='Conference Manager'
                    description='An app to help organize and manage conferences 
                    made for a software design course.'
                    tools='Java'
                    />
                    <ProjectContainer 
                    title='Fitapp'
                    description='A fitness webapp for users to post health blogs 
                    and view posts others have uploaded.'
                    tools='React JS - PHP'
                    />
                    <ProjectContainer title='Personal Website V2'/>
                    <ProjectContainer title='Blocky'/>
                    <ProjectContainer title='Chxrrypie'/>
                    <ProjectContainer title='Spirit Issue'/>
                    <ProjectContainer title='Personal Website V1'/>
                </div>
            </div>
            <Icons />
        </div>
    )
};
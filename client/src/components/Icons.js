import React from 'react'
import {ReactComponent as Email} from '../assets/email.svg'
import {ReactComponent as Github} from '../assets/github.svg'
import {ReactComponent as Linkedin} from '../assets/linkedin.svg'
import {ReactComponent as Resume} from '../assets/resume.svg'

import './Icons.css';

import resume from "../assets/resume.pdf";

import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export default function Icons() {
    return (
        <div className='icon'>
            <Tooltip title="Email me!" position="left" trigger="mouseenter">
                <a href="mailto: sarahc0304@gmail.com">
                    <Email />
                </a>
            </Tooltip>
            <Tooltip title="My Resume" position="left" trigger="mouseenter">
                <a href={resume} target="_blank" rel="noreferrer">
                    <Resume />
                </a>
            </Tooltip>
            <Tooltip title="My Github" position="left" trigger="mouseenter">
                <a
                href="https://github.com/sarahhjchung"
                target="_blank"
                rel="noreferrer"
                >
                    <Github />
                </a>
            </Tooltip>
            <Tooltip title="My LinkedIn" position="left" trigger="mouseenter">
                <a
                href="https://www.linkedin.com/in/sarah-chung-59a923202/"
                target="_blank"
                rel="noreferrer"
                >
                    <Linkedin />
                </a>
            </Tooltip>
        </div>
    )
}
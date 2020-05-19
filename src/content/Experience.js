import React from 'react';

import '../styles/Experience.css';
import COLORS from '../styles/colors.js'

function Experience() {
    return (
        <div id="experienceList" style={{ backgroundColor: COLORS.BEIGE }}>
            <div id="searchBar"></div>
            <div className="experiences">
                <div className="experience">
                    <div className="header">
                        <div className="images">
                            <img src={require('../images/google.png')}></img>
                            <img src={require('../images/firebase.png')}></img>
                        </div>
                        {TitleAndDate({
                            title: "Software Engineering Intern - Google",
                            date: "Summer 2020"
                        })}
                    </div>
                    <div className="content">
                        <div className="description">
                            &nbsp;&nbsp;This summer, I will be working as a software engineer on Google's Firebase Extensions team. More information coming soon!
                        </div>
                    </div>
                </div >
                <div className="experience">
                    < div className="header" >
                        <div className="images">
                            <img src={require('../images/google.png')}></img>
                            <img src={require('../images/meet.png')}></img>
                        </div>
                        {TitleAndDate({
                            title: "Software Engineering Intern - Google",
                            date: "Summer 2019"
                        })}
                    </div>
                    <div className="content">
                        <div className="description">
                            &nbsp;&nbsp;For my second summer as an intern on Google's Hangouts Meet front-end team, I focused on
                            call quality. I implemented an audio quality algorithm in JavaScript that analyzes audio as a call
                            is occurring, so that a prompt can be issued to users who experience audio issues in order to improve
                            their meeting experience.<br />&nbsp;&nbsp;Additionally, I fixed many front-facing bugs throughout the summer, and also
                            implemented a client-requested feature that lets users store their phone numbers so that they do not have to
                            re-type it every time they dial into a meeting.
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="header">
                        <div className="images">
                            <img src={require('../images/google.png')}></img>
                            <img src={require('../images/meet.png')}></img>
                        </div>
                        {TitleAndDate({
                            title: "Engineering Practicum Intern - Google",
                            date: "Summer 2018"
                        })}
                    </div>
                    <div className="content">
                        <div className="description">
                            &nbsp;&nbsp;For my second summer as an intern on Google's Hangouts Meet front-end team, I focused on
                            call quality. I implemented an audio quality algorithm in JavaScript that analyzes audio as a call
                            is occurring, so that a prompt can be issued to users who experience audio issues in order to improve
                            their meeting experience.<br />&nbsp;&nbsp;Additionally, I fixed many front-facing bugs throughout the summer, and also
                            implemented a client-requested feature that lets users store their phone numbers so that they do not have to
                            re-type it every time they dial into a meeting.
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="header">
                        <div className="images">
                            <img src={require('../images/lmu.png')}></img>
                        </div>
                        {TitleAndDate({
                            title: "Teaching Assistant - LMUCS",
                            date: "Spring 2018 - Present"
                        })}
                    </div>
                    <div className="content">
                        <div className="description">
                            &nbsp;&nbsp;Since the spring semester of my freshman year at LMU, I have worked as a teaching assistant for the computer
                            science department. This involves both grading and general tutoring. I have graded for 186 (the second intro course) as
                            well as Data Structures. I provide general tutoring for all students, by helping them understand general programming
                            concepts and debugging issues with their assignments.
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

function TitleAndDate({ title, date }) {
    return (
        <div className="titleAndDate">
            <div className="title">
                {title}
            </div>
            <div className="date">
                {date}
            </div>
        </div>
    );
}

export default Experience;

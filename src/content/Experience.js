import React from 'react';

import '../styles/Experience.css';
import COLORS from '../styles/colors.js'

function Experience() {
    return (
        <div id="experienceList" style={{ backgroundColor: COLORS.BEIGE }}>
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
                            &nbsp;&nbsp;This past summer, I worked as a software engineering intern on Google's Firebase Hosting team. My project was to add built-in
                            support for Firebase developers to be able to serve country and/or language-specific content to their users. This involved researching how 
                            content delivery networks and the life of a request within Firebase work, as well as learning the syntax and intricacies of Golang, which I had
                            never used before. <br />&nbsp;&nbsp; 
                            While it previously required a fair amount of work on the developer's end to show users different content based on the language and country information
                            from their request data, it is now possible to configure this by adding a field to the Firebase project configuration file. Check out the documentation
                            for the feature I created <a href="https://firebase.google.com/docs/hosting/i18n-rewrites">here.</a>
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
                            date: "Jan 2018 - Present"
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
                <div className="experience">
                    <div className="header">
                        <div className="images">
                            <img src={require('../images/lmu.png')}></img>
                        </div>
                        {TitleAndDate({
                            title: "Technology Associate - LMU Honors",
                            date: "Oct 2017 - Jan 2018"
                        })}
                    </div>
                    <div className="content">
                        <div className="description">
                            &nbsp;&nbsp;I updated and maintained the <a href="https://academics.lmu.edu/honors/">LMU Honors Program website,</a> which involved using a CMS (content management system) to 
                            edit existing content and add new content as needed.
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="header">
                        <div className="images">
                            <img src={require('../images/lmu.png')}></img>
                        </div>
                        {TitleAndDate({
                            title: "Help Desk Technician - LMU ITS",
                            date: "Sept 2017 - Apr 2018"
                        })}
                    </div>
                    <div className="content">
                        <div className="description">
                            &nbsp;&nbsp;I worked at LMU's William H. Hannon Library as a help desk techinician for LMU ITS. This involved examining student devices for problems
                            (both hardware and software), working with students to solve technical issues, and managing the phone and online ticket systems.
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="header">
                        <div className="images">
                            <img src={require('../images/google.png')}></img>
                            <img src={require('../images/lmu.png')}></img>
                        </div>
                        {TitleAndDate({
                            title: "Program Participant - Google CSSIx",
                            date: "Summer 2017"
                        })}
                    </div>
                    <div className="content">
                        <div className="description">
                            &nbsp;&nbsp;I participated in the Google CSSIxLMU program, which teaches incoming college students development basics and results in the
                            creation of a web-app. Throughout this program, I was taught by both LMU faculty and Google engineers, and worked as a part of a team of three
                            to create Movie Night, a web-app that helps you pick what movie to watch based on interests.
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

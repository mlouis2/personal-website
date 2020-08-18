import React from 'react';

import '../styles/Projects.css';

import COLORS from '../styles/colors.js'

function Projects() {
    return (
        <div id="projects" style={{ backgroundColor: COLORS.BEIGE }}>
            <div id="projectsList">
            <div className="projectRow">
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                i18n Rewrites
                            </div>
                            <div className="projectDate">
                                Summer 2020
                            </div>
                        </div>
                        <div className="technologies">
                            Golang
                        </div>
                        <div className="projectDescription">
                            As a part of the Firebase Hosting team, I implemented the internationalization (i18n) rewrites feature. This feature 
                            allows for developers to configure their apps so that they can easily serve country and/or language-specific content.
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="https://firebase.google.com/docs/hosting/i18n-rewrites">
                                    <img src="https://img.icons8.com/wired/64/000000/documents.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                This website!
                            </div>
                            <div className="projectDate">
                                Spring 2020
                            </div>
                        </div>
                        <div className="technologies">
                            ReactJS, HTML, CSS
                        </div>
                        <div className="projectDescription">
                            I created the website that you're looking at now from scratch! I used ReactJS with hooks.
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="https://github.com/mlouis2/personal-website">
                                    <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectRow">
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                r0b0p
                            </div>
                            <div className="projectDate">
                                Spring 2020
                            </div>
                        </div>
                        <div className="technologies">
                            JavaScript
                        </div>
                        <div className="projectDescription">
                            r0b0p is a programming language that I designed and implemented with two other students
                            for our Compilers course. It's a robot-themed language that is both fun to write in and
                            fun to read! The compiler is written in JavaScript, and turns JavaScript code into r0b0p code.
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="https://hardlyfivefeet.github.io/r0b0p/">
                                    <img src="https://img.icons8.com/wired/64/000000/search.png"/>
                                </a>
                            </div>
                            <div className="projectLink">
                                <a href="https://github.com/hardlyfivefeet/r0b0p">
                                    <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                China Shop Bully
                            </div>
                            <div className="projectDate">
                                January 2020
                            </div>
                        </div>
                        <div className="technologies">
                            JavaScript, HTML5
                        </div>
                        <div className="projectDescription">
                            China Shop Bully is an arcade-style HTML5 canvas game I created with two friends at
                            the RoseHack 2021 hackathon at the University of California, Riverside. We won first place
                            best overall hack for the project (out of about forty total teams), and had a blast making it!
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="http://chinashopbully.online/">
                                    <img src="https://img.icons8.com/wired/64/000000/search.png"/>
                                </a>
                            </div>
                            <div className="projectLink">
                                <a href="https://github.com/mlouis2/bullgame">
                                    <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                                </a>
                            </div>
                            <div className="projectLink">
                                <a href="https://seavernews.lmu.edu/2020/02/21/lmu-students-take-top-prize-at-women-centric-hackathon/">
                                    <img src="https://img.icons8.com/wired/64/000000/news.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectRow">
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                Jolt
                            </div>
                            <div className="projectDate">
                                Fall 2019
                            </div>
                        </div>
                        <div className="technologies">
                            ReactJS
                        </div>
                        <div className="projectDescription">
                            Jolt is a project that I created for my Interaction Design course. It uses the PokéAPI, which
                            provides information and facts about Pokémon. The website is created in React, and is essentially an
                            information database for Pokémon. Check it out!
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="https://github.com/mlouis2/jolt">
                                    <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                WOOF!
                            </div>
                            <div className="projectDate">
                                April 2019
                            </div>
                        </div>
                        <div className="technologies">
                            Swift
                        </div>
                        <div className="projectDescription">
                            WOOF! is a self-care application that I created with two friends for the AthenaHacks 2019 hackathon.
                            The idea behind WOOF! is that by having fun taking care of a virtual dog companion, you can also track your
                            self-care. We learned a lot when creating this project, as none of us had extensive experience with
                            Swift before this hackathon.
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="https://github.com/mlouis2/Woof">
                                    <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectRow">
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                classpath
                            </div>
                            <div className="projectDate">
                                Spring 2019
                            </div>
                        </div>
                        <div className="technologies">
                            JavaScript, HTML5
                        </div>
                        <div className="projectDescription">
                            classpath is a project that I created with three others at the RoseHack 2019 hackathon. Its purpose
                            is to make it simpler for students to understand how to get around their campus by taking advantage of
                            routes and paths that are not available on mainstream map applications. This project won second place
                            best overall hack at the hackathon, as well as best front-end design. Additionally, three of us were given an
                            LMU Honors Research Grant to continue to develop the project throughout the spring semester.
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="https://mlouis2.github.io/classpath/">
                                    <img src="https://img.icons8.com/wired/64/000000/search.png"/>
                                </a>
                            </div>
                            <div className="projectLink">
                                <a href="https://github.com/mlouis2/classpath">
                                    <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                                </a>
                            </div>
                            <div className="projectLink">
                                <a href="https://seavernews.lmu.edu/2019/02/25/lmu-team-wins-hackathon-award-for-campus-map-program/">
                                    <img src="https://img.icons8.com/wired/64/000000/news.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                LMUGrowl
                            </div>
                            <div className="projectDate">
                                September 2017
                            </div>
                        </div>
                        <div className="technologies">
                            Python, Google App Engine
                        </div>
                        <div className="projectDescription">
                            LMUGrowl is a small project I created in my freetime freshman year that is intended to help students
                            at LMU budget their meal plan money. By inputting how much money you have left, it calculates how much
                            you can spend per day based off of the rest of the days in the semester, and based off of how much money you
                            started with, it can tell you whether or not you are on track for how much you were "supposed" to spend.
                            LMUGrowl was based off of a problem I saw on a day-to-day basis on campus, as many freshmen were unsure of whether
                            or not they would run out of money before the end of the semester.
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="http://lmugrowl.appspot.com/">
                                    <img src="https://img.icons8.com/wired/64/000000/search.png"/>
                                </a>
                            </div>
                            <div className="projectLink">
                                <a href="https://github.com/mlouis2/LMUgrowl">
                                    <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectRow">
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                Skeleton Attack!
                            </div>
                            <div className="projectDate">
                                Fall 2017
                            </div>
                        </div>
                        <div className="technologies">
                            JavaScript, HTML5
                        </div>
                        <div className="projectDescription">
                            Skeleton Attack! was my final project for my introductory computer science course. Skeletons spawn
                            around the player and the player must use the mouse to run away from them, as well as collect power ups.
                            Check it out below and be sure to turn your sound on!
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="https://mlouis2.github.io/chaser/">
                                    <img src="https://img.icons8.com/wired/64/000000/search.png"/>
                                </a>
                            </div>
                            <div className="projectLink">
                                <a href="https://github.com/mlouis2/chaser">
                                    <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projectCard" style={{ backgroundColor: COLORS.GREEN }}>
                        <div className="projectTitleAndDate">
                            <div className="projectTitle">
                                Movie Night
                            </div>
                            <div className="projectDate">
                                Summer 2017
                            </div>
                        </div>
                        <div className="technologies">
                            Python, Google App Engine
                        </div>
                        <div className="projectDescription">
                            Movie Night was the culminating project of my experiences at the Google CSSIx summer program. The
                            application was based off of the idea that it can be difficult to figure out what kind movie to watch,
                            and prompts the user to answer a series of questions that will determine some movie options. A movie API
                            was used to provide the results, and users can use Google authentication to log in and save movies that they
                            want to watch later.
                        </div>
                        <div className="links">
                            <div className="projectLink">
                                <a href="http://l2amovienight.appspot.com/">
                                    <img src="https://img.icons8.com/wired/64/000000/search.png"/>
                                </a>
                            </div>
                            <div className="projectLink">
                                <a href="https://github.com/mlouis2/movienight">
                                    <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;

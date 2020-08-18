import React, { useState } from 'react';

import '../styles/Skills.css';
import COLORS from '../styles/colors.js'

function Skills() {
    return (
        <div id="skillsAndCourses">
            <div id="courseHeading">Relevant Skills</div>
            <div id="skills">
                <div className="skillSet">
                    Languages: JavaScript, Python, Java, Golang, HTML, CSS, C#, C++, C, Swift
                </div>
                <div className="skillSet">
                    Technologies: Git, GitHub, React, Firebase, Unity, Adobe Photoshop, Google App Engine
                </div>
            </div >
            <div id="courseHeading">Relevant Courses</div>
            <div id="courses">
                <div className="courseRow">
                    {Course({
                        title: "Compilers", description: "Worked on a team of three to design and implement a new programming language called r0b0p. Studied the intricacies of various programming languages and practiced regexes."
                    })}
                    {
                        Course({
                            title: "Networks", description: "Learned about how network connections between devices work, and created a few small applications that allow servers and clients to pass information back and forth to each other. Created a TypeRacer game that lets two players compete to see who can type a randomized string the quickest."
                        })
                    }
                    {Course({ title: "Graphics", description: "Studied how computer graphics work and the mathematics that goes into making them appear neatly on the screen. Implemented a variety of technical projects in C++, such as rotating a cube, drawing Bézier curves, and creating and rotating a scene based off of an image." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Game Development", description: "Learned the basics of Unity and C#. Created a 3D endless runner game with obstacles and scorekeeping." })}
                    {Course({ title: "Interaction Design", description: "Learned the ins and outs of contacting APIs. Created a web-application with ReactJS hooks that lets users see information about Pokémon, using PokéAPI." })}
                    {Course({ title: "Intro to Theory of Computation", description: "Learned about the basics of computation, such as Turing machines and nondeterministic finite automata (NFAs). Created an NFA simulator, which lets users enter a formatted NFA and a string and returns whether or not that string is in the language." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Programming Languages", description: "Analyzed several different programming languages and the differences and similarities between them." })}
                    {Course({ title: "Artificial Intelligence", description: "Learned and implemented many different popular algorithms used in the field, and programmed several projects, such as a sprite that can intelligently find the best route to get to an exit on a grid map by avoiding obstacles." })}
                    {Course({ title: "Discrete Methods", description: "Studied topics such as probability, combinatorics, and graph theory." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Algorithms", description: "Learned a variety of popular programming techniques and implemented algorithms such as Huffman encoding and min-max search." })}
                    {Course({ title: "Computer Systems Organization", description: "Studied the basics of encoding and programmed in low-level languages such as Assembly and C." })}
                    {Course({ title: "Algorithms Laboratory (Independent Study)", description: "Practiced competitive programming problems (for competitions such as ICPC)." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Logic Design", description: "Studied how computers work at a low level." })}
                    {Course({ title: "Introduction to Methods of Proof", description: "Practiced writing complex proofs using a variety of techniques, and also studied topics such as set theory." })}
                    {Course({ title: "Data Structures", description: "Studied common data structures and compared and contrasted their optimal use cases." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Game Design", description: "Studied the theory of how games work and what makes them fun. Created a version of Connect-4 where either player can rotate the board 90 degrees during their turn, which adds a twist to the game." })}
                    {Course({ title: "Programming Lab", description: "Learned complex programming techniques and created a variety of projects, for example, implementing BigInteger in Java." })}
                    {Course({ title: "Calculus 1 & 2", description: "" })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Computer Programming", description: "Learned basic programming techniques and, as a final project, created an HTML5 canvas games where the player controls a character that is being chased by enemies." })}
                </div>
            </div>
        </div>
    );
}

function Course({ title, description }) {
    return (
        <div className="course" style={{ backgroundColor: COLORS.GREEN, }} >
            <div className="courseTitle">
                {title}
            </div>
            <div className="courseDescription">
                {description}
            </div>
        </div >
    )
}

export default Skills;

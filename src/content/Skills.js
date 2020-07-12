import React, { useState } from 'react';

import '../styles/Skills.css';
import COLORS from '../styles/colors.js'

function Skills() {
    return (
        <div id="skillsAndCourses">
            <div id="skills">
                <div className="skillSet">
                    Languages: JavaScript, Java, HTML, CSS, Python, C
                </div>
                <div className="skillSet">
                    Technologies: Git, GitHub, ReactJS, Adobe Photoshop, Microsoft Office, Google App Engine
                </div>
                <div className="skillSet">
                    Miscellaneous: elementary Japanese proficiency, limited juggling abilities, typing very quickly
                </div>
            </div >
            <div id="courseHeading">Relevant Courses</div>
            <div id="courses">
                <div className="courseRow">
                    {Course({
                        title: "Compilers", description: "In Compilers, I worked in a team of three to design and implement a new programming language called r0b0p. We also studied and practiced regexes as well as the different intricacies of programming languages."
                    })}
                    {
                        Course({
                            title: "Networks", description: "In Networks, I learned about how network connections between devices work, and created a few small applications that allow servers and clients to pass information back and forth to each other.As the final project, myself and one other student created a functional TypeRacer game that lets two players compete and see who can type a randomized string the quickest."
                        })
                    }
                    {Course({ title: "Graphics", description: "Throughout this course, I studied how computer graphics work and the mathematics that goes into making them appear neatly on the screen. We did a variety of technical projects in C++, such as rotating a cube, drawing Bézier curves, and creating and rotating a scene based off of an image." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Game Development", description: "In Game Development, we learned the basics of Unity and C# and I created an endless runner game." })}
                    {Course({ title: "Interaction Design", description: "In this class, I learned the ins and outs of contacting APIs, and created a web-application with ReactJS hooks that lets users see information about Pokémon, using the popular PokéAPI." })}
                    {Course({ title: "Intro to Theory of Computation", description: "In this course, we learned about the basics of computation, such as Turing machines, NFAs, and different types of languages. My final project was an NFA simulator, which lets users enter a formatted NFA and a string and will return whether or not that string is in the language." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Programming Languages", description: "In Programming Languages, we analyzed several different languages and the differences and similarities between them." })}
                    {Course({ title: "Artificial Intelligence", description: "Throughout artificial intelligence, we learned and implemented many different popular algorithms used in the field, and programmed several projects, such as a sprite that can intelligently find the best route to get to an exit on a grid map by avoiding obstacles." })}
                    {Course({ title: "Discrete Methods", description: "In Discrete Methods, we learned about topics such as probability, combinatorics, and graph theory." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Algorithms", description: "In Algorithms, I learned a variety of techniques and implemented algorithms such as Huffman encoding and min-max search." })}
                    {Course({ title: "Computer Systems Organization", description: "In this course, we studied the basics of encoding and programmed in low-level languages such as Assembly and C." })}
                    {Course({ title: "Algorithms Laboratory (Independent Study)", description: "This course was designed for students to practice competitive programming problems (for competitions such as ICPC)." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Logic Design", description: "In Logic Design, we studied how computers work at a low level." })}
                    {Course({ title: "Introduction to Methods of Proof", description: "Throughout this course, I practiced writing complex proofs using a variety of techniques, and also studied topics such as set theory." })}
                    {Course({ title: "Data Structures", description: "Throughout Data Structures, we studied common data structures and compared and contrasted their optimal use cases." })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Game Design", description: "In Game Design, I studied the theory of how games work and what makes them fun. My final project was a version of Connect-4 where either player can rotate the board 90 degrees during their turn, thus adding a twist to the game." })}
                    {Course({ title: "Programming Lab", description: "In this course, we learned more complex programming techniques and did a variety of projects, for example, implementing BigInteger in Java." })}
                    {Course({ title: "Calculus 1 & 2", description: "" })}
                </div>
                <div className="courseRow">
                    {Course({ title: "Computer Programming", description: "In this introductory computer science course, we learned basic programming techniques and, as a final project, created HTML5 canvas games where the player controls a character that is being chased by enemies." })}
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

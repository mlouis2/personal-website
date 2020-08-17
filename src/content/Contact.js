import React from 'react';

import '../styles/Contact.css';

import COLORS from '../styles/colors.js'

function Contact() {
    return (
        <div id="contact">
            <div id="contactTitle">Contact me!</div>
            <div id="contactOptions">
                <div className="contactOption" >
                    <a href="mailto:mlouis2@lion.lmu.edu">
                        <img src="https://img.icons8.com/wired/64/000000/filled-message.png" />
                    </a>
                </div>
                <div className="contactOption" >
                    <a href="https://www.linkedin.com/in/maddie-louis/">
                        <img src="https://img.icons8.com/wired/64/000000/linkedin.png" />
                    </a>
                </div>
                <div className="contactOption" >
                    <a href="https://github.com/mlouis2">
                        <img src="https://img.icons8.com/wired/64/000000/github.png"/>
                    </a>
                </div>
            </div>
        </div >
    );
}

export default Contact;

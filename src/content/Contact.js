import React from 'react';

import '../styles/Contact.css';

import COLORS from '../styles/colors.js'

function Contact() {
    return (
        <div id="contact">
            <div id="contactOptions">
                <div className="contactOption" style={{ backgroundColor: COLORS.GREEN }}>
                    <a href="mailto:mlouis2@lion.lmu.edu">
                        <img src="https://img.icons8.com/wired/64/000000/filled-message.png" />
                    </a>
                </div>
                <div className="contactOption" style={{ backgroundColor: COLORS.GREEN }}>
                    <a href="https://www.linkedin.com/in/maddie-louis/">
                        <img src={require("../images/linkedin.png")} />
                    </a>
                </div>
                <div className="contactOption" style={{ backgroundColor: COLORS.GREEN }}>
                    <a href="github.com/mlouis2">
                        <img src={require("../images/github.png")} />
                    </a>
                </div>
            </div>
        </div >
    );
}

export default Contact;

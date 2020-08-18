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
            <div id="news">
                <div className="article">
                    <embed src="https://seavernews.lmu.edu/2020/02/20/hackers-compete-at-lmuhacks/"/>
                </div>
                {/* <div className="article">
                    <embed src="http://www.laloyolan.com/news/lmu-female-hackathon-winners/article_3c2288bb-eafd-538a-a441-091e45e9825e.html"/>
                </div> */}
                <div className="article">
                    <embed src="https://seavernews.lmu.edu/2019/02/25/lmu-team-wins-hackathon-award-for-campus-map-program/"/>
                </div>
                <div className="article">
                    <embed src="https://sftvnewsroom.lmu.edu/women-team-wins-hackathon-award-lmu-map-program/"/>
                </div>
                {/* <div className="article">
                    <embed src="https://firebase.google.com/docs/hosting/i18n-rewrites"/>
                </div> */}
            </div>
        </div >
    );
}

export default Contact;

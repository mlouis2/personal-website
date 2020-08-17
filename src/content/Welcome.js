import React from 'react';

import '../styles/Welcome.css';

function Welcome() {
    return (
        <div id="welcome">
            <div id="intro">
                <div id="photo">
                    <img src={require('../images/profile.jpg')}></img>
                </div>
                <div id="card">
                    <div id="cardTitle">
                        Hi there!
                    </div>
                    <br />
                    <p>
                        My name is Maddie Louis and I'm a senior computer science major at Loyola Marymount University (LMU), currently
                        seeking full-time opportunities in the software engineering field. Click around my website to learn more about 
                        my work experience, side projects, and involvement at LMU. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;

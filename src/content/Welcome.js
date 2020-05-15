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
                        My name is Maddie Louis and I am a rising senior computer science major at Loyola
                        Marymount University in Los Angeles, California. Click around my website to learn more about me and my work!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;

import React from 'react';

import '../styles/Resume.css';
import COLORS from '../styles/colors.js'

function Resume() {
    return (
        <div id="resume" style={{ backgroundColor: COLORS.BEIGE }}>
            <img src={require("../images/resume.jpg")}></img>
        </div>
    );
}

export default Resume;

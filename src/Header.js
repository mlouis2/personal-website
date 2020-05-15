import React from 'react';
import './styles/Header.css';
import COLORS from './styles/colors.js'

function Header({ iconSelected }) {
    return (
        <div style={{ backgroundColor: COLORS.GREEN }} id="headerBar" >
            <div id="iconsLeft">
                {Icon({ label: "Home", imageSrc: "https://img.icons8.com/wired/64/000000/home.png", iconSelected })}
                {Icon({ label: "Experience", imageSrc: "https://img.icons8.com/wired/64/000000/workstation.png", iconSelected })}
                {Icon({ label: "Projects", imageSrc: "https://img.icons8.com/wired/64/000000/create-new.png", iconSelected })}
            </div>
            <div style={{ color: COLORS.BEIGE }} id="title">
                Maddie Louis
            </div>
            <div id="iconsRight">
                {Icon({ label: "Courses/Skills", imageSrc: "https://img.icons8.com/wired/64/000000/school.png", iconSelected })}
                {Icon({ label: "Resume", imageSrc: "https://img.icons8.com/wired/64/000000/resume.png", iconSelected })}
                {Icon({ label: "Contact", imageSrc: "https://img.icons8.com/wired/64/000000/communication.png", iconSelected })}
            </div>
        </div >
    );
}

function Icon({ label, imageSrc, iconSelected }) {

    function handleIconSelected(label) {
        //Relays label to the parent so that we can update the content
        iconSelected(label);
    }

    return (
        <div className="icon" onClick={() => handleIconSelected(label)}>
            <img src={imageSrc} />
            <br />
            <p className="label">{label}</p>
        </div>
    );
}

export default Header;

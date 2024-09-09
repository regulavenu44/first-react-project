
import React from "react";
import logo from '../images/image.jpeg';  // Correct path to the image

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <p className="headertext">Cricket</p>
        </header>
    );
}

export default Header;

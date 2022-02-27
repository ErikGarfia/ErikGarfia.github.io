import React from 'react';
import "./Navbar.scss";

function NavbarComponent() {
    return (
        <div className='navbar uk-visible@s'>
            <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
                <nav className="uk-navbar-container" uk-navbar="dropbar: true;" style={{ position: "relative", zIndex: "980" }}>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li><a href="#tsparticles"> {"<Erik />"} </a></li>
                            <li><a href="#About"> About </a></li>
                            <li><a href="#Technologies"> Technologies </a></li>
                            <li><a href="#Experience"> Experience </a></li>
                            <li><a href="#Projects"> Projects </a></li>
                            <li><a href="#Certifications"> Certifications </a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavbarComponent;
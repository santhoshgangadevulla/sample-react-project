import React from 'react';
import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive")
    }
    return(
        <div className="m-auto sh-header-container d-flex flex-column justify-content-center fixed-top">
            <header className="sh-header">
                <h3 className="mb-0">SHOPIFY</h3>
                <nav ref={navRef}>
                    <a href="/" className="sh-header-links">Home</a>
                    <a href="/" className="sh-header-links">About</a>
                    <a href="/" className="sh-header-links">Testimonials</a>
                    <a href="/" className="sh-header-links">Contact</a>
                    <a href="/" className="sh-header-links">Sign in</a>
                    <button className="sh-header-signup-button">Sign up</button>
                    <button className="sh-header-nav-btn sh-header-nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="sh-header-nav-btn sh-header-nav-close-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
        </header>
        </div>
    );
}

export default Navbar;
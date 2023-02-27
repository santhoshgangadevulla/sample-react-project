import React from 'react';

function Hero(){
    return(
        <div className="sh-hero-wrapper d-flex align-items-center justify-content-center justify-content-xl-between">
            <img className="d-none d-xl-block" src="./assets/header-start-image.png" alt="header-start-img"></img>
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-center sh-hero-heading">We Develop <span className="sh-hero-heading-sub">Shopify</span> sites</h1>
                <p className="text-center sh-hero-description">Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. Pointed toes. Padded insole with geometrical design. </p>
                <div className="text-center d-flex flex-column flex-md-row">
                    <a className="sh-hero-button mb-3 mb-md-0" href="/">Contact Us</a>
                    <a className="sh-hero-button sh-hero-button--transparent" href="/">Watch Video</a>
                </div>
            </div>
            <img className="d-none d-xl-block" src="./assets/header-end-image.png" alt="header-start-img"></img>
        </div>
    )
}

export default Hero
import React from "react";


const Portfolio = props => {
    const {portfolioDetails} =props;
    const {imageUrl, portfolioType} = portfolioDetails;
    return(
        <div className="m-3 mt-5 mb-0">
            <img className="img-fluid" src={imageUrl} alt="portfolio-images"/>
            <div className="d-flex justify-content-between align-items-center pt-3">
                <p className="sh-portfolio-tagline mb-0">{portfolioType}</p>
                <a className="sh-portfolio-link" href="/">View Details</a>
            </div>
        </div>
    );
}

export default Portfolio
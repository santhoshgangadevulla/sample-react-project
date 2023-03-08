import React from 'react';

const footerList = ["Our Agents", "Member Stories", "Video", "Free Trial"];
const footerListTwo = ["Patnerships", "Terms of use", "Privacy", "Sitemap"];

function Footer(){
    const footerListItems = footerList.map((eachItem,index) =>
        <li className="sh-footer-list lh-lg list-unstyled" key={index}><a className="text-decoration-none sh-footer-list-links" href="/">{eachItem}</a></li>
    )
    const footerListItemsTwo = footerListTwo.map((eachItem,index)=>
        <li className="sh-footer-list lh-lg list-unstyled" key={index}><a className="text-decoration-none sh-footer-list-links" href="/">{eachItem}</a></li>
    )
    return(
        <div className="row d-flex">
            <div className="col-12 col-md-6 col-xl-4">
                <p className="sh-footer-title">SHOPIFY</p>
                <p className="sh-footer-tagline">You’ll find your next home loan value you prefer.</p>
                <div className="d-flex">
                    <div className="sh-footer-icon-wrapper me-3 d-flex justify-content-center align-items-center">
                        <a href="facebook.com">
                            <img src="./assets/facebook.svg" alt="facebook" />
                        </a>
                    </div>
                    <div className="sh-footer-icon-wrapper me-3 d-flex justify-content-center align-items-center">
                        <a href="twitter.com">
                            <img src="./assets/twitter.svg" alt="twitter" />
                        </a>
                    </div>
                    <div className="sh-footer-icon-wrapper me-3 d-flex justify-content-center align-items-center">
                        <a href="twitter.com">
                            <img src="./assets/twitter.svg" alt="twitter" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
                <p className="sh-footer-type">Resources</p>
                <ul className="ps-0">
                    {footerListItems}
                </ul>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
                <p className="sh-footer-type">Company</p>
                <ul className="ps-0">
                    {footerListItemsTwo}
                </ul>
            </div>
        </div>
    )
}

export default Footer
import React from "react";

const PricingPolicy = props =>{
    const {policyDetails}=props;
    const {policyName, policyPrice, policyfeatures, policyCta}=policyDetails;
    const items = policyfeatures.map((eachItem, index) => 
        <li className="lh-lg" key={index}>{eachItem}</li>
   );
    return(
        <div className="sh-feature-card d-flex flex-column align-items-center mt-5 pt-5 pb-5 h-100">
            <p className="sh-policy-name">{policyName}</p>
            <p className="sh-policy-price">{policyPrice}</p>
            <ul className="sh-policy-list">
                {items}
            </ul>
            <button className="sh-feature-button sh-feature-button--new mt-3">{policyCta}</button>
        </div>
    );
}

export default PricingPolicy
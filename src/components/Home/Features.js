import React from "react";
// const FeaturesCard = ({imageUrl,featureHeading,featureDescription}) => {
//     return(
// <div className="sh-feature-card m-3 mt-5 mb-0">
//             <div className="d-flex align-items-center">
//                 <img src= {imageUrl} alt="feature-logos"/>
//                 <h2 className="sh-feature-card-heading ms-2 mb-0">{featureHeading}</h2>
//             </div>
//             <p className="sh-feature-card-description">{featureDescription}</p>
//             <a className="sh-feature-card-link" href="/">Read more</a>
//         </div>
//     )
// }

const Features = props => {
    const {featureDetails} = props
    const {imageUrl, featureHeading, featureDescription} = featureDetails
    return(
        <div className="sh-feature-card p-4 h-100">
            <div className="d-flex align-items-center">
                <img src= {imageUrl} alt="feature-logos"/>
                <h2 className="sh-feature-card-heading ms-2 mb-0">{featureHeading}</h2>
            </div>
            <p className="sh-feature-card-description">{featureDescription}</p>
            <a className="sh-feature-card-link" href="/">Read more</a>
        </div>
    );
}

export default Features
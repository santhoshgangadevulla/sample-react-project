import React from 'react';
import './sass/style.scss';
import Navbar from './components/Global/Navbar';
import Hero from './components/Home/Hero';
import Features from './components/Home/Features';

function App() {
  const featureDetailsList = [
    {
        uniqueNo:1,
        imageUrl:"./assets/webflow-development.svg",
        featureHeading:"Webflow Development",
        featureDescription:"Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
    },
    {
      uniqueNo:2,
      imageUrl:"./assets/shopify-development.svg",
      featureHeading:"Shopify Development",
      featureDescription:"Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
    },
    {
      uniqueNo:3,
      imageUrl:"./assets/figma-web-designing.svg",
      featureHeading:"Figma Web Designing",
      featureDescription:"Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
    },
    {
      uniqueNo:4,
      imageUrl:"./assets/php-development.svg",
      featureHeading:"PHP Development",
      featureDescription:"Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
    }
  ]
    return (
      <div>
        <Navbar />
        <Hero />
        <div class="sh-feature-wrapper">
            <p class="text-center sh-feature-sub-heading">What we Do?</p>
            <h1 class="text-center sh-feature-heading">Our Specialization</h1>
            <div className="d-flex flex-wrap justify-content-center">
                {featureDetailsList.map((eachItem)=>
              (
              <Features featureDetails={eachItem}/>
              ))}
            </div>
        </div>
      </div>
    );
}

export default App;
 
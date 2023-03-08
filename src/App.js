import React from 'react';
import './sass/style.scss';
import Navbar from './components/Global/Navbar';
import Hero from './components/Home/Hero';
import Features from './components/Home/Features';
import Portfolio from './components/Home/Portfolio';
import PricingPolicy from './components/Home/PricingPolicy';
import ContactUs from './components/Home/ContactUs';
import Footer from './components/Global/Footer';

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

  const portfolioDetailsList=[
    {
      uniqueNo:1,
      imageUrl:"./assets/fashion-landing-page.png",
      portfolioType:"Fashion Landing Page",
    },
    {
      uniqueNo:2,
      imageUrl:"./assets/health-and-fitness.png",
      portfolioType:"Health & Fitness",
    },
    {
      uniqueNo:3,
      imageUrl:"./assets/furniture-shop.png",
      portfolioType:"Furniture Shop",
    },
    {
      uniqueNo:4,
      imageUrl:"./assets/it-solution-provider.png",
      portfolioType:"IT Solution Provider",
    }
  ]

  const pricingList=[
    {
      uniqueNo:1,
      policyName:"For Starter",
      policyPrice:"$1499",
      policyfeatures:["Feedback Categorization", "Features Prioritization", "Real-Time Collaboration", "Feedback Loop Notifications", "Essential Dev Tools Integrations"],
      policyCta:"Request Demo"
    },
    {
      uniqueNo:2,
      policyName:"For Teams",
      policyPrice:"$2999",
      policyfeatures:["Feedback Categorization", "Features Prioritization", "Real-Time Collaboration", "Feedback Loop Notifications", "Essential Dev Tools Integrations"],
      policyCta:"Request Demo"
    },
    {
      uniqueNo:3,
      policyName:"For Company",
      policyPrice:"Custom",
      policyfeatures:["Feedback Categorization", "Feedback Loop Notifications", "Essential Dev Tools Integrations"],
      policyCta:"Request Demo"
    }
  ]


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="sh-feature-wrapper">
          <p className="text-center sh-feature-sub-heading">What we Do?</p>
          <h1 className="text-center sh-feature-heading">Our Specialization</h1>
          <div className="row g-4 mt-5">
              {featureDetailsList.map((eachItem)=>
            (
              <div className='col-12 col-lg-6' key={eachItem.uniqueNo}>
                <Features featureDetails={eachItem} />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center text-center mt-5">
            <a className="sh-feature-button p-2 text-decoration-none" href="/">Learn more</a>
          </div>
      </div>
      <div className="sh-portfolio-wrapper">
          <p className="text-center sh-feature-sub-heading">Our Work</p>
          <h1 className="text-center sh-feature-heading">Our Portfolio</h1>
          <div className="row g-4 mt-5">
              {portfolioDetailsList.map((eachItem)=>
              (
                <div className="col-12 col-lg-6">
                  <Portfolio portfolioDetails={eachItem} key={eachItem.uniqueNo} />
                </div>
              ))}
          </div>
      </div>
      <div className="sh-policy-wrapper">
          <p className="text-center sh-feature-sub-heading">Pricing</p>
          <h1 className="text-center sh-feature-heading">Pricing Policy</h1>
          <div className="row mt-5">
            {
              pricingList.map((eachItem)=>(
                <div className="col-12 col-lg-4">
                  <PricingPolicy policyDetails={eachItem} key={eachItem.uniqueNo}/>
                </div>
              ))
            }
          </div>
      </div>
      <ContactUs />
      <div className="sh-footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
 
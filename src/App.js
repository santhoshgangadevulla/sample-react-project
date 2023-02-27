import React from 'react';
import './sass/style.scss';
import Navbar from './components/Global/Navbar';
import Hero from './components/Home/Hero';

function App() {
    return (
      <div className="sh-header-wrapper">
        <Navbar />
        <Hero />
      </div>
    );
}

export default App;
 
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AnimatedBackground from './background/AnimatedBackground';
// import GsapHeroSection from './components/GsapHeroSection';
import './styles/globals.css';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>

      {/* <GsapHeroSection /> */}
      <Hero />
  <About />
        {/* You can add About, Projects, Skills, Contact here */}

        <Home />
      </main>
    </>
  );
};

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header';
import Hero from './Components/Hero';
import WhyChooseUs from './Components/WhyChooseUs';
import OurServices from './Components/OurService'
import StatsSection from './Components/Stats'
import SuccessCases from './Components/SuccessCase';
import TechnologyPartners from './Components/TechPartners';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <StatsSection />
      <SuccessCases />
      <TechnologyPartners />
    </>
  );
}


export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header';
import Hero from './Components/Hero';
import WhyChooseUs from './Components/WhyChooseUs';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      
    </>
  );
}


export default App;

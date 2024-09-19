import React from 'react';
import './App.css';
import Navbar from './components/LandingPage/Navbar';
import Hero from './components/LandingPage/Hero';
import ExperienceSkill from './components/LandingPage/workprofile/ExperienceSkill';
import Skill from './components/LandingPage/skill';
import Emailcontact from './components/LandingPage/emailcontact';
import Footer from './components/LandingPage/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <ExperienceSkill />
      <Emailcontact/>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import ThreeWorks from '../components/ThreeWorks';
import Expertise from '../components/Expertise';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <Expertise />
      <ThreeWorks />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;

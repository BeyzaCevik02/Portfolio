import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Works from './components/Works';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopNavigate';
import './styles/main.scss';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" 
            rel="stylesheet" 
          />
        </Helmet>
        <Navbar />
        <ScrollToTop />
        <ScrollToTopOnNavigate /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<Works />} />
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;

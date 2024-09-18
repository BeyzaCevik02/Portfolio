import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1200);
  const [pendingHash, setPendingHash] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (pendingHash && window.location.pathname === '/') {
      const element = document.querySelector(`#${pendingHash}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setPendingHash(null);
      }
    }
  }, [pendingHash]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleInternalLinkClick = (e, hash) => {
    e.preventDefault();

    const currentPath = window.location.pathname;

    if (currentPath === '/' && hash) {
      const element = document.querySelector(`#${hash}`);
      if (element) {
        window.history.pushState(null, '', `/#${hash}`);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (currentPath === '/' && !hash) {
      window.history.pushState(null, '', '/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      setPendingHash(hash);
      navigate(`/#${hash ? hash : ''}`);
    }

    closeMenu();
  };

  return (
    <nav className={isMobileView ? 'mobile' : ''}>
      <RouterLink to="/" onClick={closeMenu}>
        <img src="/assets/logo_blue.png" alt="logo" />
      </RouterLink>      
      {isMobileView && (
        <>
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            &#9776;
          </button>
          <div className={`overlay ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu}></div>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <button className="close" onClick={closeMenu}>X</button>
            <li><RouterLink to="/" onClick={(e) => { closeMenu(); handleInternalLinkClick(e, ''); }}>Home</RouterLink></li>
            <li><a href="#about" onClick={(e) => { closeMenu(); handleInternalLinkClick(e, 'about'); }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { closeMenu(); handleInternalLinkClick(e, 'skills'); }}>Skills</a></li>
            <li><RouterLink to="/works" onClick={closeMenu}>Works</RouterLink></li>
            <li><a href="#contact" onClick={(e) => { closeMenu(); handleInternalLinkClick(e, 'contact'); }}>Contact</a></li>
          </ul>
        </>
      )}
      {!isMobileView && (
        <ul>
          <li><RouterLink to="/" onClick={(e) => handleInternalLinkClick(e, '')}>Home</RouterLink></li>
          <li><a href="#about" onClick={(e) => handleInternalLinkClick(e, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleInternalLinkClick(e, 'skills')}>Skills</a></li>
          <li><RouterLink to="/works">Works</RouterLink></li>
          <li><a href="#contact" onClick={(e) => handleInternalLinkClick(e, 'contact')}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div>
      {isVisible && (
        <div onClick={scrollToTop} style={styles.scrollToTopButton}>
          ↑
        </div>
      )}
    </div>
  );
};

const styles = {
  scrollToTopButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#205BC9',
    color: 'white',
    width: '50px',   
    height: '50px', 
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '24px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: '1000',
    textAlign: 'center',
  },
};

export default ScrollToTop;

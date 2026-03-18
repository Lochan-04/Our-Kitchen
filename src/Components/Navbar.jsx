import React, { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'
import leaf from '../assets/leaf.png'
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onAboutClick, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timerRef = useRef(null);
  const lastScrollY = useRef(0); 
  const location = useLocation();



  const handleContactClick = (e) => {

    onContactClick();
  };


  const handleAboutClick = (e) => {
    
      onAboutClick();     
   
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const hideThreshold = 200; 

      if (isMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > hideThreshold) {
        clearTimeout(timerRef.current);
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setIsVisible(true);
        }, 100); 
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timerRef.current); 
    };
  }, [isMenuOpen]); 

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);


  const handleInternalLink = (e, scrollFunc) => {
    if (location.pathname === '/') {
      e.preventDefault(); 
      scrollFunc();
    } else {
      scrollFunc();
    }
    setIsMenuOpen(false);
  };

  return (
    <div className='main'>
      <nav className={`${styles.navBar} ${isVisible ? '' : styles.hidden}`}>
        <div className={styles.navTopRow}>
          <div className={styles.logoContainer}>
            <img className={styles.logoImage} src={leaf} alt="Leaf Logo" />
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          
          <Link to="/" onClick={(e) => handleInternalLink(e, handleAboutClick)}>
            ABOUT
          </Link>
          
          <Link to="/menu" onClick={() => setIsMenuOpen(false)}>MEALS</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>BLOG</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>MEAL PLANS</Link>

          
          <Link to="/" onClick={(e) => handleInternalLink(e, handleContactClick)}>
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
}; 

export default Navbar;

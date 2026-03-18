import React, { useState } from 'react';
import styles from './Footer.module.css';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import { Link } from 'react-router-dom';

const Footer = ({ footerRef,onAboutClick, onContactClick }) => {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;

    setEmail("");
    alert("Thank you for subscribing!");
  };
 


  return (
    <footer id="footer-section" ref={footerRef} className={styles.mainFooter}>
     
      <div className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h1>Contact Us</h1>
          <a href="mailto:info@mysite.com" className={styles.email}>lochankhatri918@gmail.com</a>
          <p className={styles.phone}>Tel: 123-456-7890</p>
          <p className={styles.address}>
            Dwarka, Jyoti Pride Building,<br />
            Nashik, 422213
          </p>
        </div>

        <div className={styles.newsletter}  > 
          <p className={styles.newsletterTitle}>Keep Updated on Our Latest Offers</p>
          <form  className={styles.form}  onSubmit={handleSubscribe}>
            <div className={styles.inputGroup}>
              <label htmlFor="email"></label>
              <input type="email" id="email" required value={email} placeholder='Enter your e-mail'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="subscribe" required />
              <label htmlFor="subscribe">Yes, subscribe me to your newsletter. *</label>
            </div>

            <button type="submit" className={styles.subscribeBtn}>SUBSCRIBE</button>
          </form>
        </div>
      </div>

      
      <div className={styles.linksSection}>
        <div className={styles.socials}>
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={youtube} alt="Youtube" />
        </div>

        <div className={styles.navColumns}>
  
  <div className={styles.column}>
    <span onClick={onAboutClick} className={styles.navLink}>About</span>
    <Link to="/menu">Meals</Link>
    <Link to="/blog">Blog</Link>
  </div>

  
  <div className={styles.column}>
    <Link to="/pricing">Meals Plans</Link>
    <span onClick={onContactClick} className={styles.navLink}>Contact</span>
  </div>
</div>
      </div>

      <div className={styles.copyright}>
        <p>© 2026 by Our Kitchen. Handcrafted by Lochan.</p>
      </div>
    </footer>
  );
};

export default Footer;

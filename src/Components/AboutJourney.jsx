import React from 'react';
import styles from './AboutJourney.module.css';
import kitchenTable from '../assets/kitchenTable.jpg';


const AboutJourney = ({ journeyRef }) => {
  return (
   
    <section className={styles.journeySection} style={{ backgroundImage: `url(${kitchenTable})` }}>
      
      <div ref={journeyRef} className={styles.card}>
        <h2>Our Journey<br />to Wellness</h2>
        
        <h3>CRAFTING DELICIOUS MEALS TO MAKE YOUR LIFE HEALTHIER AND EASIER</h3>
        
        <p>
          Our Kitchen began as a passion project dedicated to wellness, created to prove that healthy eating doesn’t have to be a casualty of a busy schedule. This platform is a curated space where culinary storytelling meets practical nutrition, offering everything from chef-inspired recipes to streamlined meal plans designed for modern lifestyles. The mission is to simplify the journey to health by providing high-quality, accessible resources that empower you to eat better and live easier, one delicious meal at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutJourney;
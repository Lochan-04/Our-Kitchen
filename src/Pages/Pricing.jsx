import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const plans = [
    { id: 1, type: "VEGETARIAN", price: "65" },
    { id: 2, type: "KETO", price: "85" },
    { id: 3, type: "PALEO", price: "85" },
    { id: 4, type: "GLUTEN-FREE", price: "85" },
    { id: 5, type: "FAMILY FRIENDLY", price: "55" },
    { id: 6, type: "VEGAN", price: "85" }
  ];

  return (
    <section className={styles.pricingSection}>
      <h1 className={styles.mainTitle}>Start Your Flavorful Journey<br/> Today</h1>
      <div className={styles.grid}>
        {plans.map((plan) => (
          <div key={plan.id} className={styles.card}>
            <h2 className={styles.planType}>{plan.type}</h2>
            <div className={styles.priceContainer}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>{plan.price}</span>
            </div>
            <p className={styles.interval}>Every week</p>
            <button className={styles.selectBtn}>Select</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
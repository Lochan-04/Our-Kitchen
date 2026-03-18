import React from 'react';
import styles from './Benefits.module.css';

const Benefits = () => {
  const benefitsData = [
    {
      id: 1,
      text: "QUALITY INGREDIENTS ALWAYS",
      styleClass: styles.blobGreen
    },
    {
      id: 2,
      text: "CUSTOMIZABLE PLANS",
      styleClass: styles.blobBlue
    },
    {
      id: 3,
      text: "ECO-FRIENDLY SUSTAINABLE PACKAGING",
      styleClass: styles.blobTan
    },
    {
      id: 4,
      text: "FLEXIBLE AND CONVENIENT DELIVERY",
      styleClass: styles.blobRed
    }
  ];

  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.title}>
        The Benefits of Our<br />Meal Prep Service
      </h2>
      
      <div className={styles.blobContainer}>
        {benefitsData.map((item) => (
          <div key={item.id} className={`${styles.blob} ${item.styleClass}`}>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
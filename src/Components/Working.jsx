import React from 'react';
import styles from './Working.module.css';
import menu from '../assets/menu.png';
import cook from '../assets/cook.png';
import bag from '../assets/bag.png';

const Working = () => {
  const steps = [
    {
      id: 1,
      title: "CHOOSE YOUR PLAN",
      description: "Describe the service and how customers or clients can benefit from it.",
      icon: menu,
    },
    {
      id: 2,
      title: "CUSTOMIZE YOUR MENU",
      description: "Describe the service and how customers or clients can benefit from it.",
      icon: cook,
    },
    {
      id: 3,
      title: "WE COOK & DELIVER",
      description: "Describe the service and how customers or clients can benefit from it.",
      icon: bag,
    }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.stickyHeader}>
        <h1>How It Works</h1>
      </div>

      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className={styles.stepCard} 
            style={{ top: `100px`, zIndex: index + 1 }}
          >
            <div className={styles.content}>
              <img src={step.icon} alt={step.title} className={styles.icon} />
              <div className={styles.text}>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Working;
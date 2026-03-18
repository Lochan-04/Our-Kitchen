import React, { useState } from 'react';

import styles from './FullMenu.module.css';

import { categories, specialRequests } from '../Data/MenuData';

import { useNavigate } from 'react-router-dom';



const FullMenu = () => {

 

  const navigate = useNavigate();

  const [isExiting, setIsExiting] = useState(false);



  const handleNavigation = (path) => {

    setIsExiting(true); 

   

    

    setTimeout(() => {

      navigate(path);

    }, 250);

  };



  return (

    <>

    <div className={`${styles.container} ${isExiting ? styles.fadeOut : ''}`}></div>

    

     

      <section className={styles.header}>

        <h1>Any special requests?</h1>

        <p>We cater to diverse dietary needs</p>

        <div className={styles.blobGrid}>

          {specialRequests.map((req, i) => {

            

            const blobClasses = {

              green: styles.blobGreen,

              blue: styles.blobBlue,

              tan: styles.blobTan,

              red: styles.blobRed,

              darkGreen: styles.blobGreen 

            };



            return (

              <div

                key={i}

                className={`${styles.blob} ${blobClasses[req.type] || ''}`}

              >

                {req.text}

              </div>

            );

          })}

        </div>

      </section>



      

      <section className={styles.menuSection}>

        <h2 className={styles.mainTitle}>

          Tailored Meal Plans for Every <span>Lifestyle</span>

        </h2>

       

        {categories.map((cat, i) => (

          <div key={i} className={styles.categoryBlock}>

            <h3 className={styles.categoryName}>{cat.name}</h3>

            {cat.meals.map((meal) => (

              <div key={meal.id} className={styles.mealRow}>

                <span className={styles.mealTitle}>{meal.title}</span>

                <div className={styles.imageContainer}>

                    <img src={meal.img} alt={meal.title} className={styles.mealImg} />

                </div>

              </div>

            ))}

          </div>

        ))}

       

        <button className={styles.orderBtn} onClick={()=>handleNavigation('/pricing')}>Order Now</button>

      </section>

    

  );

</>

  )

};





export default FullMenu;


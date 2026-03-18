import React from 'react'
import styles from './MealOptions.module.css'
import {mealdata} from '../Data/MealOptions'
import { useNavigate } from 'react-router-dom'

const MealOptions = () => {
   const navigate =  useNavigate();
  return (
    <section>
    <div className={styles.sectionHeader}>
      <h2>Explore Our Diverse Meal Options</h2>
      <p>Tailored Meals to Fit Your Unique Dietary Needs and Preferences</p>
      <div className={styles.cardsContainer}>
        {mealdata.map((meal, index) => (
  <React.Fragment key={meal.id}>
    <div className={styles.card}>
      <img src={meal.icon} alt={meal.title} />
      <h3>{meal.title}</h3>
      <p>{meal.description}</p>
    </div>
    
    {index === 4 && (
      <button className={`${styles.menuButton} ${styles.desktopMenuButton}`}
      onClick={()=> navigate('/menu')}>View Full Menu</button>
    )}
  </React.Fragment>
))}

  
      </div>
      <button
        className={`${styles.menuButton} ${styles.mobileMenuButton}`}
        onClick={() => navigate('/menu')}
      >
        View Full Menu
      </button>
      
    </div>
    </section>
  )
}

export default MealOptions

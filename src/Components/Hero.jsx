import React from 'react'
import restaurantImage from '../assets/restaurantImage.jpg'
import styles from './Hero.module.css'
import Header from './Header'

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <img
        className={styles.heroImage}
        src={restaurantImage}
        alt="Fresh restaurant dishes served on a table"
      />
      <Header />
    </section>
  )
}

export default Hero

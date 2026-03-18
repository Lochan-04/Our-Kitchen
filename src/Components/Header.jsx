import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.heading}>
        The Delicious Way
        <br />
        to Eat <span>Healthy.</span>
      </h1>
      <Link to="/pricing" className={styles.ctaLink}>
        <button className={styles.getStartedBtn}>Get Started</button>
      </Link>
    </div>
  )
}

export default Header

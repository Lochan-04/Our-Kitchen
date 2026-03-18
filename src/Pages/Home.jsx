import React from 'react'

import Hero from '../Components/Hero'
import MealOptions from '../Components/MealOptions'
import AboutJourney from '../Components/AboutJourney'
import Benefits from '../Components/Benefits'
import MakeKitchen from '../Components/MakeKitchen'
import Working from '../Components/Working'
import ReviewCard from '../Components/ReviewCard'

const Home = ({ journeyRef }) => {
  return (
    <div>
      <Hero />
      <MealOptions />
      <Working />
      
      
      
      <div id="journey-section" ref={journeyRef} style={{ scrollMarginTop: '80px' }}>
        <AboutJourney/>
      </div>
      
      <Benefits />
      <ReviewCard />
      <MakeKitchen />
      
    </div>
  )
}

export default Home

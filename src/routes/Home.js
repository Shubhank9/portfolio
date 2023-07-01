import React from 'react'
import Navbar from "../components/Navbar"
import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer"
import PricingCard from "../components/PricingCard"
import Work from "../components/Work"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <PricingCard />
      <Footer />
      
    </div>
  )
}

export default Home

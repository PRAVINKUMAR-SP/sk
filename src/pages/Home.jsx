import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Slider/>
        <Products/>
    </div>
  )
}

export default Home
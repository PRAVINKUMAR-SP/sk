import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'

const Home = () => {
    return (
        <div className="home min-h-screen overflow-x-hidden bg-[#f7f9f7]">
            <Navbar />
            <Slider />
            <Products />
        </div>
    )
}

export default Home
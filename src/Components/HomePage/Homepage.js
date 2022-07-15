import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import MyCarousel from './Carousel/MyCarousel.js'
import Featured from '../Featured/Featured'
const Homepage = () => {
  return (
    <div>
    <NavbarComponent/>
    <MyCarousel/>
    <Featured/>
   
    </div>
  )
}

export default Homepage
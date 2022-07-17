import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import MyCarousel from './Carousel/MyCarousel.js'
import Featured from '../Featured/Featured'
import Newsletter from '../Newsletter/Newsletter'
const Homepage = () => {
  return (
    <div>
    <NavbarComponent/>
    <MyCarousel/>
    <Featured/>
    <Newsletter/>
   
    </div>
  )
}

export default Homepage
import React from 'react'
import Search from '../Search/Search'
import NavbarComponent from '../Navbar/NavbarComponent'
import MyCarousel from './Carousel/MyCarousel.js'
import Featured from '../Featured/Featured'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import Cart from '../Cart/Cart.js'
const Homepage = () => {
  return (
    <div>
    <NavbarComponent/>
    <Cart/>
    <Search/>
    <MyCarousel/>
    <Featured/>
    <Newsletter/>
    <Footer/>
   
    </div>
  )
}

export default Homepage
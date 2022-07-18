import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Footer from '../Footer/Footer'
import Register from './Register.js'
import Newsletter from '../Newsletter/Newsletter'

const RegisterPage = () => {
  return (
    <div>
        <NavbarComponent/>
        <Register/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default RegisterPage
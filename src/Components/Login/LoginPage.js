import React from 'react'
import Footer from '../Footer/Footer'
import NavbarComponent from '../Navbar/NavbarComponent'
import Newsletter from '../Newsletter/Newsletter'
import LoginComponent from '../Login/LoginComponent'
const LoginPage = () => {
  return (
    <div>
    <NavbarComponent/>
    <LoginComponent/>
    <Newsletter/>
    <Footer/>
</div>
  )
}

export default LoginPage
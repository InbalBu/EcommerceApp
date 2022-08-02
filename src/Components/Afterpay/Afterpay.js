import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react'
import styles from './index.module.css'
import success from './success.png'
import NavbarComponent from '../Navbar/NavbarComponent'
import Footer from "../Footer/Footer.js"
import Newsletter from '../Newsletter/Newsletter';


const Afterpay = () => {
  return (
    <div>
        <NavbarComponent/>
    <div className={styles.container}>
        <img src={success} alt="" 
        width="400"
        />
        <h1 className={styles.header}>Success</h1>
        <p className={styles.p}>We received your purchase request<br/> we'll be in touch shortly!</p>
    </div>
    <Newsletter/>
    <Footer/>
    </div>
    
  )
}

export default Afterpay

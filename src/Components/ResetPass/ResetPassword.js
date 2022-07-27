import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Footer from "../Footer/Footer.js"
import Newsletter from '../Newsletter/Newsletter.js'
import styles from "./index.module.css";
import Userfront from "@userfront/core";

const ResetPassword = () => {
  return (
    <div>
        <NavbarComponent/>
    <div className={styles.Container}>
      <form className={styles.Form} >
        <h1>Reset Password here</h1>
    <div className={styles.LoginUserEmail}>
        <p>Email:</p>
    <input name='email' type="text"/>
     </div>
    {/* {error&&<div className={styles.error}></div>} */}

    <button className={styles.btn}  type="submit">Reset Password</button>
   
</form>
    </div>
    <Newsletter/>
    <Footer/>
</div>
  )
  }
export default ResetPassword
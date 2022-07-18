import React from 'react'
import styles from "./index.module.css"
const Register = () => {
    
    function registerUser()
    {
       
    }
  return (
<form className={styles.Form} onSubmit={registerUser}>
        <h1>Create an account</h1>
    <div className={styles.registerUserName}>
        <p>Name:</p>
     <input name='name' type="text"/>
    </div>
    <div className={styles.registerUserEmail}>
        <p>Email:</p>
    <input name='email' type="text"/>
     </div>
     <div className={styles.registerUserPassword}>
         <p>Password:</p>
     <input name='password' type="password"/>
    </div>
    <button className={styles.btn} type="submit">Sign Up</button>
</form>
  )
}

export default Register
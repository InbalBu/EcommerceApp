import React from "react";
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
   <div className={styles.Newsletter_Div}>
   <div className={styles.Discound_Div}>
    <h1>Subscribe to our Newsletter!</h1>
    <h3>Sign up and be the first one to get it</h3>
   </div>
   <div className={styles.Email_Div}>
    <form  className={styles.Form}>
      <input type="email" placeholder="Your Email Address"></input>
      <button>Subscribe</button>
    </form>
   </div>
   </div>
  );
};

export default Newsletter;

import React from "react";
import styles from './Newsletter.module.css'
import emailjs from 'emailjs-com';


function sendEmail(e) {

  e.preventDefault();

  emailjs.sendForm('shoestore_serivce', 'template_rh41sih', e.target, 'Gj73Mpv5pgaQD134m')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
   
}

const Newsletter = () => {
  return (
   <div className={styles.Newsletter_Div}>
   <div className={styles.Discound_Div}>
    <h1>Subscribe to our Newsletter!</h1>
    <h3>Sign up and be the first one to get it</h3>
   </div>
   <div className={styles.Email_Div}>
    <form onSubmit={sendEmail} className={styles.Form}>
      <input type="email" name="email" placeholder="Your Email Address"></input>
      <button type="submit">Subscribe</button>
    </form>
   </div>
   </div>
  );
};

export default Newsletter;

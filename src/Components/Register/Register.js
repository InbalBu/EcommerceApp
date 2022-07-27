import React from 'react'
import styles from "./index.module.css"
import {useNavigate}  from 'react-router-dom';
import { useState } from 'react';
import Cart from '../Cart/Cart'
import axios from 'axios';

const Register = () => {
  
 const [user,setUser] =useState(
  {
    name:"",
    email:"",
    password:""
  }
 );
 const handleChange = ({ currentTarget: input }) => {
  setUser({ ...user, [input.name]: input.value });
};
 const [error,setError]=useState();
const navigate = useNavigate();

 function preventDefault(event)
 {

   event.preventDefault()
   navigate("/login");
 }


    async function registerUser(e)
    {
      e.preventDefault();
      try {
         const url = "http://localhost:8080/api/register";
         const res = await axios.post(url, user);
         console.log(res);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }      
    }
  return (
    <div className={styles.Container}>
      <form className={styles.Form} onSubmit={registerUser}>
        <h1>Create an account</h1>
    <div className={styles.registerUserName}>
        <p>Name:</p>
     <input name='name' onChange={handleChange}  type="text"/>
    </div>
    <div className={styles.registerUserEmail}>
        <p>Email:</p>
    <input name='email' type="text" onChange={handleChange}/>
     </div>
     <div className={styles.registerUserPassword}>
         <p>Password:</p>
     <input name='password' onChange={handleChange}  type="password"/>
    </div>
    {error&&<div className={styles.error}>{error}</div>}
    <button className={styles.btn} type="submit">Sign Up</button>
    <div className={styles.notSignedUp}>
        <a onClick={preventDefault}  href="http://localhost:3000/Login">Already have an account? Log in here</a>
    </div>
</form>
</div>
  )
}

export default Register
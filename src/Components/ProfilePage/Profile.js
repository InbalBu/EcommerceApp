import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Footer from "../Footer/Footer.js"
import Newsletter from '../Newsletter/Newsletter.js'
import styles from "./index.module.css"
import  {useEffect,useCallback}  from 'react';
import { StoreContext } from '../../App';
import profileImg from "./profile-r.png";
import { useContext,useState } from 'react';
const Profile = () => {


const {user, setUser} = useContext(StoreContext); //useContext of user globaly

   
  const[currentTime,setCurrentTime] = useState( new Date().toDateString());

  //#region SaveUserOnRefresh

  const addTodo = useCallback(() => {
     setUser(JSON.parse(localStorage.getItem('user')));
  }, [user]);

   useEffect(() => {
    addTodo();
   }, [addTodo])
   //#endregion SaveUserOnRefresh
  return (

    <div>
         <NavbarComponent/>
    <div className={styles.container}>
           

        <div>
            <img className={styles.img} src={profileImg} alt="profile" />
        </div>
        
        <div>
        <h1 className={styles.name}>Welcome, {user.name} </h1>
        </div>

        <div>
        <p className={styles.email}>Your Email: {user.email}</p>
        <p className={styles.date}>{currentTime} </p>
        <p className={styles.good}>Have a Good Day! Enjoy your shopping.</p>

        </div>

    </div>
    <Newsletter/>
        <Footer/>
    </div>

  
  )
}

export default Profile



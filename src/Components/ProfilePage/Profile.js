import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Footer from "../Footer/Footer.js"
import Newsletter from '../Newsletter/Newsletter.js'
import styles from "./index.module.css"
import  {useEffect,useCallback}  from 'react';
import { StoreContext } from '../../App';
import profileImg from "./profile-r.png";
import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {


const {user, setUser,setIsLogged} = useContext(StoreContext); //useContext of user globaly

   
  const[currentTime,setCurrentTime] = useState( new Date().toDateString());
  const [profilePicture, setProfilePicture] = useState();
  const navigate = useNavigate();



  //#region SaveUserOnRefresh

  const logOut = () => {
    setIsLogged(false);
    localStorage.removeItem('user');
    setUser({});
    navigate("/");
  }
 
  const setLoggedUser = () => {
    setUser(JSON.parse(localStorage.getItem('user')));
  };

  useEffect(() => {
    setLoggedUser();
    if(user)setIsLogged(true);
    else setLoggedUser(false);
  }, setLoggedUser);

   //#endregion SaveUserOnRefresh
  return (

    <div>
         <NavbarComponent/>
    <div className={styles.container}>
           

        <div>
            {user.profilePicture?<img className={styles.img} src={user.profilePicture} alt="profile" />:<img className={styles.img} src={profilePicture} alt="profile" />}
        </div>
        
        <div>
        <h1  className={styles.name}>Welcome, {user.name} </h1>
        </div>

        <div>
        <p className={styles.email}>Your Email: {user.email}</p>
        <p className={styles.date}>{currentTime} </p>
        <p className={styles.good}>Have a Good Day! Enjoy your shopping.</p>
        </div>

        <div>
          <button className={styles.logout} onClick={logOut}>Logout</button>
        </div>

    </div>
    <Newsletter/>
        <Footer/>
    </div>

  
  )
}

export default Profile



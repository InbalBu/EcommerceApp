import React from 'react'
import styles from "./index.module.css";
import { GoogleLogin } from 'react-google-login';
import { StoreContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart'
import { useState ,useContext} from 'react';
import axios from 'axios';
const LoginComponent = () => {
  
  const {setIsLogged,user,setUser}= useContext(StoreContext);
 
  const [loggedUser,setLoggedUser] = useState(
    {
      email :"",
      password:"",
      profilePicture: ""
    } 

  );
 const handleChange = ({ currentTarget: input }) => {
  setLoggedUser({ ...loggedUser, [input.name]: input.value });
};

 const [error,setError]=useState();
const navigate = useNavigate();
 function preventDefault(event)
  {
    event.preventDefault();
    navigate("/register");
  }
   
    async function loginUser(e)
    {
      e.preventDefault();
      try {
         const url = "http://localhost:8080/api/login";
         const res = await axios.post(url,loggedUser);
         const currentUser= res.data.user;
         setUser(currentUser);
         setIsLogged(true);
         localStorage.setItem("user",JSON.stringify(currentUser));
         navigate("/");
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
      <form className={styles.Form} onSubmit={loginUser}>
        <h1>Login Here </h1>
    <div className={styles.LoginUserEmail}>
        <p>Email:</p>
    <input name='email' type="text" onChange={handleChange}/>
     </div>
     <div className={styles.LoginUserPassword}>
         <p>Password:</p>
     <input name='password' type="password" onChange={handleChange}/>
    </div>
    {error&&<div className={styles.error}>{error}</div>}

    <button className={styles.btn} type="submit">Login</button>
    <div className={styles.notSignedUp}>
        <a onClick={preventDefault} href="http://localhost:3000/Login">No account? Click here to SignUp</a> <br/>
        <a href="http://localhost:3000/Reset">Forgot your password? Click here!</a>
    </div>
    {/* <GoogleLogin
        clientId="238297683748-rn5qiksvrlppnufa8nu0atvpudtm9700.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      /> */}
</form>
</div>
  )
  
}

export default LoginComponent
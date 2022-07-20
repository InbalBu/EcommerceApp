import React from 'react'
import styles from "./index.module.css";
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart'

const LoginComponent = () => {

const navigate = useNavigate();
 function preventDefault(event)
  {
    event.preventDefault();
    navigate("/register");
  }
    function loginUser()
    {
       
    }
  return (
    <div className={styles.Container}>
      <form className={styles.Form} onSubmit={loginUser}>
        <h1>Login Here </h1>
    <div className={styles.LoginUserEmail}>
        <p>Email:</p>
    <input name='email' type="text"/>
     </div>
     <div className={styles.LoginUserPassword}>
         <p>Password:</p>
     <input name='password' type="password"/>
    </div>
    <button className={styles.btn} type="submit">Login</button>
    <div className={styles.notSignedUp}>
        <a onClick={preventDefault} href="http://localhost:3000/Register">No account? Click here to SignUp</a>
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
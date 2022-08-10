import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Footer from "../Footer/Footer.js"
import Newsletter from '../Newsletter/Newsletter.js'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../App';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styles from './index.module.css'

// const {cart, setCart,setshowCart,showCart,subtotal, setSubtotal} = React.useContext(StoreContext); 

// pass cart items to the payment 
const Pay = () => {
  const {cart, setCart,setshowCart,showCart,subtotal, setSubtotal} = React.useContext(StoreContext); 
 const navigate = useNavigate();
  //  const price = Number(Array.from(cart)[cart.length-1].subtotal)
  const currency = "USD";
  return (
     
      <div>
        <NavbarComponent/>
        <Cart/>
        <h1 className={styles.header}>Get started</h1>
        <p className={styles.p}>Click here to pay</p>
        <PayPalScriptProvider className={styles.container} options={{"client-id": "Af9QBN13FSgam_kbBCmGsMph5cxnQBnSUwa0l9Xjxdz7p_7kd98p7OMt6Y3C9Oh1j7lhXsqdNv-ofaiz"}}>
          <PayPalButtons className={styles.btn}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    
                    amount: {
                      value: `${localStorage.getItem('subtotal')}`, // just demo 
                    },
                    "payment_preferences": {
                      "auto_bill_outstanding": true,
                      "payment_failure_threshold": 2
                  }
                  }
                ]
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function (details) {
                navigate('/checkout');
              })
            }}
          
          />
        </PayPalScriptProvider>
        <Newsletter/>
        <Footer/>
      </div>
    
  )
}

export default Pay
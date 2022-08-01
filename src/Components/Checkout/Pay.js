import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Footer from "../Footer/Footer.js"
import Newsletter from '../Newsletter/Newsletter.js'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import { StoreContext } from '../../App';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const {cart, setCart,setshowCart,showCart,subtotal, setSubtotal} = React.useContext(StoreContext); 

// pass cart items to the payment 
const Pay = () => {
  const {cart, setCart,setshowCart,showCart,subtotal, setSubtotal} = React.useContext(StoreContext); 

  //  const price = Number(Array.from(cart)[cart.length-1].subtotal)
  const currency = "USD";
  return (
     
      <div>
        <PayPalScriptProvider options={{"client-id": "Af9QBN13FSgam_kbBCmGsMph5cxnQBnSUwa0l9Xjxdz7p_7kd98p7OMt6Y3C9Oh1j7lhXsqdNv-ofaiz"}}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "13.99", // just demo 
                    }
                  }
                ]
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function (details) {
                alert ("Transaction completed"); // success 
              })
            }}
          
          />
        </PayPalScriptProvider>
      </div>
    
  )
}

export default Pay
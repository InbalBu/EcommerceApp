import React, { useState } from 'react'
import styles from './Cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import shoes2 from './shoes2.jpg'
import CardProduct from './cardProduct';
import { StoreContext } from '../../App';
import CloseIcon from '@mui/icons-material/Close';
const Cart = (props) => {

    const {cart, setCart,setshowCart,showCart} = React.useContext(StoreContext); 
  function closeCart()
  {
     setshowCart(false);
  }
    return (
     
   <div style={{ visibility: showCart ? "visible" : "hidden" }}
   className={styles.cartContainer}>
    <div className={styles.cart}>
        <span className={styles.heading}>Basket</span>
        <span onClick={closeCart} className={styles.closeButton}><CloseIcon/></span>

    </div>
          <CardProduct/>
       <div className={styles.totalPrice}>
            <h1>Total: $40.00{props.Subtotal}</h1>
       </div>

       <div className={styles.checkout}>
            <button>Checkout</button>
       </div>

    </div>
  )
}

export default Cart
import React, { useState,useEffect,useCallback } from 'react'
import styles from './Cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import shoes2 from './shoes2.jpg'
import CardProduct from './cardProduct';
import { StoreContext } from '../../App';
import CloseIcon from '@mui/icons-material/Close';
import { Navigate, useNavigate } from 'react-router-dom';
const Cart = (props) => {

    const {cart, setCart,setshowCart,showCart,subtotal, setSubtotal} = React.useContext(StoreContext); 
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();  

    function closeCart()
  {
     setshowCart(false);
  }

  function moveToPay() {
    navigate("/Pay");
  }

 function removeItem(id)
{   
  setCart(Array.from(cart).filter((item, index) =>  {
  setSubtotal(subtotal-(Number(item.price * item.quantity)));
   return Number(id) !== Number(index)
  } ));
}
    return (
   <div style={{ visibility: showCart ? "visible" : "hidden" }}
   className={styles.cartContainer}>
    <div className={styles.cart}>
        <span className={styles.heading}>Basket</span>
        <span onClick={closeCart} className={styles.closeButton}><CloseIcon/></span>

    </div>
        
      {cart&&cart.map((cartItem,index)=><StoreContext.Provider key={index}  value={{cart,setCart,subtotal,setSubtotal}}> <CardProduct  img={cartItem.img} qty={cartItem.quantity}  key={index} id={index} title={cartItem.name}  size={cartItem.size} removeItem={removeItem} price={cartItem.price}/></StoreContext.Provider> )}  
       <div className={styles.totalPrice}>
            <h1>Total:${subtotal}</h1>
       </div>

       <div className={styles.checkout}>
            <button onClick={moveToPay}>Checkout</button>
       </div>

    </div>
  )
}

export default Cart
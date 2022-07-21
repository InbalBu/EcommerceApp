import {React, useState } from 'react'
import styles from './Cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import shoes2 from './shoes2.jpg';
import { StoreContext } from '../../App';
import {useContext} from 'react'
const CardProduct = (props) => {

    const {cart,setCart,subtotal,setSubtotal} = useContext(StoreContext)
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  function increaseQty()
    {
      setQty(qty + 1);
       setSubtotal(subtotal+(Number(props.price)));
    }
    
  function decceaseQty()
     {
      if(qty===1)
      {
        setQty(1);
        setSubtotal(subtotal);
      }
      else
      {
        setQty(qty - 1);
      setSubtotal(subtotal-(props.price));

      } 
     }
  
  return (
    <div>
<div className={styles.productContainer}>
            <img className={styles.img} src={props.img} alt=""/>            
            <h5>{props.title}</h5>
            <p>Size: {props.size}</p>
            <h4>${props.price}</h4>
     </div>

        <div className={styles.quantity}>
            <button className={styles.plusBtn} onClick={increaseQty}>+</button>
                <p>{qty}</p>
            <button className={styles.minusBtn} onClick={decceaseQty}>-</button>
       </div>
       <div className={styles.removeItem}>
            <DeleteIcon onClick={props.removeItem}/>
       </div>

    </div>
    
  )
}

export default CardProduct
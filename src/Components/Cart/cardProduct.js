import {React, useState } from 'react'
import styles from './Cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import shoes2 from './shoes2.jpg';
const CardProduct = (props) => {
  return (
    <div>
<div className={styles.productContainer}>
            <img className={styles.img} src={shoes2} alt=""/>            
            <h5>Nike Airforce{props.title}</h5>
            <p>Size: {props.size}</p>
            <h4>$40{props.price}</h4>
     </div>

        <div className={styles.quantity}>
            <button className={styles.plusBtn}>+</button>
                <p>1</p>
            <button className={styles.minusBtn}>-</button>
       </div>
       <div className={styles.removeItem}>
            <DeleteIcon/>
       </div>

    </div>
    
  )
}

export default CardProduct
import React from "react";
import styles from "./product.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { StoreContext } from '../../App';
import Collapse from 'react-bootstrap/Collapse';
const SinglePageProduct = (props) => {

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(0);
  const [open, setOpen] = useState(false);
  const {cart, setCart,setshowCart,showCart, subtotal, setSubtotal} = React.useContext(StoreContext); 

  function addToCart()
  {
     props.addToCart();
  }
  function increaseQty()
    {
       setQty(qty + 1);
       props.increaseQty();
    }
    
  function decceaseQty()
     {
         setQty(qty - 1);
         props.decceaseQty();
     }

function addSize(event)
{
  event.preventDefault();
  props.addSize((Number(event.target.innerHTML)));
}


  return (
   <div>
         <div>
      <div className={styles.imgDiv}>
        <img src={props.img} alt={props.alt} />
      </div>

      <div className={styles.info}>
        <div className={styles.header}>
            <h1>{props.title}</h1>
        </div>
         <div className={styles.price}>
            <p>{props.price}</p>
        </div>
            <div className={styles.size}>
                <span>Size</span>
                <ul onClick={addSize}>
                  <button className={styles.btnprimary}>39</button>
                  <button className={styles.btnprimary}>40</button>
                  <button className={styles.btnprimary}>41</button>
                  <button className={styles.btnprimary}>42</button>
                  <button className={styles.btnprimary}>43</button>
                  <button className={styles.btnprimary}>44</button>
                </ul>
                </div>

              <div className={styles.quantityDiv}>
                 <div className={styles.quantity}>
                    <button className={styles.plusBtn} onClick={increaseQty}>+</button>
                    <p>{qty}</p>
                    <button className={styles.minusBtn} onClick={decceaseQty}>-</button>
                 </div>
                <div className={styles.add}>
                    <button>
                        <ShoppingBagIcon  onClick={addToCart} className={styles.shopIcon}/>
                        Add to basket
                    </button>
                </div>
              </div>
            </div>      
          </div>

          <button id={styles.collapse}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Description <KeyboardArrowDownIcon/>
      </button>
      <Collapse in={open} className={styles.text}>
        <div id="example-collapse-text">
        As we know that you love the Marathon model, we bring you Nebula, a new chromatic galaxy: The same elegant design, with the technical-sports elastic knit fabric (Knit) and the ultra-light EVA sole with the already characteristic ergonomic memory foam insole.
        </div>
      </Collapse>
   </div>
    
          
  );
};

export default SinglePageProduct;

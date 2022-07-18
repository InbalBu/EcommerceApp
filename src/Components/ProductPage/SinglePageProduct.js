import React from "react";
import styles from "./product.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
const SinglePageProduct = (props) => {
    const [open, setOpen] = useState(false);

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
                <ul>
                    <li>39</li>
                    <li>40</li>
                    <li>41</li>
                    <li>42</li>
                    <li>43</li>
                    <li>44</li>
                    <li>45</li>
                </ul>
                </div>

              <div className={styles.quantityDiv}>
                 <div className={styles.quantity}>
                    <button className={styles.plusBtn}>+</button>
                    <p>1</p>
                    <button className={styles.minusBtn}>-</button>

                 </div>
                <div className={styles.add}>
                    <button>
                        <ShoppingBagIcon className={styles.shopIcon}/>
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

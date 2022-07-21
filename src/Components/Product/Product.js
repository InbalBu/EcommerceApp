import ShoppingBag from '@mui/icons-material/ShoppingBag';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import styles from './product.module.css'
import {useNavigate, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Productpage from '../ProductPage/Productpage';
import { useState } from 'react';
import Cart from '../Cart/Cart'

const Product = (props) => {

  
  const[product,setProduct]=useState({});
    function moveToProductPage(event) 
  {
    event.preventDefault();
     setProduct(
    {
      "title":props.title,
      "img":props.Img,
      "price":props.price,
      "desc":props.desc,
      "size":props.size
    })    
      props.moveToProductPage(product);
  }
  
  return (
    <Card style={{ width: '18rem', "marginTop":"50px" ,"marginLeft":"10%", "marginButtom":"100px" }}>
    <Card.Img 
       src={props.Img}
     />
    <Card.Body className={styles.cardBody}>
        <Card.Text className={styles.sizes}> <span>36</span> <span>37</span> <span>38</span> <span>39</span> <span>40</span> <span>41</span> <span>42</span> <span>43</span> <br/> <span>44</span> <span>45</span> <span>46</span> <span>47</span> </Card.Text>
      <div className={styles.details}>
      <div  className={styles.leftdiv}>
      <Card.Title className={styles.productHeader}>{props.title}</Card.Title>
      <Card.Text className={styles.price}>{props.price} $</Card.Text>
      </div>
    <Button onClick={moveToProductPage} className={styles.btn} variant="primary">
        <ShoppingBag/>
    </Button>
      </div>
    </Card.Body>
  </Card>

  


    
    

  )
}

export default Product
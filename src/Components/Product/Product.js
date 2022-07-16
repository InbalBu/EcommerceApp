import ShoppingBag from '@mui/icons-material/ShoppingBag';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { client } from '../../lib/client';  
import imageUrlBuilder from '@sanity/image-url'
import { urlFor } from '../../lib/client';
import shoes4 from '../HomePage/Carousel/shoes4.jpg'
import styles from './product.module.css'

const Product = (props) => {
  
  return (
    <Card style={{ width: '18rem', "margin-top":"100px" ,"marginLeft":"20%", "margin-bottom":"100px" }}>
    <Card.Img 
       src={props.Img}
     />
    <Card.Body className={styles.cardBody}>
        <Card.Text className={styles.sizes}> <span>36</span> <span>37</span> <span>38</span> <span>39</span> <span>40</span> <span>41</span> <span>42</span> <span>43</span> <br/> <span>44</span> <span>45</span> <span>46</span> <span>47</span> </Card.Text>
      <div className={styles.details}>
      <div  className={styles.leftdiv}>
      <Card.Title className={styles.productHeader}>{props.title}</Card.Title>
      <Card.Text className={styles.price}>{props.price}</Card.Text>
      </div>
    <Button className={styles.btn} variant="primary" >
        <ShoppingBag/>
    </Button>
      </div>
       
    </Card.Body>
  </Card>


    
    

  )
}

export default Product
import React from 'react'
import { useState,useEffect } from 'react';
import { client } from '../../lib/client';
import Product from '../Product/Product';
import { Grid } from '@mui/material';
import styles from './index.module.css'
const Featured = () => {


  //#region SetProducts
  const [products,setProducts]=useState();
  useEffect(() => {
    const getProducts = async () => {   
     const query= `*[_type == "product"] {
        name,
        price,
        details,
        image {
          asset -> {
            _id,
            url
          },
        }
      }`
       const products = await client.fetch(query);
       localStorage.setItem("storeProducts",JSON.stringify(products));
       setProducts(products);
    }
    getProducts();
  }, [])
  //#endregion SetProducts
  
  
  return (
    <div>
    <h1 className={styles.h1} >FEATURED PRODUCTS</h1>
    <Grid 
     alignItems="center"
    justify="center" 
    style={{ minHeight: "100vh" }}
    container>
    {products&&Array.from(products).filter((singleProduct, index) => index < 4).map((singleProduct) =><Grid item xs={12}  md={6} lg={3}><Product price={singleProduct.price} Img={singleProduct.image.asset.url} key={singleProduct.title} title={singleProduct.name}/></Grid>)}
    </Grid>
    </div>
  )
}

export default Featured
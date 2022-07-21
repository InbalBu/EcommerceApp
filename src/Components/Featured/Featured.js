import React from 'react'
import {useNavigate, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import { client } from '../../lib/client';
import Product from '../Product/Product';
import { Grid } from '@mui/material';
import styles from './index.module.css'
const Featured = () => {
  const navigate =useNavigate();

   function moveToProductPage(singleProduct)
  {
    {singleProduct.title&&window.scrollTo(0,0)}
     {singleProduct.title&&navigate("/product",{state:{name:singleProduct.title,price:singleProduct.price,img:singleProduct.img}});}

  }
  //#region SetProductss
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
    textAlign="center"
    style={{ minHeight: "100vh" }}
    container>
    {products&&Array.from(products).filter((singleProduct, index) => index < 4).map((singleProduct) =><Grid className={styles.grid} item xs={12}  md={6} lg={3}><Product moveToProductPage={moveToProductPage}   price={singleProduct.price} Img={singleProduct.image.asset.url} key={singleProduct.title} title={singleProduct.name}/></Grid>)}
    </Grid>
    </div>
  )
}

export default Featured
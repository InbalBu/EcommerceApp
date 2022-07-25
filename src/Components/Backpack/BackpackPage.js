import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Footer from "../Footer/Footer.js"
import Newsletter from '../Newsletter/Newsletter.js'
import { useState,useEffect } from 'react';
import { client } from '../../lib/client';
import { Grid } from '@mui/material';
import Product from '../Product/Product';
import styles from './index.module.css'
import {useNavigate, BrowserRouter as Router, Route, Link } from "react-router-dom";


const BackpackPage = () => {
  
    const navigate =useNavigate();
    
  function moveToProductPage(singleProduct)
  {
     {singleProduct.title&&navigate("/product",{state:{name:singleProduct.title,price:singleProduct.price,img:singleProduct.img}});}

  }

const [products,setProducts]=useState();
  useEffect(() => {
    const getProducts = async () => {   
     const query= `*[_type == "backpack"] {
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
    //    localStorage.setItem("storeProducts",JSON.stringify(products));
       setProducts(products);
    }
    getProducts();
  }, [])

  return (
    <div>
    <NavbarComponent/>
    <h1>Backpacks</h1>
    <Grid 
     alignItems="center"
    justify="center" 
    textAlign="center"
    style={{ minHeight: "100vh" }}
    container>
    {products&&Array.from(products).map((singleProduct) =><Grid className={styles.grid} item xs={12}  md={6} lg={4}><Product visibility="hidden" moveToProductPage={moveToProductPage}  price={singleProduct.price} Img={singleProduct.image.asset.url} key={singleProduct.title} title={singleProduct.name}/></Grid>)}
    </Grid>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default BackpackPage
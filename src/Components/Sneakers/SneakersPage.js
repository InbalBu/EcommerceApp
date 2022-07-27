import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Footer from "../Footer/Footer.js"
import Newsletter from '../Newsletter/Newsletter.js'
import { useState,useEffect } from 'react';
import { client } from '../../lib/client';
import { Grid } from '@mui/material';
import Product from '../Product/Product';
import styles from './sneakers.module.css'
import {useNavigate, BrowserRouter as Router, Route, Link } from "react-router-dom";

const SneakersPage = () => {
  
  const navigate =useNavigate();

  
function moveToProductPage(singleProduct)
{
   {singleProduct.title&&navigate("/product",{state:{name:singleProduct.title,price:singleProduct.price,img:singleProduct.img}});}
}



  const [products,setProducts]=useState();
  useEffect(() => {
    const getProducts = async () => {   
     const query= `*[_type == "sneakers"] {
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




  return (
    <div>
    <NavbarComponent/>
    <h1 className={styles.header}>Sneakers</h1>
    <Grid 
     alignItems="center"
    justify="center" 
    textAlign="center"
    style={{ minHeight: "100vh" }}
    container>
    {products&&Array.from(products).map((singleProduct) =><Grid align="center" className={styles.grid} item xs={12}  md={6} lg={3}><Product moveToProductPage={moveToProductPage}  price={singleProduct.price} Img={singleProduct.image.asset.url} key={singleProduct.title} title={singleProduct.name}/></Grid>)}
    </Grid>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default SneakersPage
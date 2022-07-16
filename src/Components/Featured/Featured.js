import React from 'react'
import { useState,useEffect } from 'react';
import { client } from '../../lib/client';
import Product from '../Product/Product';
import { Grid } from '@mui/material';
const Featured = () => {
  
  const [products,setProducts]=useState([]);
  
  useEffect(() => {
    const getProducts = async () => {   
     const query= `*[_type == "product"] {
        name,
        price,
        image {
          asset -> {
            _id,
            url
          },
        }
      }`
       const products = await client.fetch(query);
       localStorage.setItem("storeProducts",JSON.stringify(products));
       setProducts(JSON.stringify(products));
    }
    getProducts();
  }, [])

  function setProduct()
{
   setProducts(Array.from(JSON.parse(products).map((singleProduct)=><Grid item xs={12}  md={6} lg={4}><Product Img={singleProduct.image.asset.url} title={singleProduct.name}/> </Grid>)));
}
  return (
    <div>
    <h1 onClick={setProduct}>FEATURED PRODUCTS</h1>
    <Grid 
     alignItems="center"
    justify="center" 
    style={{ minHeight: "100vh" }}
    container>
    {products}

    </Grid>


    </div>
  )
}

export default Featured
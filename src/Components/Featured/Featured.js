import React from 'react'
import { useState,useEffect } from 'react';
import { client } from '../../lib/client';
import Product from '../Product/Product';
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
  
  console.log(products);
  //  const products=JSON.parse(localStorage.getItem("storeProducts"));
  // setProducts(Array.from(products).map((singleProduct)=><Product Img={singleProduct.image.asset.url} title={singleProduct.name} 
  //  price={singleProduct.price}></Product>  ));
  
}
  return (
    <div>
    <h1 onClick={setProduct}>FEATURED PRODUCTS</h1>
      {/* {products} */}


    </div>
  )
}

export default Featured
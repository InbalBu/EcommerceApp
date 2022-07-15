import React from 'react'
import { useState } from 'react';
import Product from '../Product/Product';

import { client } from '../../lib/client';  
import imageUrlBuilder from '@sanity/image-url'
const Featured = () => {
  
  const [products,setProducts]=useState([]);
  const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}
  function setProduct()
{
  const products=JSON.parse(localStorage.getItem("storeProducts"));
  setProducts(Array.from(products).map((singleProduct)=><Product Img={urlFor(singleProduct.image).url()} title={singleProduct.name} 
   price={singleProduct.price}></Product>  ));
  
}
  return (
    <div>
    <h1 onClick={setProduct}>FEATURED PRODUCTS</h1>
      {products}


    </div>
  )
}

export default Featured
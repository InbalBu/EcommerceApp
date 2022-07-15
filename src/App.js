import './App.css';
import React from "react";
import { client } from './lib/client';
import { useEffect,useState } from 'react';
function App() {

const[storeProducts,setStoreProducts]=useState([]);
 useEffect(() => {
   const getProducts = async () => {   
     const query = '*[_type == "product"]';
      const products = await client.fetch(query);
      localStorage.setItem("storeProducts",JSON.stringify(products));
       setStoreProducts(JSON.stringify(products));
   }
   getProducts();
 }, [])

async function getName()
{
  const product=JSON.parse(localStorage.getItem("storeProducts"));
  setStoreProducts(Array.from(product).map((singleProduct)=>singleProduct.name   ));
}
//  useEffect(() => {
//   const product=JSON.parse(localStorage.getItem("storeProducts"));
//   setStoreProducts(Array.from(product).map((producti)=>producti.name));
//  },storeProducts)

  return (
    <div className="App">
    <h1 onClick={getName}>hello</h1>
    <h1>{storeProducts}</h1>
    </div>
   
  );
  }


export default App;

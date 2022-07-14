import './App.css';
import React from "react";
import { client } from './lib/client';
import { useEffect,useState } from 'react';
function App({products}) {

const[storeProducts,setStoreProducts]=useState();

useEffect(async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  localStorage.setItem("storeProducts",JSON.stringify(products));
  setStoreProducts(JSON.stringify(products));
  alert(storeProducts)
},[])

// useEffect(() => {
//   const storeProducts= localStorage.getItem("storeProducts");
//   setProducts(JSON.parse(storeProducts));
// },product)

  return (
    <div className="App">
    <h1>{products}</h1>
    </div>
   
  );
  }

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    return {
      props: { products }
    }
  }

export default App;

import './App.css';
import React from "react";
import { client } from './lib/client';
import { useEffect,useState } from 'react';
import Homepage from './Components/HomePage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


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
    <Routes>
      <Route path="/" element={ <Homepage/> } /> 
    </Routes>
  </div>
    // <div className="App">
    //   <Homepage/>
    // </div>
   
  );
  }


export default App;

import './App.css';
import React from "react";
import { client } from './lib/client';
import { useEffect,useState } from 'react';
function App() {

const[storeProducts,setStoreProducts]=useState([]);
// useEffect(() => {
//   const profileImg=JSON.parse(localStorage.getItem("profileImg"));
//    const userFound=JSON.parse(localStorage.getItem("user"));
//    if(profileImg!==null&&profileImg!==undefined&&profileImg!=={})setProfileImage(profileImg);
//    setUser(userFound);
//  const array=JSON.parse(localStorage.getItem('userMemories'));
//  setMemoriesStart(Array.from(array).map((memorie)=>{
//    setIndex(index+1);
//    return <Grid item xs={12} md={6} lg={4}>
//    <MemoryCard 
//      ImgSrc={memorie.ImgSrc}
//      Header={memorie.Header}
//      Body={memorie.Body}
//       Footer={memorie.Footer}
//       id={memorie._id}
//       key={index}
//     onDelete={deleteMemory}
//       /> 
//    </Grid>
//  }));
// }, memoriesStart);

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

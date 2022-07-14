import './App.css';
import React from "react";
import { client } from './lib/client';

function App({products}) {

  return (
    <div className="App">
    <h1>{products.name}</h1>
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

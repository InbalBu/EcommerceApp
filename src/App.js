import './App.css';
import React from "react";
import { useState } from 'react';
import Productpage from './Components/ProductPage/Productpage';
import {Homepage,RegisterPage} from "../src/pages/pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from "react-router-dom";

export const StoreContext = React.createContext();


function App() {

 const [cart,setCart]=useState(1);
 const [showCart,setshowCart]=useState(false);

  return (
    <div className="App">
    <StoreContext.Provider value={{cart,setCart,showCart,setshowCart}}>
    <Routes>
    <Route path="/" element={ <Homepage/> } /> 
     <Route path="/product" element={ <Productpage/> } />  
     <Route path="/register" element={ <RegisterPage/> } />  

     </Routes>
     
    </StoreContext.Provider>

  </div>
  );
  }


export default App;

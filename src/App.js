import './App.css';
import React from "react";
import { useState } from 'react';
import Productpage from './Components/ProductPage/Productpage';
import {Homepage,RegisterPage,LoginPage} from "../src/pages/pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from "react-router-dom";
export const StoreContext = React.createContext();


function App() {

 const [cart,setCart]=useState([]);
 const [showCart,setshowCart]=useState(false);

  return (
    <div className="App">
    <StoreContext.Provider value={{cart,setCart,showCart,setshowCart}}>
    <Routes>
    <Route path="/" element={ <Homepage/> } /> 
     <Route path="/product" element={ <Productpage/> } />  
     <Route path="/register" element={ <RegisterPage/> } />  
     <Route path="/login" element={ <LoginPage/> } />  
     </Routes>
    </StoreContext.Provider>

  </div>
  );
  }


export default App;

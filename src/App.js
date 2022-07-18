import './App.css';
import React from "react";
import Productpage from './Components/ProductPage/Productpage';
import {Homepage} from "../src/pages/pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Homepage/> } /> 
      <Route path="/product" element={ <Productpage/> } /> 

    </Routes>
  </div>
  );
  }


export default App;

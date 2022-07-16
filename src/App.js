import './App.css';
import React from "react";
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
    </Routes>
  </div>
  );
  }


export default App;

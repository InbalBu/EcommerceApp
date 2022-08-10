import './App.css';
import React from "react";
import Search from './Components/Search/Search';
import Profile from './Components/ProfilePage/Profile';
import { useState,useEffect} from 'react';
import Productpage from './Components/ProductPage/Productpage';
import {Pay,SalesPage,ShoppingBagsPage,Homepage,RegisterPage,LoginPage,ShoesPage,SneakersPage,WalletPage,BackpackPage, ResetPassword} from "../src/pages/pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Afterpay from './Components/Afterpay/Afterpay';
export const StoreContext = React.createContext(); // to show on all app
function App() {

//#region constants

const [subtotal, setSubtotal] =useState(0);
 const [cart,setCart]=useState([]);
 const [showCart,setshowCart]=useState(false);
 const [showSearchPage,setShowSearchPage]=useState(false);
  
//  useEffect(() => {
//     if ( cart.length !== 0 ) window.localStorage.setItem('cart', JSON.stringify(cart));
// }, [cart]);

// useEffect(() => {
//   const data = window.localStorage.getItem('cart');
//   if ( data !== "[]" ) setCart(JSON.parse(data))  
// }, []);

useEffect(() => {
  localStorage.setItem('subtotal', JSON.stringify(subtotal));
}, [subtotal]);



 const[isLogged,setIsLogged] = useState(false);
 const [user,setUser] =useState({ email:"",
 password:""});
//#endregion
  return (
    <div className="App">
    <StoreContext.Provider value={{showSearchPage,setShowSearchPage,subtotal, setSubtotal,cart,setCart,showCart,setshowCart, user,setUser,isLogged,setIsLogged}}>
    <Routes>
    <Route path="/" element={ <Homepage/> } /> 
    <Route path="/search" element={ <Search/> } /> 
     <Route path="/product" element={ <Productpage/> } />  
     <Route path="/shoes" element={ <ShoesPage/> } />  
     <Route path="/sneakers" element={ <SneakersPage/> } />  
     <Route path="/wallets" element={ <WalletPage/> } />  
     <Route path="/backpacks" element={ <BackpackPage/> } />  
     <Route path="/shopingbags" element={ <ShoppingBagsPage/>} />  
     <Route path="/sales" element={ <SalesPage/>} />  
     <Route path="/Pay" element={ <Pay/> } />  
     <Route path="/register" element={ <RegisterPage/> } />  
     <Route path="/login" element={ <LoginPage/> } /> 
     <Route path="/Profile" element={ <Profile/> } />  
     <Route path="/Reset" element={ <ResetPassword/> } />  
     <Route path='/checkout' element={<Afterpay/>}/>

     </Routes>
    </StoreContext.Provider>

  </div>
  );
  }


export default App;

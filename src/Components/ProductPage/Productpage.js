import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import SinglePageProduct from "./SinglePageProduct.js"
import shoes2 from './shoes2.jpg'
import { StoreContext } from '../../App';
import {useLocation}  from 'react-router-dom'
const Productpage = () => {

  
  const {cart, setCart,setshowCart,showCart} = React.useContext(StoreContext); 


  const location =useLocation();

  function addToCart()
{
  setCart([
    ...cart,
    {
        name: `${location.state.name}`,
        id:"10",
        price:`${location.state.price}`,
        quantity:`${location.state.quantity}`,
    }
]);
alert(JSON.stringify(cart));
}
  return (
    <div>
        <NavbarComponent/>
       <SinglePageProduct
        img={location.state.img}
        alt ="single product"
        title={location.state.name}
        price={`$${location.state.price}`}
        size="38 39 40 41 42"
        quantity="1"
        addToCart={addToCart}
       />
        <Newsletter/>
        <Footer/>
    </div>
    
  )
}

export default Productpage
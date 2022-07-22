import React from 'react'
import NavbarComponent from '../Navbar/NavbarComponent'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import SinglePageProduct from "./SinglePageProduct.js"
import shoes2 from './shoes2.jpg'
import { StoreContext } from '../../App';
import {useState} from 'react';
import {useLocation}  from 'react-router-dom'
import Cart from '../Cart/Cart'

const Productpage = () => {

  const {cart, setCart,setshowCart,showCart,subtotal, setSubtotal,qty, setQty} = React.useContext(StoreContext); 
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(0);

  const location =useLocation();

  function increaseQty()
  {
     setQty(qty + 1);
  }
  
  function decceaseQty ()
   {
      setQty(qty - 1);

    }
  function addSize(size)
  {
    setSize(size);
  }

  function addToCart()
{
   setCart([
     ...cart,
     {
        name: `${location.state.name}`,
        id:cart.length,
        price:`${location.state.price}`,
         quantity:`${qty}`,
         img:`${location.state.img}`,
         size: `${size}`,
     }
 ]);
 setSubtotal(subtotal+(qty*location.state.price));
}
  return (
    <div>
        <NavbarComponent/>
        <Cart/>
       <SinglePageProduct
        increaseQty={increaseQty}
        decceaseQty={decceaseQty}
        img={location.state.img}
        alt ="single product"
        title={location.state.name}
        price={`$${location.state.price}`}
         addSize={addSize}
        quantity="1"
        addToCart={addToCart}
       />
        <Newsletter/>
        <Footer/>
    </div>
    
  )
}

export default Productpage
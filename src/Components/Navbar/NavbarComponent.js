import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import SearchPerson from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';
 import { StoreContext } from '../../App';
 import { useNavigate} from 'react-router-dom';
import Product from '../Product/Product';
const NavbarComponent = () => {
  const {showSearchPage,setShowSearchPage,isLogged,cart,setCart,setshowCart,showCart, user, setUser} = React.useContext(StoreContext);  
const navigate = useNavigate();
  function showCartClick()
  {
    setshowCart(!showCart);
  }

  function showSearchPageClick()
  {
    setShowSearchPage(!showSearchPage);
  }
  function navigateToLogin()
  {
    if(isLogged) navigate("/P rofile");
    else navigate("/login");

  }



  return (
<Navbar className={styles.meauto} expand="lg">
      <Container>
        <Navbar.Brand as={Link}   className={styles.logo} to="/">Shoe Store</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
        <div className={styles.overflow}>
          <Nav className='nav'>
          <Nav.Link  as={Link} className={styles.navLink}  to="/sales">Sales</Nav.Link>
            <Nav.Link  as={Link}  className={styles.navLink} to="/sneakers">Sneakers</Nav.Link>
            <Nav.Link  as={Link} className={styles.navLink} to="/shoes">Shoes</Nav.Link>
            <NavDropdown className={styles.navLink} title="Accesories" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link}  className={styles.navLink} to="/backpacks" id={styles.dropDown}>Backpack</NavDropdown.Item>
            <NavDropdown.Item as={Link} className={styles.navLink} to="/shopingbags" id={styles.dropDown}>
              Shoppers Bags
            </NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/wallets" className={styles.navLink} id={styles.dropDown}>Wallets</NavDropdown.Item>
          </NavDropdown>
          <SearchIcon onClick={showSearchPageClick} className={styles.SearchIcon}/>
          <SearchPerson  onClick={navigateToLogin} className={styles.SearchPerson}/>
          <ShoppingBagIcon onClick={showCartClick} className={styles.ShoppingBagIcon}> 
          </ShoppingBagIcon>
          <span className={styles.badge}>{cart.length}</span>


          </Nav>
          </div>

        </Navbar.Collapse>

      </Container>

      
    </Navbar>
  )
}

export default NavbarComponent
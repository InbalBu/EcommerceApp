import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import SearchPerson from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';
 import { StoreContext } from '../../App';
 import { useNavigate } from 'react-router-dom';
const NavbarComponent = () => {
  const {cart,setCart,setshowCart,showCart} = React.useContext(StoreContext);  
const navigate = useNavigate();
  function addToCart()
  {
    setshowCart(!showCart);
  }
  function navigateToLogin()
  {
    navigate("/login");

  }
  return (
   
    
<Navbar className={styles.meauto} expand="lg">
      <Container>
        <Navbar.Brand className={styles.logo} href="/">Shoe Store</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
        <div className={styles.overflow}>
          <Nav className='nav'>
          <Nav.Link className={styles.navLink} href="#home">Sales</Nav.Link>
            <Nav.Link  className={styles.navLink} href="#link">Sneakers</Nav.Link>
            <Nav.Link  className={styles.navLink} href="#link">Shoes</Nav.Link>
            <NavDropdown className={styles.navLink} title="Accesories" id="basic-nav-dropdown">
            <NavDropdown.Item  className={styles.navLink} href="#action/3.1">Backpack</NavDropdown.Item>
            <NavDropdown.Item className={styles.navLink} href="#action/3.2">
              Shoppers Bags
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className={styles.navLink}>Wallets</NavDropdown.Item>
          </NavDropdown>
          <SearchIcon className={styles.SearchIcon}/>
          <SearchPerson  onClick={navigateToLogin} className={styles.SearchPerson}/>
          <ShoppingBagIcon onClick={addToCart} className={styles.ShoppingBagIcon}> 
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
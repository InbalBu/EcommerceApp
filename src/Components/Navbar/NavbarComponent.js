import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import SearchPerson from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  return (
    
<Navbar className={styles.meauto} expand="lg">
      <Container>
        <Navbar.Brand className={styles.logo} href="/">Shoe Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
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
          <SearchPerson  className={styles.SearchPerson}/>
          <ShoppingBagIcon className={styles.ShoppingBagIcon} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
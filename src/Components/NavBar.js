import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
    const cartProducts = useSelector((state)=> state.cart.data)
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Brand as={Link} to="/">Redux-Toolkit</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Nav.Link as={Link} to="/cart">My Bag <AiOutlineShoppingCart /> {cartProducts.length}</Nav.Link> 
          </Navbar.Text>                  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

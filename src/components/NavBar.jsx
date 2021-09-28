import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, NavDropdown, Container} from 'react-bootstrap';
import logo from './img/logo.png';
import './style/Style.css';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import carritoContext from '../context/cartContext';
import React, {useState, useEffect, useContext} from "react";


function NavBar(){
  const { carrito, setCarrito } = useContext(carritoContext);
 var id;
return <div>
    <Navbar collapseOnSelect expand="lg" className='title'>
  <Container>
   <img src={logo} className="img-navbar"></img>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
   
     <Nav.Link><Link className="enlace" to="/">Inicio</Link></Nav.Link> 
    <Nav.Link><Link className="enlace" to="/category/:id">Choperas</Link></Nav.Link>
    <Nav.Link><Link className="enlace" to="/category">Barriles</Link></Nav.Link>
      
    <Nav.Link><Link className="enlace" to="/Cart">Carrito </Link></Nav.Link>
    <Nav.Link><Link className="enlace" to="/Cart"  >{!carrito.length != 0 ?  <></> : <>{carrito.length}</> } </Link></Nav.Link>
    <NavDropdown className="enlace" title="Categorias"  id="basic-nav-dropdown">
    
          <NavDropdown.Item  ><Link to={`/category/${id="chopera a hielo"}`} className="enlace">Chopera Hielo</Link></NavDropdown.Item>
          <NavDropdown.Item  ><Link to={`/category/${id="chopera electrica"}`} className="enlace">Chopera Electrica</Link></NavDropdown.Item>
          <NavDropdown.Item  ><Link to={`/category/${id="chopera bar"}`} className="enlace">Chopera Bar</Link></NavDropdown.Item>
    </NavDropdown>
      
    </Nav>
    
  </Navbar.Collapse> 
  </Container>
</Navbar>
</div>
}
export default NavBar;




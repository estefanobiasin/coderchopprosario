import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, NavDropdown, Container} from 'react-bootstrap';
import logo from './img/logo.png';
import './style/Style.css';
import { Link } from "react-router-dom";
import carritoContext from '../context/cartContext';
import React, {useContext} from "react";


function NavBar(){
  const { carrito } = useContext(carritoContext);
return <div>
    <Navbar collapseOnSelect expand="lg" className='title'>
  <Container>
   <img src={logo} className="img-navbar" alt="logo"></img>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
   
     <Nav.Link><Link className="enlace" to="/">Inicio</Link></Nav.Link> 
    <Nav.Link><Link className="enlace" to="/category/:id">Choperas</Link></Nav.Link>
    <Nav.Link><Link className="enlace" to="/category">Barriles</Link></Nav.Link>
      
    <Nav.Link><Link className="enlace" to="/Cart">{`Carrito ${carrito?.length || ''}`}</Link></Nav.Link>
    <NavDropdown className="enlace" title="Categorias"  id="basic-nav-dropdown">    
          <NavDropdown.Item  ><Link to={`/category/chopera a hielo`} className="enlace">Chopera Hielo</Link></NavDropdown.Item>
          <NavDropdown.Item  ><Link to={`/category/chopera electrica`} className="enlace">Chopera Electrica</Link></NavDropdown.Item>
          <NavDropdown.Item  ><Link to={`/category/chopera bar`} className="enlace">Chopera Bar</Link></NavDropdown.Item>
    </NavDropdown>
      
    </Nav>
    
  </Navbar.Collapse> 
  </Container>
</Navbar>
</div>
}
export default NavBar;




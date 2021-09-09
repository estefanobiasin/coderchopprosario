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
  console.log("este es el tamaño del carrito", carrito.length);
return <div>
    <Navbar collapseOnSelect expand="lg" className='title'>
  <Container>
   <img src={logo} className="img-navbar"></img>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
   
     <Link className="enlace" to="/">Inicio</Link>
     
      <Link className="enlace" to="/category/:id">Categorias</Link>
      <Link className="enlace" to="/category/:id">Choperas</Link>
      <Link className="enlace" to="/category/:id">Barriles</Link>
      <Link className="enlace" to="/Cart">Carrito </Link>
      <Link className="enlace" to="/Cart"  ><CartWidget/> {carrito.length}</Link>   
    
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Contacto</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Ubicacion
     
      </Nav.Link>
      
    </Nav> 
  </Navbar.Collapse> 
  </Container>
</Navbar>
</div>
}
export default NavBar;


// import { Link } from "react-router-dom";

// export default function NavBar() { */}
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/item-detail-container">item detail container</Link>
//         </li>
//         <li>
//           <Link to="/episodes">episodes</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

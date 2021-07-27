
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, NavDropdown, Container} from 'react-bootstrap';
import logo from './logo.png';

function NavBar(){
    // return <div className="title">Chopp Rosario  
    //         <a href="#" >Choperas</a>
    //         <a href="#">Barriles</a>
    //         <a href="#"> Servicios </a>
    //         <a href="#"> Tienda </a>
    //         <button className="btn btn-primary">Boton</button>
    // </div>
    return <div>
    <Navbar collapseOnSelect expand="lg" className='title'>
  <Container>
   <img src={logo} className="img-navbar"></img>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features" >Inicio</Nav.Link>
      <Nav.Link href="#pricing">Choperas</Nav.Link>
      <Nav.Link href="#features" >Barriles</Nav.Link>
      <Nav.Link href="#features" >TIENDA</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
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
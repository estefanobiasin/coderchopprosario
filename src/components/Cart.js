
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/Style.css";
import React, {useState, useEffect, useContext} from "react";
import {Card,Img,Body,Title,Text,Button,Container,Row,Col,ButtonGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";
import carritoContext from '../context/cartContext';


function Cart() {
    const { carrito } = useContext(carritoContext);
  return (
      
    <Container>
        <Row>
        <h1>Usted Esta por comprar : </h1>
            {carrito.map((prod) => (
            
          <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.pictureUrl} className='img-card' />
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>
              
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Col>
          ))}
          </Row>
          </Container>
    
        
  );
}
export default Cart;
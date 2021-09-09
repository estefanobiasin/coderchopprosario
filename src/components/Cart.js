

import "./style/Style.css";
import React, {useState, useEffect, useContext} from "react";
import {Card,Img,Body,Title,Text,Button,Container,Row,Col,ButtonGroup,CardGroup,Table} from 'react-bootstrap';
import { Link } from "react-router-dom";
import carritoContext from '../context/cartContext';
import './style/Style.css';



function Cart() {
  const { carrito, setCarrito } = useContext(carritoContext);

    const suma =()=>{
      console.log("funcion suma");
      return carrito.reduce((acc,item)=>{
        return acc+(item.cantidad*item.price)
      },0)
    }

    const eliminar = (id)=>{
      const aux = carrito.filter( carrito => carrito.id != id);
     setCarrito(aux);
      
    }
    if (carrito.length==0){
      return(
        <>
          <Link to="/">VAMOS A COMPRAR !!!</Link>
        </>
      )
    }
    else{
      return (
        <div>
    
   
        <table className="tableStyle" >
  <thead>
    
    <tr className="tr">
      <th className="th2"></th>
      <th className="th2">Producto</th>
      <th className="th2">Cantidad</th>
      <th className="th2">Precio unitario</th>
      <th className="th2">Sub Total</th>
    </tr>
  </thead>
  <tbody>
  {carrito.map((prod) => (
    <tr >
      <td className="td1"><Card.Img variant="top" src={prod.pictureUrl} className='img-cart' /> 
      <Button className="btnCompra" variant="danger" onClick={() => eliminar(prod.id)}>Eliminar</Button>
      </td>
      
      <td className="td2">{prod.title}</td>
      <td className="td2">{prod.cantidad}</td>
      <td className="td2">${prod.price}</td>
      
      <td className="td2">${prod.price * prod.cantidad}</td>
    </tr>
    ))}
    <tr> 
      <th className="th2">TOTAL A PAGAR</th>
      <th className="th2">${suma()}</th>
    </tr>
  </tbody>
</table>
    

        </div>
            
      );
  }
}




export default Cart;


 
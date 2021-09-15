import "./style/Style.css";
import React, {useState, useEffect, useContext} from "react";
import {Card,Button,Form,Control} from 'react-bootstrap';
import { Link } from "react-router-dom";
import carritoContext from '../context/cartContext';
import './style/Style.css';
import { getData } from './../firebase';
import { FirebaseError } from "@firebase/util";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { doc, setDoc, Timestamp } from "firebase/firestore";



function Cart() {
  const { carrito, setCarrito } = useContext(carritoContext);
  const valida=false;
  
  const docData = {
    Name: "ESTEFANO",
    email: "estefanp@algo.com",
    phone:'1234654',
};
  
    
      const handBuy= async()=>{
      console.log("finalizar compra");
      const db = getData();
      
      const orderCollection = collection (getData(), 'orders');
      const order ={
        buyer:docData,
        items:carrito,
        total:suma(),
        
      };
    
      const orderReference = await setDoc(doc(db, "orders","cliente 3"), order);
      
    }
  
  function validar(){
   const usuario= document.getElementById('nombre').value;
   const telefono= document.getElementById('telefono').value;
   const correo= document.getElementById('correo').value;
    
    if (usuario.length==0){
        alert ("debe ingresar un usuario");
    }else{
      if (telefono.length==0){
        alert ("debe ingresar un telefono");
      }else{
        if (correo.length==0){
          alert('debe ingresar un correo')
        }else{
          handBuy();

        }
      }
    }
   
  }
  
    const suma =()=>{
      
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
<>
    <h2 className="formulario">Ingrese sus Datos:</h2>
  <Form.Control size="lg" type="text" className="formulario" id="nombre"  placeholder="Nombre y Apellido" />
  <br />
  <Form.Control size="lg" type="text" className="formulario" id="telefono" placeholder="Telefono" />
  <br />
  <Form.Control size="lg" type="text" className="formulario" id="correo" placeholder="Correo Electronico" />
</>
<Button className="btnCompra" variant="success" className="finalizar" onClick={validar} >Finalizar Compra</Button>
  


        </div>
            
      );
  }
}




export default Cart;


 
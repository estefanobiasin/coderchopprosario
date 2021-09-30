import "./style/Style.css";
import React, { useState, useContext } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import carritoContext from '../context/cartContext';
import './style/Style.css';
import { getData } from './../firebase';
import "firebase/compat/firestore";
import 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';



function Cart() {
  const { carrito, setCarrito } = useContext(carritoContext);
  const [compra, setCompra] = useState(false);
  const [formValues, setFormValues] = useState({ nombre: '', telefono: '', correo: '', correovalida: '' });

  const handBuy = async (docData) => {

    const db = getData();

    const order = {
      buyer: docData,
      items: carrito,
      total: suma(),
      date: new Date(),
    };

    const docRef = await addDoc(collection(db, "orders"), {
      order
    });

    setCompra(docRef.id);
    setCarrito([])
  }

  function finalizarCompra() {    
    if(!esValido()) return;

    const { nombre, correo, telefono } = formValues;
    const docData = {
      Name: nombre,
      email: correo,
      phone: telefono,
    };
    handBuy(docData);
  }

  const esValido = () => {
    const { nombre, correo, telefono, correovalida } = formValues;

    if (!nombre) {
      alert("debe ingresar un usuario");
      return false;
    }
    if (!telefono) {
      alert("debe ingresar un telefono");
      return false;
    }
    if (!correo) {
      alert('debe ingresar un correo')
      return false;
    }
    if (correo !== correovalida) {
      alert('los correos deben ser iguales')
      return false;
    }

    return true;
  }

  const suma = () => {

    return carrito.reduce((acc, item) => {
      return acc + (item.cantidad * item.price)
    }, 0)
  }

  const eliminar = (id) => {
    const aux = carrito.filter(carrito => carrito.id !== id);
    setCarrito(aux);

  }

  if (carrito.length === 0) {
    return <Link to="/">VAMOS A COMPRAR !!!</Link>
  }
  
  return (
    <div>
      <div className="content">
        {compra ?
          <>
            <h2 className="msj">Tu numero de compra es de compra es {compra} </h2>
            <Link to="/">Seguir Comprando !!!</Link>
          </>
          :
          <>
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
                  <tr>
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
              <Form.Control size="lg" type="text" className="formulario" id="nombre" placeholder="Nombre y Apellido" value={formValues.nombre} onChange={(e) => setFormValues({ ...formValues, nombre: e.target.value })} />
              <br />
              <Form.Control size="lg" type="text" className="formulario" id="telefono" placeholder="Telefono" value={formValues.telefono} onChange={(e) => setFormValues({ ...formValues, telefono: e.target.value })} />
              <br />
              <Form.Control size="lg" type="text" className="formulario" id="correo" placeholder="Correo Electronico" value={formValues.correo} onChange={(e) => setFormValues({ ...formValues, correo: e.target.value })} />
              <br />
              <Form.Control size="lg" type="text" className="formulario" id="correovalida" placeholder="Repita correo electronico" value={formValues.correovalida} onChange={(e) => setFormValues({ ...formValues, correovalida: e.target.value })} />
            </>
            <Button className="btnCompra finalizar" variant="success" onClick={finalizarCompra} >Finalizar Compra</Button>
          </>
        }

      </div>
    </div>
  );
}




export default Cart;



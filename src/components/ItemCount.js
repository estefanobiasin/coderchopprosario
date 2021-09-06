import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup,Button} from 'react-bootstrap';
import "./style/Style.css";
import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import carritoContext from '../context/cartContext';
import {data} from "./products";
export default function ItemCount ({stok, inicio, onAdd, greeting}){
    const [cont,setCont]= useState(0);
    const { products, setProducts,carrito, setCarrito,agregar } = useContext(carritoContext);
    const producto=greeting;
    let ok=true;
    
    
    const agrega = ()=>{
    agregar (producto,inicio);
    }
   
    const sumar = ()=> {
        if (inicio < stok) {
        onAdd(inicio+1)
        }
    }
    const restar = ()=> {
        if (inicio > 0) {
        onAdd(inicio-1)
        }
    }
    console.log ("este es carrito", carrito);
    return(
        <div className='cont'>
           
             <h2>Carrito : {inicio} </h2>
             

            <br/>
            <ButtonGroup aria-label="Basic example">
            <Button variant="secondary"
             onClick={sumar}
            >Agregar</Button>


            <Button variant="secondary"
            onClick={restar}
            >Quitar</Button>
            </ButtonGroup>
            <br/>
            <div className="mb-2" className='btnagrega'>
            {inicio > 0 && 
                                            <div className="mb-2 " className='btnagrega'>
                                            <Link to="/Cart">
                                                <button onClick={agrega}>Finalizar Compra</button>
                                            
                                            </Link>   
                                          
                                              
                                            </div>

                             }
                
            </div>
        </div>
    )

}


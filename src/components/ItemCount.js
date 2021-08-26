import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup,Button} from 'react-bootstrap';
import "./style/Style.css";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function ItemCount ({stok, inicio, onAdd}){
    const [cont,setCont]= useState(0);
    console.log("este es stock", {stok});
    console.log("este es ITEM", {inicio});
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
                                               
                                            <Link className="enlace" to="/cart">Finalizar Compra</Link>
                                              
                                            </div>
                             }
                
            </div>
        </div>
    )

}
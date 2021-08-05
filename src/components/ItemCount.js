import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup,Button} from 'react-bootstrap';
import './NavBar.css';
import React, {useState, useEffect} from "react";

export default function ItemCount ({stok, inicio}){
    const [cont,setCont]= useState(0);
   
    const sumar = ()=> {
        if (cont < stok) {
        setCont(cont+1)
        }
    }
    const restar = ()=> {
        if (cont > inicio) {
        setCont(cont-1)
        }
    }
    return(
        <div className='cont'>
           
             <h2>Carrito : {cont} </h2>
             

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
                <Button variant="primary" size="lg">
                Agregar Al Carrito
                </Button>{' '}
                
            </div>
        </div>
    )


}
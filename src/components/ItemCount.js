import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup,Button} from 'react-bootstrap';
import './NavBar.css';
import React, {useState, useEffect} from "react";
export default function ItemCount ({stok}){
    const [cont,setCont]= useState(0);
    const [stock,setStock]=useState(4);
    useEffect(() =>{
        
    })
    return(
        <div className='cont'>
           
             <h2>Carrito : {cont}</h2>

            <br/>
            <ButtonGroup aria-label="Basic example">
            <Button variant="secondary"
             onClick={()=> {
                if (cont < stock) {
                setCont(cont+1)
                }
            }
            }
            >Agregar</Button>
            
            <Button variant="secondary"
            onClick={()=> {
                if (cont > 0) {
                setCont(cont-1)
                }
            }
            }
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
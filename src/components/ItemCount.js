import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button } from 'react-bootstrap';
import "./style/Style.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carritoContext from '../context/cartContext';
export default function ItemCount({ stok, inicio, onAdd, prod }) {
    const { agregar } = useContext(carritoContext);
    const producto = prod;

    const agrega = () => {
        agregar(producto, inicio);
    }

    const sumar = () => {
        if (inicio < stok) {
            onAdd(inicio + 1)
        }
    }
    const restar = () => {
        if (inicio > 0) {
            onAdd(inicio - 1)
        }
    }

    return (
        <div className='cont'>

            <h2>Carrito : {inicio} </h2>


            <br />
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary"
                    onClick={sumar}
                >Agregar</Button>


                <Button variant="secondary"
                    onClick={restar}
                >Quitar</Button>
            </ButtonGroup>
            <br />
            <div className="mb-2 btnagrega">
                {inicio > 0 &&
                    <div className="mb-2 btnagrega">

                        <Button className="boton" onClick={agrega}>Agregar al carrito</Button>
                        <br></br>
                        <Link to="/Cart"><Button variant="success">Finalizar Compra !</Button>
                        </Link>
                    </div>

                }

            </div>
        </div>
    )

}


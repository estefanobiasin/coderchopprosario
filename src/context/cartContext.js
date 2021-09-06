import Reac, {createContext, useState} from 'react';
import {data} from "./products";




const carritoContext = createContext({});

export const CarritoProvider = ({children})=>{


    const [products,setProducts]= useState([data]);
    const [carrito,setCarrito] = useState([]);
    
    const estaEnCarrito = (producto)=>{
          
        for (let i=0; i<carrito.length ; i++){
            let aux= carrito[i];
            console.log("este es aux entero", aux);
            if (aux['id']== producto.id) {
                console.log("este es aux", aux['id']);
                return true;
                
            }
        }
        return false;
    }    


const agregar = (producto, inicio)=>{   
    if (!estaEnCarrito (producto)){   
        const carritoBorrador =[...carrito];
            carritoBorrador.push({...producto,cantidad:inicio});
            setCarrito(carritoBorrador);
            alert("el producto se agrego al carrito");
        } 
        else{
            
            alert("el producto ya se encuenctra en el carrito");
            
        }
    }

    return (
        <carritoContext.Provider value={{products, setProducts, carrito, setCarrito,agregar}}>
            {children}
        </carritoContext.Provider>
    );
}

export default carritoContext;
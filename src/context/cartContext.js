import Reac, {createContext, useState} from 'react';
 import {data} from "./products";




const carritoContext = createContext({});

export const CarritoProvider = ({children})=>{


    const [products,setProducts]= useState([data]);
    const [carrito,setCarrito] = useState([]);
    
    const estaEnCarrito = (producto, inicio)=>{
          
        for (let i=0; i<carrito.length ; i++){
            let aux= carrito[i];
           
            if (aux['id']== producto.id) {
               
                carrito[i].cantidad= carrito[i].cantidad + inicio;                
                return true;
                
            }
        }
        return false;
    }    


const agregar = (producto, inicio)=>{   
    if (!estaEnCarrito (producto, inicio)){   
        const carritoBorrador =[...carrito];
            carritoBorrador.push({...producto,cantidad:inicio});
            setCarrito(carritoBorrador);
            alert("el producto se agrego al carrito");
        } 
        else{
            
            alert("Se actualizo la cantidad");
            
        }
    }

    return (
        <carritoContext.Provider value={{products, setProducts, carrito, setCarrito,agregar}}>
            {children}
        </carritoContext.Provider>
    );
}

export default carritoContext;
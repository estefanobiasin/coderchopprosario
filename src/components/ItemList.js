import Item from "./Item";
import {data} from "./products";
import "./style/Style.css";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getData } from './../firebase';
import React, { useState, useEffect } from 'react';


const ItemList = () => {
  // 1 creo un estado para mostrar la lista
  const [productos, setProductos] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    // useEffect no puede asincronico

    // 2 PIDO LOS DATOS (truco: usar async/await)
    const getProductos = async () => {
      // 3 obtener colleccion
      setLoading(true);
      const productosCollection = collection (getData(), 'productos');

      // 4 obtener Snapshot (foto de la lista en ese momento)
      const productosSnapshot = await getDocs(productosCollection);

      // 5 obtener datos en forma de json con data()
      const productosList = productosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // 6 setear el estado con la lista
      setProductos(productosList);
      setLoading(false);
    };
    // segunda parte del truco ejecutar la funcion asincronica
    getProductos();

    // array vacio, se ejecuta cuando se monta <app />
  }, []);
  console.log ("este es productos", productos);

  return loading ? (
    <>
      <h2 className="text"><div className="loader"></div></h2>  
    </>
    
  ) : (
     <div>
         <Item greeting={productos} />
    </div>
);
}
export default ItemList;
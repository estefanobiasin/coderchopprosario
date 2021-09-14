import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style/Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Img,Body,Title,Text,Button,Container,Row,Col} from 'react-bootstrap';
import ItemDetail from "./ItemDetail";

import { collection, getDocs, query, where } from 'firebase/firestore';
import { getData } from './../firebase';
import { FirebaseError } from "@firebase/util";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const ItemDetailContainer = () => {
  // 1 creo un estado para mostrar la lista
  const [producto, setProducto] = useState([]);
  const [loading,setLoading] = useState(false);
  const { identificador } = useParams();

  useEffect(() => {
    // useEffect no puede asincronico

    // 2 PIDO LOS DATOS (truco: usar async/await)
    const getProduct = async () => {
      // 3 obtener colleccion
      
      // creo la query para filtrar
    //const productosQuery = query(productosCollection, where('id', '==', 'KQJ1lOV8K3NU1plHlaps' ));
      try {
        // const productosSnapshot = await getDocs(productosQuery);
        const productosCollection = await firebase.firestore().collection('productos').doc(identificador).get();
        // 5 obtener datos en forma de json con data()
        // const electricList = productosSnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // }));

        // 6 setear el estado con la lista
        //console.log("este es el resultado de la query",{ electricList });
        const product ={id:productosCollection.id, ...productosCollection.data()};
        setProducto(product);
        setLoading(false);
        console.log("productoes collection", productosCollection);
      } catch (e) {
        console.log(e);
      }
    };
    // segunda parte del truco ejecutar la funcion asincronica
    getProduct();
    setLoading(true);
    // array vacio, se ejecuta cuando se monta <app />
  }, []);


  return loading ? (
    <>
      <h2 className="text"><div className="loader"></div></h2>  
    </>
    
  ) : (
     <div>
         <ItemDetail prod={producto} />
    </div>
);
}
export default ItemDetailContainer;


     


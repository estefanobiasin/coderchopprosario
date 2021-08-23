import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Img,Body,Title,Text,Button,Container,Row,Col} from 'react-bootstrap';
import ItemDetail from "./ItemDetail";
import {data} from "./products";

export default function ItemDetailContainer() {
    const { useEffect, useState } = require("react");
    const [products, setProducts] = useState([]);
     const { identificador } = useParams();
    
  useEffect(() => {
     new Promise((resolve, reject) => {
      
      setTimeout(() => resolve(data), 2000);
    })
      .then((dataResolve) => {
        
        setProducts(dataResolve);
      })
      .catch((error) => {
        console.log("error al resolver la promesa", error);
      });
  }, []);

  const filtro = products.find(function (product) {
	return product.id === identificador;
  
    }); 
  
  return (
    <>

        {filtro &&
            
            <ItemDetail greeting={filtro} />
   
        }
    </>
  );

}


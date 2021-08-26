import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style/Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Img,Body,Title,Text,Button,Container,Row,Col} from 'react-bootstrap';
import ItemDetail from "./ItemDetail";
import {data} from "./products";

export default function ItemDetailContainer() {
    const { useEffect, useState } = require("react");
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
     const { identificador } = useParams();
    
  useEffect(() => {
    new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => resolve(data), 2000);
    })
      .then((dataResolve) => setProducts(dataResolve))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filtro = products.find(function (product) {
	return product.id === identificador;
  
    }); 
  
    return loading ? (
      <>
      <h2 className="text"><div className="loader"></div></h2>
  
        
      </>
      
    ) :
    (
    <>

        {filtro &&
            
            <ItemDetail greeting={filtro} />
   
        }
    </>
  );

}


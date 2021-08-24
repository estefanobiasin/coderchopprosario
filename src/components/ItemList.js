import Item from "./Item";
import {data} from "./products";
import "./styleloading.css";
const { useEffect, useState } = require("react");
export default function ItemList() {
const [products, setProducts] = useState([]);
const [loading,setLoading] = useState(false);


  useEffect(() => {
    new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => resolve(data), 3000);
    })
      .then((dataResolve) => setProducts(dataResolve))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <>
    <h2 className="text"><div className="loader"></div></h2>

      
    </>
    
  ) : (
      <Item greeting={products} />
    
  );
}

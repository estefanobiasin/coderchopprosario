import Item from "./Item";
import {data} from "./products";
const { useEffect, useState } = require("react");
export default function ItemList() {
const [products, setProducts] = useState([]);
const [loading,setLoading] = useState(false);


  // useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     setLoading(true);
     
  //     setTimeout(() => resolve(data), 2000);
  //   })
  //     .then((dataResolve) => setProducts(dataResolve));
  //     .finally(()=>{
  //         setLoading(false);
  //       })
      
  //     .catch((error) => {
  //       console.log("error al resolver la promesa", error);
  //     });
  // }, []);
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
    <h1>Loading ...</h1>
  ) : (
      <Item greeting={products} />
    
  );
}

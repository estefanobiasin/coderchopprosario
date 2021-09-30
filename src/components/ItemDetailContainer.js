import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style/Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from "./ItemDetail";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(false);
  const { identificador } = useParams();

  useEffect(() => {

    const getProduct = async () => {
      try {
        const productosCollection = await firebase.firestore().collection('productos').doc(identificador).get();
        const product = { id: productosCollection.id, ...productosCollection.data() };
        setProducto(product);
        setLoading(false);
        console.log("productoes collection", productosCollection);
      } catch (e) {
        console.log(e);
      }
    };

    getProduct();
    setLoading(true);

  }, [identificador]);


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

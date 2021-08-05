const { useEffect, useState } = require("react");
export default function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      ///
      const data = [
        
        { id:"1", title: "chopera a hielo ", price:"1000",pictureUrl:"https://www.facebook.com/chopp.rosario/photos/a.2258586277486228/4533900046621495/"},
        { id:"2", title: "chopera electrica ", price:"1000",pictureUrl:"https://www.facebook.com/chopp.rosario/photos/a.2258586277486228/4219480548063448"},
        { id:"3", title: "chopera bar ", price:"1000",pictureUrl: "https://www.facebook.com/chopp.rosario/photos/a.2258586277486228/4018952118116293"},
      ];
      setTimeout(() => resolve(data), 3000);
    })
      .then((dataResolve) => {
        setProducts(dataResolve);
      })
      .catch((error) => {
        console.log("error al resolver la promesa", error);
      });
  }, []);

  return (
    <div>
      {/** no va un h1, si no el componente Item, debemos pasarle las props de cada producto*/}
      {products.map((cadaProducto) => (
        <h1>        {cadaProducto.id}
        {cadaProducto.title} </h1>

      ))}
    </div>
  );
}

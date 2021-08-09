import Item from "./Item";
const { useEffect, useState } = require("react");
export default function ItemList() {
const [products, setProducts] = useState([]);
const test=11;

  useEffect(() => {
    new Promise((resolve, reject) => {
      ///
      const data = [
        {
          id: "1",
          title: "Chopera a Hielo ",
          price: "1000",
          pictureUrl:
            "https://scontent.fros8-1.fna.fbcdn.net/v/t1.6435-9/155074010_4144859005525603_869328942599569010_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=a26aad&_nc_ohc=Y0N2F2aFdx8AX-5dBYM&_nc_ht=scontent.fros8-1.fna&oh=f1fe4a995427022ae552b841c7526f9b&oe=61364297"
        },
        {
          id: "2",
          title: "Chopera Eléctrica ",
          price: "1000",
          pictureUrl:
          "https://scontent.fros8-1.fna.fbcdn.net/v/t1.6435-9/56728353_2445105595500961_3124454468637163520_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=a26aad&_nc_ohc=WpUGK_HmyOAAX9c9buH&tn=1yQzA0dmrH25p_7B&_nc_ht=scontent.fros8-1.fna&oh=72e7a36fdf0d25e2e698d8db9f453e18&oe=61351135"
           
        },
        {
          id: "3",
          title: "Chopera Bar",
          price: "1000",
          pictureUrl:
          "https://scontent.fros8-1.fna.fbcdn.net/v/t1.6435-9/82877912_3026626874015494_7078782608401760256_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=8bfeb9&_nc_ohc=ey_GOb2V9m4AX_LTLW3&_nc_ht=scontent.fros8-1.fna&oh=18f3892162f4b08e961c117ce3b05896&oe=613818B3"
        }
      ];

      setTimeout(() => resolve(data), 2000);
    })
      .then((dataResolve) => {
        setProducts(dataResolve);
      })
      .catch((error) => {
        console.log("error al resolver la promesa", error);
      });
  }, []);

  return (
    <>
      <Item greeting={products} />
    </>
  );
}

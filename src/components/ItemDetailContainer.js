import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Img,Body,Title,Text,Button,Container,Row,Col} from 'react-bootstrap';


export default function ItemDetailContainer() {
    const { useEffect, useState } = require("react");
    const [products, setProducts] = useState([]);
     const { identificador } = useParams();
    
  useEffect(() => {
    new Promise((resolve, reject) => {
      
      const data = [
        {
          id: "1",
          title: "Chopera a Hielo ",
          detail: "esta es una chopera a hielo que tiene 30 mts de serpentina de aluminio, brindando una practicidad increible",
          pictureUrl:
            "https://scontent.fros8-1.fna.fbcdn.net/v/t1.6435-9/155074010_4144859005525603_869328942599569010_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=a26aad&_nc_ohc=Y0N2F2aFdx8AX-5dBYM&_nc_ht=scontent.fros8-1.fna&oh=f1fe4a995427022ae552b841c7526f9b&oe=61364297"
        },
        {
          id: "2",
          title: "Chopera Eléctrica ",
          detail: "esta chopera se conecta a la energia electrica, fabricando el ehilo sola, posee un gran estilo y elegancia",
          pictureUrl:
          "https://scontent.fros8-1.fna.fbcdn.net/v/t1.6435-9/56728353_2445105595500961_3124454468637163520_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=a26aad&_nc_ohc=WpUGK_HmyOAAX9c9buH&tn=1yQzA0dmrH25p_7B&_nc_ht=scontent.fros8-1.fna&oh=72e7a36fdf0d25e2e698d8db9f453e18&oe=61351135"
           
        },
        {
          id: "3",
          title: "Chopera Bar",
          detail: "choperas para los puntos de ventas que se ajustan a las distintas necesidades",
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

  const filtro = products.find(function (product) {
	return product.id === identificador;
  
    });
    console.log ("este es filtro", filtro);
    
    

  return (
    <>

        {filtro &&
             <Container>
             <Row>
                 <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={filtro.pictureUrl} className='img-card' />
                    <Card.Body>
                        <Card.Title>{filtro.title}</Card.Title>
                        <Card.Text>
                             {filtro.detail}
                        </Card.Text>
                    </Card.Body>
                    </Card>
               </Col>
            </Row>
            </Container>

        }
      {/* <h1>Characters</h1>
      {filtro.map((item) => (
        <h1>este es el id {item.id}</h1>
        
        
      ))} */}
    


    </>
  );

}

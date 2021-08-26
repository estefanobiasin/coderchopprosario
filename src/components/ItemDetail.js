import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Img,Body,Title,Text,Button,Container,Row,Col} from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

function ItemDetail({ greeting }) {
  const [items, setItems] = useState(0);
  return (
    <div>
        <Container>
             <Row>
                 <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={greeting.pictureUrl} className='img-card' />
                    <Card.Body>
                        <Card.Title>{greeting.title}</Card.Title>
                        <Card.Text>
                             {greeting.detail}
                             
                             <ItemCount stok={4} inicio={items} onAdd={setItems}/>
                             


                        </Card.Text>
                    </Card.Body>
                    </Card>
               </Col>
            </Row>
        </Container>
    </div>
    
        
  );
}
export default ItemDetail;
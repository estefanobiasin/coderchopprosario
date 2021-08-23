import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Img,Body,Title,Text,Button,Container,Row,Col} from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ greeting }) {
    console.log("esta es la prop", greeting);
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
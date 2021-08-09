import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Img,Body,Title,Text,Button,Container,Row,Col} from 'react-bootstrap';

function Item({ greeting }) {
  return (
    <div>

      <Container>
        <Row>
            {greeting.map((prod) => (
            
          <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.pictureUrl} className='img-card' />
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>
              
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          ))}
          </Row>
          </Container>
    </div>
        









  );
}
export default Item;
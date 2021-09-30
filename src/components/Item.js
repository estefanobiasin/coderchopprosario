import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import "./style/Style.css";

import { Link } from "react-router-dom";


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
              <Link to={`/item-detail-container/${prod.id}`}> <Button className="boton" >Detalle</Button> 
            
              </Link>
             
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
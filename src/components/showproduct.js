import React from 'react';
import Card from 'react-bootstrap/Card'
import {Container, Row, Col} from 'react-bootstrap'
import './style/product.css';

const Products=({products})=> {
    return (
        <div>
        <h2>Products</h2>
        <Container>
                    <Row className="text-center">
                        
{products.map((val)=>{
                return(
                            
                            <Col  lg="3" md="6" sm="6" >
                                <Card style={{borderColor:"orange"}}>
                                    <p><Card.Img variant="top" src={`/images/${val.source}`} alt="123"/></p>
                                        <Card.Body>
                                            <Card.Title>型號: {val.product_name} </Card.Title>
                                            <div>
                                                <Card.Text>
                                                價錢: ${val.product_price} 
                                                <br></br>
                                                重量 {val.product_weight} kg
                                                </Card.Text>
                                            </div>
                                        </Card.Body>
                                </Card>
                            </Col>
      
                ) 
            })}
                        
                    </Row>
        </Container>          
    </div>
    )
}

export default Products

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Cards({ data }) {
    const { strCategory, strCategoryThumb } = data;
    return (
        <div >

            <Card className='card1 bg-dark d-flex mb-4 ' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strCategoryThumb} />
                <Card.Body>
                    <Card.Title style={{color:"white"}} >Category: {strCategory}</Card.Title>
                    <h2>dgas</h2>
                    <Button variant="primary" > <Link style={{color:'white'}} to={`/foodDetails/${data.strCategory}`}>Go Details</Link> </Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cards
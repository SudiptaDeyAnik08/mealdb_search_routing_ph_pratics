import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import './Card2.css'

function Card2({data}) {
    console.log(data);
    const {strCategory,strMealThumb,strMeal,strArea} = data;
    return (
    
            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                      Country origine: {strArea}
                    </Card.Text>
                    <Button variant="primary"> <Link style={{color:'white'}} to={`/Details2/${data.idMeal}`}>View Details </Link> </Button>
                </Card.Body>
            </Card>
       




    )
}

export default Card2
import React from 'react';
import { Card, Col } from 'react-bootstrap';

export const GifGridItem = ( {title, url} ) => {
    return (
        <Col className="animate__animated animate__fadeIn" sm={12} md={6} lg={4}>
            <Card className="my-2 shadow-sm">
                <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            </Card>
        {/* <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div> */}
        </Col>
        
    )
}
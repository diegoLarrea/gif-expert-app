import React from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);

    return (        
        <Row>
            <Col sm={12}>
                <h3 className="text-primary font-weight-bolder">{category}</h3>                 
            </Col>
            {loading && 
                <Col sm={12}>
                    <Alert variant="primary">
                        Cargando...
                    </Alert>
                </Col>
            }
            <Col sm={12}>
                <Row>
                    {
                        images.map( img => {
                            return <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        })
                    }
                </Row>
            </Col>
        </Row>
        
    )
}
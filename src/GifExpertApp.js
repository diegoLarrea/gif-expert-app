import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Container, Row, Col } from 'react-bootstrap'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2 className="text-secondary mt-4">GifExpertApp</h2>
                    </Col>
                </Row>
                <AddCategory setCategories={setCategories} />
                {
                    categories.map((el, index) => {
                        return (
                            <GifGrid
                                key={index}
                                category={el}
                            />
                        );
                    })
                }
            </Container>
        </>
    )
}
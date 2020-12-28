import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setValue] = useState('');

    const changeInput = (e) => {
        setValue(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setValue('');
        }

    }

    return (
        <Row>
            <Col>
                <Form onSubmit={submit}>
                    <Form.Group controlId="Buscar">
                        <InputGroup className="my-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="buscar"><i className="fa fa-search"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Buscar..."
                                aria-label="Buscar..."
                                aria-describedby="buscar"
                                type="text"
                                value={inputValue}
                                onChange={changeInput}
                            />
                        </InputGroup>
                    </Form.Group>
                </Form>
                <hr/>
            </Col>
        </Row>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


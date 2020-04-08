import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DeleteArticle = () => {
    const [id, setId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Id : ", id);
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "id":
                setId(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="article.id">
                    <Form.Label>ID de l'article</Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        onChange={handleChange}
                        value={id}
                        placeholder="Supprimer l'article"
                    />
                </Form.Group>
                <Button type="submit">Supprimer l'article</Button>
            </Form>
        </Container>
    );
}

export default DeleteArticle;
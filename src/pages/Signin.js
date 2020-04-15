import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="signin.email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="adress@email.tld"
                    />
                </Form.Group>
                <Form.Group controlId="signin.password">
                    <Form.Label>Mot de Passe</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Connection</Button>
            </Form>
        </Container>
    );
}

export default Signin;
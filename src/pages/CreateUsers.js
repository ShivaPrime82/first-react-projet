import React, { useState } from 'react';

import { Container, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const CreateUsers = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "firstname":
                setFirstname(value);
                break;
            case "lastname":
                setLastname(value);
                break;
            case "birthdate":
                setBirthdate(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/inscription', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                firstname,
                lastname,
                birthdate,
            }),
        })
            .then((result) => {
                return result.json();
            })
            .then(({ status, extra }) => {
                if (status === "OK") {
                    toast.success("Inscription Réussi !");
                } else {
                    toast.error(
                        <div>
                            Oups ... Nous avons eu une erreur ! <br />
                            {extra}
                        </div>
                    );
                }
            })
            .catch((error) => {
                toast.error("Oups ... Nous avons eu une erreur !");
                console.log(error);
            });
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="users.email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        placeholder="Hello.bob@quelquechose.untruc"
                    />
                </Form.Group>
                <Form.Group controlId="users.password">
                    <Form.Label>Mot de Passe</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                    />
                </Form.Group>
                <Form.Group controlId="users.firstname">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstname"
                        onChange={handleChange}
                        value={firstname}
                        placeholder="Dylan"
                    />
                </Form.Group>
                <Form.Group controlId="users.lastname">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastname"
                        onChange={handleChange}
                        value={lastname}
                        placeholder="Bob"
                    />
                </Form.Group>
                <Form.Group controlId="users.birthdate">
                    <Form.Label>Date de Naissance</Form.Label>
                    <Form.Control
                        type="date"
                        name="birthdate"
                        onChange={handleChange}
                        value={birthdate}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Inscription</Button>
            </Form>
        </Container>
    );
};

export default CreateUsers;
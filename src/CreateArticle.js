import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateArticle = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Titre :", title);
        console.log("Content :", content);
        console.log("Author : ", author);
    }

    const handleChange = (event) => {
        console.log("Target Name :", event.target.name);
        console.log("Target Value :", event.target.value);

        /*    if (event.target.name === "title") {
                setTitle(event.target.value);
            } else if (event.target.name === "content") {
                setContent(event.target.value);
            } else {
                setAuthor(event.target.value);
            }
        */ // Soit le if soit le switch mais les deux fonctionnes

        switch (event.target.name) {
            case "title":
                setTitle(event.target.value);
                break;
            case "content":
                setContent(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="article.title">
                    <Form.Label>Titre de l'article</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={title}
                        placeholder="Titre de l'article"
                    />
                </Form.Group>
                <Form.Group controlId="article.content">
                    <Form.Label>Contenu de l'article</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        onChange={handleChange}
                        value={content}
                        placeholder="Contenu de l'article"
                    />
                </Form.Group>
                <Form.Group controlId="article.author">
                    <Form.Label>ID de l'auteur</Form.Label>
                    <Form.Control
                        type="number"
                        name="author"
                        onChange={handleChange}
                        value={author}
                        placeholder="id de l'auteur" />
                </Form.Group>
                <Button variant="primary" type="submit">Créer l'article</Button>
            </Form>
        </Container>
    );
};

export default CreateArticle;
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateComment = () => {
    const [idArticle, setIdArticle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/comments/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                idArticle,
                content,
                author,
            }),
        })
            .then((result) => {
                return result.json();
            })
            .then(({ status, extra }) => {
                if (status === "OK") {
                    setIdArticle("");
                    setContent("");
                    setAuthor("");
                    toast.success("Le commentaire a bien été ajouté");
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
    };

    const handleChange = (event) => {
        switch (event.target.name) {
            case "idArticle":
                setIdArticle(event.target.value);
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
                <Form.Group controlId="comment.idArticle">
                    <Form.Label>Id de l'article</Form.Label>
                    <Form.Control
                        type="number"
                        name="idArticle"
                        onChange={handleChange}
                        value={idArticle}
                        placeholder="Id de l'article" />
                </Form.Group>
                <Form.Group controlId="comment.content">
                    <Form.Label>Contenu du commentaire</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        onChange={handleChange}
                        value={content}
                        placeholder="Contenu du commentaire"
                    />
                </Form.Group>
                <Form.Group controlId="comment.author">
                    <Form.Label>ID de l'auteur</Form.Label>
                    <Form.Control
                        type="number"
                        name="author"
                        onChange={handleChange}
                        value={author}
                        placeholder="ID de l'auteur" />
                </Form.Group>
                <Button variant="primary" type="submit">Créer un commentaire</Button>
            </Form>
        </Container>
    );
};

export default CreateComment;
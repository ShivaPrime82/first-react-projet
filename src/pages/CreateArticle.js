import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateArticle = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // eslint-disable-next-line
    const [cookies, setCookies] = useCookies();

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/articles/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Auth-Token': cookies.userToken,
            },
            body: JSON.stringify({
                title,
                content,
            }),
        })
            .then((result) => {
                return result.json();
            })
            .then(({ status, extra }) => {
                if (status === "OK") {
                    setTitle("");
                    setContent("");
                    toast.success("L'article a bien été ajouté");
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
            case "title":
                setTitle(event.target.value);
                break;
            case "content":
                setContent(event.target.value);
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
                <Button variant="primary" type="submit">Créer l'article</Button>
            </Form>
        </Container>
    );
};

export default CreateArticle;
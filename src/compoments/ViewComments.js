import React, { useState, useEffect } from 'react';

import { formatDate } from '../utils/date';
import CreateComment from "../compoments/CreateComment";

import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import { ListGroup, Container } from 'react-bootstrap';


const ViewComments = ({ article_id }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/comments?id=' + article_id)
            .then((result) => {
                return result.json();
            })
            .then(({ status, comments }) => {
                if (status === "OK") {
                    setComments(comments.reverse()); // .reverse pour inverser l'affichage des commentaires
                } else {
                    toast.error("Oups ... Nous avons eu une erreur !");
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Oups ... Nous avons eu une erreur !");
            })
    }, [article_id])

    const handleCreate = (comment) => {
        const newComments = [...comments];  // On copie notre tableau dans un autre tableau (Copie Profonde)
        newComments.push(comment);          // On envoit notre tableau comment dans newComments
        setComments(newComments);           // On actualise notre state setComments avec les données de newComments
    }

    const renderedComments = comments.map((comment) => {
        const { id, content, created_at, authorFirstname, authorLastname } = comment;
        return (
            <Card key={id}>
                <Card.Header>
                    <small className="text-muted">
                        créé le&nbsp;
                        {formatDate(created_at)}&nbsp;
                        par&nbsp;{authorFirstname}&nbsp;{authorLastname}.
                    </small>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    });

    return (
        <Container>
            <h3>Dernièrs Commentaires</h3>
            <ListGroup>
                {renderedComments}
                <ListGroup.Item>
                    <CreateComment article_id={article_id} onCreate={handleCreate} />
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default ViewComments;
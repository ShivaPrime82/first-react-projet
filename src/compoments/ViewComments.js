import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ListGroup, Container } from 'react-bootstrap';

import CreateComment from "../compoments/CreateComment";
import ViewComment from './ViewComment';

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

    const handleDelete = (commentId) => {
        const newComments = comments.filter((comment) => {
            return comment.id !== commentId;
        })
        setComments(newComments);
    }

    const renderedComments = comments.map((comment) => {
        return (
            <ViewComment
                key={comment.id}
                comment={comment}
                onDelete={handleDelete}
            />
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
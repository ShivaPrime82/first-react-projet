import React, { useState, useEffect } from 'react';

import { formatDate } from '../utils/date';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';


const ViewComments = () => {
    const [comments, setComments] = useState([]);
    const [id, setId] = useState("");

    useEffect(() => {
        fetch('http://localhost:3001/api/comments?article_id=' + id)
            .then((result) => {
                return result.json();
            })
            .then(({ status, comments }) => {
                if (status === "OK") {
                    setComments(comments);
                } else {
                    toast.error("Oups ... Nous avons eu une erreur !");
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Oups ... Nous avons eu une erreur !");
            })
    }, [id])

    const renderedComments = comments.map((comment) => {
        const { id, content, created_at, authorFirstname, authorLastname } = comment;
        setId(comment.id);
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
        <ListGroup>
            <h3>Dernière Commentaire</h3>
            <ListGroup.Item>
                {renderedComments}
            </ListGroup.Item>
        </ListGroup>
    );
}

export default ViewComments;
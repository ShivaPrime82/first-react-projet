import React, { useState, useEffect } from 'react';

import { formatDate } from '../utils/date';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

const ViewComments = () => {

    const [id, setId] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/comments?id=' + id)
            .then((result) => {
                return result.json();
            })
            .then(({ status, comments }) => {
                if (status === "OK") {
                    setId("");
                    setComments(comments);
                } else {
                    toast.error("Oups ... Nous avons eu une erreur !");
                }
            })
            .catch((error) => {
                toast.error("Oups ... Nous avons eu une erreur !");
                console.log(error);
            })
    }, [id])

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

    return renderedComments;
}

export default ViewComments;
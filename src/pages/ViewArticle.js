import React, { useState, useEffect } from 'react';

import { formatDate } from '../utils/date';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { toast } from 'react-toastify';

const ViewArticle = ({ match }) => {
    const { id } = match.params;
    const [article, setArticle] = useState({});

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/article?id=' + id)
            .then((result) => {
                return result.json();
            })
            .then(({ status, article }) => {
                if (status === "OK") {
                    setArticle(article);
                } else {
                    toast.error("Oups ... Nous avons eu une erreur !");
                }
            })
            .catch((error) => {
                toast.error("Oups ... Nous avons eu une erreur !");
                console.log(error);
            })

        fetch('http://localhost:3001/api/comments')
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
                toast.error("Oups ... Nous avons eu une erreur !");
                console.log(error);
            })
    }, [id])

    const renderedComments = comments.map((comments) => {
        const { content, created_at, authorFirstname, authorLastname } = comments;
        return (
            <Card>
                <Card.Body>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        créé le&nbsp;
                        {formatDate(created_at)}&nbsp;
                        par&nbsp;{authorFirstname}&nbsp;{authorLastname}.
                    </small>
                </Card.Footer>
            </Card>
        );
    });

    return (
        <Container>
            <h1>{article.title}</h1>
            <p>
                {article.content}
            </p>
            <p>
                posté le {formatDate(new Date())} <br />
                par {article.authorFirstname} {article.authorLastname}
            </p>
            <div>
                {renderedComments}
            </div>
        </Container>
    );
};

export default ViewArticle;
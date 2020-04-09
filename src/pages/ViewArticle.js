import React, { useState, useEffect } from 'react';

import { formatDate } from '../utils/date';

import Container from 'react-bootstrap/Container';

const ViewArticle = ({ match }) => {
    const { id } = match.params;
    const [article, setArticle] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/article?id=' + id)
            .then((result) => {
                console.log(result.status);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

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
                Commentaire
            </div>
        </Container>
    );
};

export default ViewArticle;
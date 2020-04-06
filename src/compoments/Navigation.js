import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <Nav variant="pills" className="d-flex justify-content-end">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/" exact>Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link as={NavLink} to="/articles/create">Créer un article</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/articles/delete">Supprime un article</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/comments/create">Créer un commentaire</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/comments/delete">Supprime un commentaire</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;
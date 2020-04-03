import React from 'react';

import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link as={Link} to="/" >Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/articles/create">Créer un article</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/articles/delete">Supprimer un article</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/comments/create">Créer un commentaire</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/comments/delete">Supprime un commentaire</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;
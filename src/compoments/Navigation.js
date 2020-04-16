import React from 'react';
import { useCookies } from 'react-cookie';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies();

    const handleLogout = () => {
        removeCookie("userToken");
        removeCookie("user");
    }

    const renderButton = () => {
        if (cookies.userToken) {
            return (
                <Nav.Item>
                    <Button onClick={handleLogout}>Se Déconnecter</Button>
                </Nav.Item>
            );
        } else {
            return (
                <Nav.Item>
                    <Button as={NavLink} to="/signin">Se Connecter</Button>
                </Nav.Item>
            );
        }
    }

    const renderCreateArticleLink = () => {
        if (cookies.userToken) {
            return (
                <Nav.Item >
                    <Nav.Link as={NavLink} to="/articles/create">Créer un article</Nav.Link>
                </Nav.Item>
            );
        }
    }

    return (
        <Nav variant="pills" className="d-flex justify-content-end">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/" exact>Accueil</Nav.Link>
            </Nav.Item>
            {renderCreateArticleLink()}
            <Nav.Item>
                <Nav.Link as={NavLink} to="/articles/delete">Supprime un article</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/inscription">Inscription</Nav.Link>
            </Nav.Item>
            {renderButton()}
        </Nav>
    );
}

export default Navigation;
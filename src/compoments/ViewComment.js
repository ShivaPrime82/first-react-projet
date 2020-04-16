import React from 'react';
import { useCookies } from 'react-cookie';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

import { formatDate } from '../utils/date';
import { FaTrash } from 'react-icons/fa';

const ViewComment = ({ comment, onDelete }) => {
    const { id, content, authorId, created_at, authorFirstname, authorLastname } = comment;
    // eslint-disable-next-line
    const [cookies, setCookies] = useCookies();

    const handleClick = () => {
        fetch('http://localhost:3001/api/comments/delete', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        })
            .then((result) => {
                return result.json();
            })
            .then(({ status, extra }) => {
                if (status === "OK") {
                    onDelete(id);
                    toast.success("Le commentaire a bien été supprimer");
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
    }

    const renderTrashButton = () => {
        const user = cookies.user || {};
        console.log("Utilisateur connecté : " + cookies.user);
        console.log("Id de l'auteur du commentaire : " + authorId);
        if (user.id === authorId) {
            return (
                <Button variant="outline-danger">
                    <FaTrash onClick={handleClick} />
                </Button>
            );
        }
    };

    return (
        <Card>
            <Card.Header>
                <small className="text-muted" >
                    créé le&nbsp;
                    {formatDate(created_at)}&nbsp;
                    par&nbsp;{authorFirstname}&nbsp;{authorLastname}.
                </small>
                {renderTrashButton()}
            </Card.Header>
            <Card.Body>
                <Card.Text className="text-justify">
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ViewComment;
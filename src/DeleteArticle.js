import React, { useState } from 'react';

const DeleteArticle = () => {
    const [id, setId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Id : ", id);
    }

    const handleChange = (event) => {

        switch (event.target.name) {
            case "id":
                setId(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>ID de l'article</label>
                <input type="number" name="id" onChange={handleChange} value={id} placeholder="Supprimer l'article" />
                <button type="submit">Supprimer l'article</button>
            </div>
        </form>
    );
}

export default DeleteArticle;
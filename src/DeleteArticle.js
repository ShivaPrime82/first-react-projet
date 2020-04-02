import React, { useState } from 'react';

const DeleteArticle = () => {
    const [id, setId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault;
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
            <label>ID de l'article</label>
            <input type="number" name="id" onChance={handleChange} value={id} placeholder="Supprimer l'article"></input>
            <button type="submit">Supprimer l'article</button>
        </form>
    );
}

export default DeleteArticle;
import React, { useState } from 'react';

const CreateArticle = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Titre :", title);
        console.log("Content :", content);
        console.log("Author : ", author);
    }

    const handleChange = (event) => {
        console.log("Target Name :", event.target.name);
        console.log("Target Value :", event.target.value);

        /*    if (event.target.name === "title") {
                setTitle(event.target.value);
            } else if (event.target.name === "content") {
                setContent(event.target.value);
            } else {
                setAuthor(event.target.value);
            }
        */ // Soit le if soit le switch mais les deux fonctionnes

        switch (event.target.name) {
            case "title":
                setTitle(event.target.value);
                break;
            case "content":
                setContent(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Titre de l'article</label>
                <input type="text" name="title" onChange={handleChange} value={title} placeholder="Titre de l'article" />
            </div>
            <div>
                <label htmlFor="content">Contenu de l'article</label>
                <textarea name="content" onChange={handleChange} value={content} placeholder="Contenu de l'article"></textarea>
            </div>
            <div>
                <label htmlFor="author">ID de l'auteur</label>
                <input type="number" name="author" onChange={handleChange} value={author} placeholder="id de l'auteur" />
            </div>
            <div>
                <button type="submit">Créer l'article</button>
            </div>
        </form>
    );
};

export default CreateArticle;
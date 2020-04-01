import React from 'react';

const CreateArticle = () => {
    const handleSubmit = () => {
        console.log("submit");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Titre de l'article</label>
                <input type="text" name="title" placeholder="Titre de l'article" />
            </div>
            <div>
                <label>Contenu de l'article</label>
                <textarea name="content" placeholder="Contenu de l'article"></textarea>
            </div>
            <div>
                <label>ID de l'auteur</label>
                <input type="number" name="author" placeholder="id de l'auteur" />
            </div>
            <div>
                <button type="submit">Créer l'article</button>
            </div>

        </form>
    );
};

export default CreateArticle;
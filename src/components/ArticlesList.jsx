import React from "react";
import ArticlesItem from "./ArticlesItem";

const ArticlesList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (<h2 className="article__sm-title">Статьи не найдены!</h2>)
    }

    return (
        <div className="article__list">
            <h2 className="article__main-title">{title}</h2>
            {posts.map(post => <ArticlesItem remove={remove} article={post} key={post.id} />)}
        </div>
    )
}

export default ArticlesList;
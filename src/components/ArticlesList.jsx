import React from "react";
import ArticlesItem from "./ArticlesItem";

const ArticlesList = ({posts, title, remove}) => {
    return (
        <div className="article__list">
            <h2 className="article__main-title">{title}</h2>
            {posts.map(post => <ArticlesItem remove={remove} article={post} key={post.id} />)}
        </div>
    )
}

export default ArticlesList;
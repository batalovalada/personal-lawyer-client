import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ArticlesItem from "./ArticlesItem";

const ArticlesList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (<h2 className="article__sm-title">Статьи не найдены!</h2>)
    }

    return (
        <div className="article__list">
            <h2 className="article__main-title">{title}</h2>
            <TransitionGroup>
                {posts.map(post =>
                    <CSSTransition key={post.id} timeout={500} classNames="article-transition">
                        <ArticlesItem remove={remove} article={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default ArticlesList;
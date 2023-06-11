import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from './UI/button/MyButton';
import MyLink from './UI/link/MyLink';
import Icons from './Icons';

const ArticleItem = (props) => {
    return (
        <article className="article__item">
            <h2 className="article__title">
                <Link className="article__link" to={`/articles/${props.article.id}`}>{props.article.title}</Link>
            </h2>
            <div className="article__text">{props.article.text}</div>
            <div className="article__data">
                <Icons icon={{ id: 'time', nameClass: 'article__icon' }} />
                <time className="article__date" dateTime={`${props.article.date[0]}-${props.article.date[1]}-${props.article.date[2]}T${props.article.date[3]}:${props.article.date[4]}`}>
                    {`${props.article.date[2]}.${props.article.date[1]}.${props.article.date[0]}.`}
                </time>
            </div>
            <div className="article__btns">
                <MyLink to={`/articles/${props.article.id}`}>Подробнее</MyLink>
                <MyButton onClick={() => props.remove(props.article)} type="button">Удалить</MyButton>
            </div>
        </article>
    )
}

export default ArticleItem;
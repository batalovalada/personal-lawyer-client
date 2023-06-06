import React from 'react';
import MyButton from './UI/button/MyButton';
import Icons from './Icons';

const ArticleItem = (props) => {
    return (
        <article className="article__item">
            <h2 className="article__title">
                <a className="article__link" href={props.article.href}>{props.article.title}</a>
            </h2>
            <div className="article__text">{props.article.text}</div>
            <div className="article__data">
                <Icons icon={{ id: 'time', nameClass: 'article__icon' }} />
                <time className="article__date" dateTime={`${props.article.date[0]}-${props.article.date[1]}-${props.article.date[2]}T${props.article.date[3]}:${props.article.date[4]}`}>
                    {`${props.article.date[2]}.${props.article.date[1]}.${props.article.date[0]}.`}
                </time>
            </div>
            <div className="article__btns">
                <MyButton type="button">Подробнее</MyButton>
                <MyButton onClick={() => props.remove(props.article)} type="button">Удалить</MyButton>
            </div>
        </article>
    )
}

export default ArticleItem;
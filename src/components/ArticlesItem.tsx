import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from './UI/button/MyButton';
import MyLink from './UI/link/MyLink';
import Icons from './Icons';
import { IArticles } from '../types/IArticles';

interface ArticleItemProps {
    article: IArticles;
    remove: (article: IArticles) => void;
}

const ArticleItem = ({ article, remove }: ArticleItemProps): JSX.Element => {
    return (
        <article className="article__item">
            <h2 className="article__title">
                <Link className="article__link" to={`/articles/${article.id}`}>{article.title}</Link>
            </h2>
            <div className="article__text">{article.text}</div>
            <div className="article__data">
                <Icons icon={{ id: 'time', nameClass: 'article__icon' }} />
                <time className="article__date" dateTime={`${article.date[0]}-${article.date[1]}-${article.date[2]}T${article.date[3]}:${article.date[4]}`}>
                    {`${article.date[2]}.${article.date[1]}.${article.date[0]}.`}
                </time>
            </div>
            <div className="article__btns">
                <MyLink to={`/articles/${article.id}`}>Подробнее</MyLink>
                <MyButton onClick={() => remove(article)} type="button">Удалить</MyButton>
            </div>
        </article>
    )
}

export default ArticleItem;
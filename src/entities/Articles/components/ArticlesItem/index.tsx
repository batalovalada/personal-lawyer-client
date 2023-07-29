import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../../../shared/UI/button/MyButton';
import MyLink from '../../../../shared/UI/link/MyLink';
import Icon from '../../../../shared/UI/icon/Icon';
import { IArticles } from '../../../../shared/types/IArticles';

interface ArticlesItemProps {
    article: IArticles;
    remove: (article: IArticles) => void;
}

export const ArticlesItem = ({ article, remove }: ArticlesItemProps): JSX.Element => {
    return (
        <article className="article__item">
            <h2 className="article__title">
                <Link className="article__link" to={`/articles/${article.id}`}>{article.title}</Link>
            </h2>
            <div className="article__text">{article.text}</div>
            <div className="article__data">
                <Icon icon={{ id: 'time', nameClass: 'article__icon' }} />
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

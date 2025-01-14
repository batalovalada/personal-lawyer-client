import React, {useState, useEffect} from "react";
import { usePosts } from "../../../../shared/lib/hooks/usePosts";
import { useFetching } from "../../../../shared/lib/hooks/useFetching";
import {ArticlesList} from "../../../../entities/Articles";
import {AddPostForm} from "../AddPostForm";
import {Filter} from "../../../../entities/Filter";
import MyModal from "../../../../shared/UI/modal/MyModal";
import MyButton from "../../../../shared/UI/button/MyButton";
import Loader from "../../../../shared/UI/loader/Loader";
import { IArticles } from "../../../../shared/types/IArticles";
import { IFilter } from "../../../../shared/types/IFilter";
import { postArticleServer } from "../../api/postArticleServer";
import { deleteArticleServer } from "../../api/deleteArticleServer";

export const Articles = (): JSX.Element => {
    //==========================posts=================================
    const [posts, setPosts] = useState<IArticles[]>([])

    //======================modal===================================
    const [modal, setModal] = useState<boolean>(false)

    //====================select sort================================
    const [filter, setFilter] = useState<IFilter>({ sort: '', query: '' });
    const sortedSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        await fetch('/posts')
            .then(response => response.json())
            .then(data => setPosts(data))

    })

    useEffect(() => {
        fetchPosts()
    }, [])

    //create and remove article
    const createPost = (newPost: IArticles):void => {
        setPosts([...posts, newPost]);
        setModal(false);
        postArticleServer(newPost)
    }

    const removePost = (post: IArticles):void => {
        setPosts(posts.filter(item => item.id !== post.id));
        deleteArticleServer(post.id);
    }

    return (
        <div className="article">
            <div className="container">
                <div className="article__inner">
                    <div className="add-post">
                        <div className="add-post__btn">
                            <MyButton type="button" onClick={():void => setModal(true)}>Создать пост</MyButton>
                        </div>
                        <MyModal active={modal} setActive={setModal}>
                            <AddPostForm create={createPost} active={modal} setActive={setModal} />
                        </MyModal>
                        <Filter filter={filter} setFilter={setFilter} id='add-post-select' options={[
                            { value: 'title', name: 'По заголовку' },
                            { value: 'date', name: 'По дате добавления' }
                        ]}/>
                    </div>
                    {
                        postError &&
                            <div className="error">
                                <h1 className="error__title">{`Произошла ошибка! ${postError}`}</h1>
                            </div>
                    }
                    {
                        isPostsLoading
                        ? 
                        <div className="error">
                            <Loader/>
                        </div>
                        : <ArticlesList remove={removePost} posts={sortedSearchedPosts} title='Все статьи' />
                    }
                </div>
            </div>
        </div>
    )
}

import React, {useState, useEffect} from "react";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import ArticlesList from "./ArticlesList";
import AddPostForm from "./AddPostForm";
import Filter from "./Filter";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import Loader from "./UI/loader/Loader";

const Articles = () => {
    //==========================posts=================================
    const [posts, setPosts] = useState([])

    //======================modal===================================
    const [modal, setModal] = useState(false)

    //====================select sort================================
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const sortedSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        await fetch('/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(e => console.log(e.message))

    })

    useEffect(() => {
        fetchPosts()
    }, [])

    //create and remove article
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
        document.body.classList.remove('no-scroll');
        postArticleServer(newPost)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id));
        deleteArticleServer(post.id);
    }

    //method post and delete
    async function postArticleServer(newPost) {
        await fetch('/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newPost)
        })
            .catch(err => console.log(err))
    }

    async function deleteArticleServer(postId) {
        await fetch(`/posts?id=${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .catch(err => console.log(err))
    }


    return (
        <div className="article">
            <div className="container">
                <div className="article__inner">
                    <div className="add-post">
                        <div className="add-post__btn">
                            <MyButton type="button" onClick={() => setModal(true)}>Создать пост</MyButton>
                        </div>
                        <MyModal active={modal} setActive={setModal}>
                            <AddPostForm create={createPost} />
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

export default Articles;
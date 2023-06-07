import React, {useState} from "react";
import { usePosts } from "../hooks/usePosts";
import ArticlesList from "./ArticlesList";
import AddPostForm from "./AddPostForm";
import Filter from "./Filter";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";

const Articles = () => {
    //==========================posts=================================
    const [posts, setPosts] = useState([
        {   id: 1,
            href: '#',
            title: 'Договор оказания услуг',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2023', '01', '27', '09', '37']},

        {   id: 2,
            href: '#',
            title: 'Банкротство физических лиц',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2020', '05', '09', '13', '56'] },

        {   id: 3,
            href: '#',
            title: 'Оспаривание завещания',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2022', '10', '17', '10', '20'] },

        {   id: 4,
            href: '#',
            title: 'Юридические услуги',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2023', '05', '18', '16', '19'] },

        {   id: 5,
            href: '#',
            title: 'Возврат денег за услуги',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2021', '04', '22', '16', '40']
},

        {   id: 6,
            href: '#',
            title: 'Раздел долевой собственности',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2021', '11', '12', '19', '26'] }
    ])

    //======================modal===================================
    const [modal, setModal] = useState(false)

    //====================select sort================================
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const sortedSearchedPosts = usePosts(posts, filter.sort, filter.query);

    //create and remove article
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
        document.body.classList.remove('no-scroll');
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id));
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
                    <ArticlesList remove={removePost} posts={sortedSearchedPosts} title='Articles title' />
                </div>
            </div>
        </div>
    )
}

export default Articles;
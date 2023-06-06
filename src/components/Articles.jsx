import React, {useState} from "react";
import ArticlesList from "./ArticlesList";
import AddPostForm from "./AddPostForm";

const Articles = () => {

    const [posts, setPosts] = useState([
        {   id: 1,
            href: '#',
            title: 'Договор оказания услуг',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2021', '04', '22', '16', '40']},

        {   id: 2,
            href: '#',
            title: 'Банкротство физических лиц',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2022', '05', '09', '13', '56'] },

        {   id: 3,
            href: '#',
            title: 'Оспаривание завещания',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2022', '10', '17', '10', '20'] },

        {   id: 4,
            href: '#',
            title: 'Юридические услуги',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2023', '07', '18', '16', '19'] },

        {   id: 5,
            href: '#',
            title: 'Возврат денег за услуги',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2023', '09', '27', '09', '37'] },

        {   id: 6,
            href: '#',
            title: 'Раздел долевой собственности',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2023', '11', '12', '19', '26'] }
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    return (
        <div className="article">
            <div className="container">
                <div className="article__inner">
                    <AddPostForm create={createPost}/>
                    {
                        posts.length !==0
                            ? <ArticlesList remove={removePost} posts={posts} title='Articles title' />
                            : <h2 className="article__sm-title">Статьи не найдены!</h2>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Articles;
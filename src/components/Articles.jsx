import React, {useState, useMemo} from "react";
import ArticlesList from "./ArticlesList";
import AddPostForm from "./AddPostForm";
import ArticlesFilter from "./ArticlesFilter";

const Articles = () => {
    //==========================posts=================================
    const [posts, setPosts] = useState([
        {   id: 1,
            href: '#',
            title: 'Договор оказания услуг',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2023', '09', '27', '09', '37']},

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
            date: ['2023', '07', '18', '16', '19'] },

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

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    //====================select sort================================
    //const [selectedSort, setSelectedSort] = useState('');
    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return filter.sort !== 'date'
                ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
                : [...posts].sort((a, b) => dateSort(a[filter.sort], b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    //sort two arrays with date components: [Year, Month, Day, Hours, Minutes]
    function dateSort(a, b) {
        let result;
        for (let i = a.length - 1; i >= 0; i--) {
            if (a[i] === b[i] && i !== a.length - 1) continue;
            result = new Intl.Collator().compare(a[i], b[i]);
        }
        return result
    }

    //search and select posts
    const sortedSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    

    return (
        <div className="article">
            <div className="container">
                <div className="article__inner">
                    <div className="add-post">
                        <AddPostForm create={createPost} />
                        <ArticlesFilter filter={filter} setFilter={setFilter}/>
                    </div>
                    <ArticlesList remove={removePost} posts={sortedSearchedPosts} title='Articles title' />
                </div>
            </div>
        </div>
    )
}

export default Articles;
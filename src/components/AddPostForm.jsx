import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/textarea/MyTextarea";
import MyButton from "./UI/button/MyButton";

const AddPostForm = ({create}) => {
    function getDate(Time) { //Time = new Date
        const Year = `${Time.getFullYear()}`;
        const Month = rigthTime(Time.getMonth() + 1);
        const Day = rigthTime(Time.getDate());
        const Hours = rigthTime(Time.getHours());
        const Minutes = rigthTime(Time.getMinutes());
        return [Year, Month, Day, Hours, Minutes]
    }

    function rigthTime(partTime) {
        return `${partTime}`.length === 1 ? `0${partTime}` : `${partTime}`
    }

    const [post, setPost] = useState({title: '', text: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        let Time = new Date();
        Time = getDate(Time);
        const newPost = { ...post, date: Time, id: Date.now(), to: `/articles/${Date.now()}`};
        create(newPost);
        setPost({title: '', text: ''});
    }

    return (
        <form className="form-add-post" action="/" method="post">
            <div className="form-add-post__item">
                <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder="Заголовок" id="add-post-title"/>
            </div>
            <div className="form-add-post__item">
                <MyTextarea value={post.text} onChange={e => setPost({ ...post, text: e.target.value })} type="text" placeholder="Текст поста" id="add-post-text" rows="5"/>
            </div>
            <MyButton onClick={addNewPost} type="submit">Отправить</MyButton>
        </form>
    )
}

export default AddPostForm;
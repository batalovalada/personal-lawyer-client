import React, {useState} from "react";
import { useInput } from "../hooks/useValidation";
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
        const newPost = { id: Date.now(), ...post, date: Time};
        create(newPost);
        setPost({title: '', text: ''});
    }

    //validate====================
    const title = useInput('', {isEmpty: true});
    const text = useInput('', {isEmpty: true});


    return (
        <form className="form-add-post" action="/" method="post">
            <div className="form-add-post__item">
                <MyInput 
                    value={post.title}
                    onChange={e => { 
                        setPost({ ...post, title: e.target.value });
                        title.onChange(e)
                    }}
                    onBlur={() => title.onBlur()} 
                    type="text"
                    placeholder="Заголовок"
                    id="add-post-title"
                />
                <div className="form__labels">
                    {(title.isDirty && title.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                </div>
            </div>
            <div className="form-add-post__item">
                <MyTextarea
                    value={post.text}
                    onChange={e => {
                        setPost({ ...post, text: e.target.value });
                        text.onChange(e)
                    }}
                    onBlur={() => text.onBlur()}
                    type="text"
                    placeholder="Текст поста"
                    id="add-post-text"
                    rows="5"
                    />
                <div className="form__labels">
                    {(text.isDirty && text.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                </div>
            </div>
            <MyButton disabled={!title.inputValid || !text.inputValid} onClick={addNewPost} type="submit">Отправить</MyButton>
        </form>
    )
}

export default AddPostForm;
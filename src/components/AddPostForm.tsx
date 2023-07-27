import React, {useEffect, useState} from "react";
import { useInput } from "../hooks/useValidation";
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/textarea/MyTextarea";
import MyButton from "./UI/button/MyButton";
import { IArticles } from "../types/IArticles";

interface AddPostFormProps {
    create: (newPost: IArticles) => void;
    active: boolean;
    setActive: (active: boolean) => void;
}

const AddPostForm = ({ create, active, setActive }: AddPostFormProps): JSX.Element => {
    //new Date() => [Year, Month, Day, Hours, Minutes]
    function getDate(Time: Date): string[] {
        const Year:string = `${Time.getFullYear()}`;
        const Month:string = rigthTime(Time.getMonth() + 1);
        const Day:string = rigthTime(Time.getDate());
        const Hours:string = rigthTime(Time.getHours());
        const Minutes:string = rigthTime(Time.getMinutes());
        return [Year, Month, Day, Hours, Minutes]
    }

    //e.g. 5.6.2022 => 05.06.2022
    function rigthTime(partTime: number):string {
        return `${partTime}`.length === 1 ? `0${partTime}` : `${partTime}`
    }

    const [post, setPost] = useState<{title: string, text: string}>({title: '', text: ''});

    const addNewPost = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const Time: Date = new Date();
        const timeArr: string[] = getDate(Time);
        const newPost: IArticles = { id: Date.now(), ...post, date: timeArr};
        create(newPost);
    }

    //validate====================
    const title = useInput('', {isEmpty: true});
    const text = useInput('', {isEmpty: true});


    //clear form
    useEffect((): void => {
        if (!active) {
            setPost({ title: '', text: '' });
            title.setIsDirty(false);
            text.setIsDirty(false);
        }
    }, [active])


    return (
        <form className="form-add-post" action="/" method="post">
            <div className="form__item">
                <MyInput 
                    value={post.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>):void => { 
                        setPost({ ...post, title: e.target.value });
                        title.onChange(e)
                    }}
                    onBlur={():void => title.onBlur()} 
                    type="text"
                    placeholder="Заголовок"
                />
                <div className="form__labels">
                    {(title.isDirty && title.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                </div>
            </div>
            <div className="form__item">
                <MyTextarea
                    value={post.text}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
                        setPost({ ...post, text: e.target.value });
                        text.onChange(e)
                    }}
                    onBlur={():void => text.onBlur()}
                    placeholder="Текст поста"
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
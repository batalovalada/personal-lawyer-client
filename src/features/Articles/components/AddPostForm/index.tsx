import React, {useEffect, useState} from "react";
import { useInput } from "../../../../shared/lib/hooks/useValidation";
import MyInput from "../../../../shared/UI/input/MyInput";
import MyTextarea from "../../../../shared/UI/textarea/MyTextarea";
import MyButton from "../../../../shared/UI/button/MyButton";
import { IArticles } from "../../../../shared/types/IArticles";
import { getDate } from "../../lib/helpers/getDate";

interface AddPostFormProps {
    create: (newPost: IArticles) => void;
    active: boolean;
    setActive: (active: boolean) => void;
}

export const AddPostForm = ({ create, active, setActive }: AddPostFormProps): JSX.Element => {
    
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

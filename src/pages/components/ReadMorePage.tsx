import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useFetching } from "../../shared/lib/hooks/useFetching";
import {Intro} from "../../entities/Intro";
import MyButton from "../../shared/UI/button/MyButton";
import {QuestionsForm} from "../../features/QuestionsUser";
import Loader from "../../shared/UI/loader/Loader";
import {ScrollToTop} from "../lib/scroll";

const ReadMorePage: React.FC = () => {
    //scroll to top
    ScrollToTop();

    //search post
    const {id} = useParams<{id: string}>();
    const [object, setObject] = useState<any>({});

    //fetch data
    const [fetchPost1, isPostLoading1, postError1] = useFetching(async () => {
        await fetch(`/posts?id=${id}`)
            .then(response => response.json())
            .then(data => { if (data) setObject(data)})
            
    })

    const [fetchPost2, isPostLoading2, postError2] = useFetching(async () => {
        await fetch(`/services?id=${id}`)
            .then(response => response.json())
            .then(data => { if (data) setObject(data) })

    })

    const [fetchPost3, isPostLoading3, postError3] = useFetching(async () => {
        await fetch(`/about?id=${id}`)
            .then(response => response.json())
            .then(data => { if (data) setObject(data) })

    })


    useEffect(():void => {
        fetchPost1()
        fetchPost2()
        fetchPost3()
    }, [])

    //btn go back
    const navigate = useNavigate();
    const goBack = ():void => navigate(-1);

    return (
        <div className="page">
            {
                postError1 && postError2 && postError3
            ?
                <div className="error">
                    <div className="container">
                            <h1 className="error__title">{`Страница не найдена! ${postError1} ${postError2} ${postError3}`}</h1>
                        <Link className="error__link" to="/">перейти на главную</Link>
                    </div>
                </div>
            :
                isPostLoading1 && isPostLoading2 && isPostLoading3
                ? 
                    <div className="error">
                        <Loader />
                    </div>
                :
                    <>
                        <Intro title={object.title} />
                        <div className="read-more">
                            <div className="container">
                                <div className="read-more__inner">
                                    <div className="read-more__header">
                                        <MyButton onClick={goBack} type="button">Назад</MyButton>
                                    </div>
                                    <h1 className="read-more__title">{object.title}</h1>
                                    <div className="read-more__content">
                                        {object.text}
                                    </div>

                                    <QuestionsForm/>
                                </div>
                            </div>
                        </div>
                    </>}

        </div>
    )
}

export default ReadMorePage;
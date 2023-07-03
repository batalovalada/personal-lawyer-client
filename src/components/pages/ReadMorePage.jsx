import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import Intro from "../Intro";
import MyButton from "../UI/button/MyButton";
import QuestionsForm from "../QuestionsForm";
import Loader from "../UI/loader/Loader";

const ReadMorePage = () => {
    const {id} = useParams();
    const [object, setObject] = useState({});

    //fetch data
    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        await fetch(`/posts?id=${id}`)
            .then(response => response.json())
            .then(data => { if (data) setObject(data)})
            .catch(e => console.log(e.message))

        await fetch(`/services?id=${id}`)
            .then(response => response.json())
            .then(data => { if (data) setObject(data) })
            .catch(e => console.log(e.message))
        
        await fetch(`/about?id=${id}`)
            .then(response => response.json())
            .then(data => { if (data) setObject(data) })
            .catch(e => console.log(e.message))
            
    })

    useEffect(() => {
        fetchPost()
    }, [])

    //btn go back
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className="page">
            {
                postError &&
                <div className="error">
                    <h1 className="error__title">{`Произошла ошибка! ${postError}`}</h1>
                </div>
            }
            {
                isPostLoading
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
                                        <p>{object.text}</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore culpa expedita id nesciunt, quod at, quia hic iusto voluptate aut similique facilis accusantium incidunt. Totam, libero accusantium enim autem nemo. Nobis dicta dolores fuga, ipsa totam corporis <a href="#">nihil non possimus</a> repellendus, sunt excepturi quam in at iste odit est exercitationem harum a porro. Eveniet quidem dolore consectetur, fugiat hic in.</p>

                                        <h2>Title</h2>
                                        <h3>Title</h3>
                                        <h4>Title</h4>
                                        <h5>Title</h5>
                                        <h6>Title</h6>

                                        <ul>
                                            <li>Lorem ipsum dolor</li>
                                            <li>Lorem ipsum dolor</li>
                                            <li>Lorem ipsum dolor</li>
                                            <li>Lorem ipsum dolor</li>
                                            <li>Lorem ipsum dolor</li>
                                        </ul>

                                        <table>
                                            <caption>Table 1 - Table discription </caption>
                                            <thead>
                                                <tr>
                                                    <td>title 1</td>
                                                    <td>title 2</td>
                                                    <td>title 3</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>5</td>
                                                    <td>6</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore culpa expedita id nesciunt, quod at, quia hic iusto voluptate aut similique facilis accusantium incidunt. Totam, libero accusantium enim autem nemo. Nobis dicta dolores fuga, ipsa totam corporis <a href="#">nihil non possimus</a> repellendus, sunt excepturi quam in at iste odit est exercitationem harum a porro. Eveniet quidem dolore consectetur, fugiat hic in.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore culpa expedita id nesciunt, quod at, quia hic iusto <a href="#">voluptate aut similique</a> facilis accusantium incidunt. Totam, libero accusantium enim autem nemo. Nobis dicta dolores fuga, ipsa totam corporis nihil non possimus repellendus, sunt excepturi quam in at iste odit est exercitationem harum a porro. Eveniet quidem dolore consectetur, fugiat hic in.</p>

                                        <ol>
                                            <li>Lorem ipsum dolor</li>
                                            <li>Lorem ipsum dolor</li>
                                            <li>Lorem ipsum dolor</li>
                                            <li>Lorem ipsum dolor</li>
                                            <li>Lorem ipsum dolor</li>
                                        </ol>
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
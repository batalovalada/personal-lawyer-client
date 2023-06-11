import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Intro from "../components/Intro";
import MyButton from "../components/UI/button/MyButton";
import QuestionsForm from "../components/QuestionsForm";

const ReadMorePage = () => {
    const {id} = useParams();

    //btn go back
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const data = [
        {
            id: 11,
            title: 'Договор оказания услуг',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2023', '01', '27', '09', '37']
        },

        {
            id: 12,
            title: 'Банкротство физических лиц',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2020', '05', '09', '13', '56']
        },

        {
            id: 13,
            title: 'Оспаривание завещания',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2022', '10', '17', '10', '20']
        },

        {
            id: 14,
            title: 'Юридические услуги',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2023', '05', '18', '16', '19']
        },

        {
            id: 15,
            title: 'Возврат денег за услуги',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2021', '04', '22', '16', '40']
        },

        {
            id: 16,
            title: 'Раздел долевой собственности',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
            date: ['2021', '11', '12', '19', '26']
        },

        {
            id: 21,
            icon: 'about1',
            title: 'Корпоративное право',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 22,
            icon: 'about4',
            title: 'Уголовно-правовая защита бизнеса',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 23,
            icon: 'about2',
            title: 'Законопроектная работа',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 24,
            icon: 'about3',
            title: 'Правовая защита информации',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 25,
            icon: 'about1',
            title: 'Банковская и финансовая практика',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 26,
            icon: 'about3',
            title: 'Правовой мониторинг',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 27,
            icon: 'about3',
            title: 'Взыскание долгов',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 28,
            icon: 'about4',
            title: 'Личный адвокат',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 29,
            icon: 'about2',
            title: 'Юрист по недвижимости',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 291,
            icon: 'about1',
            title: 'Составление договоров',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 292,
            icon: 'about4',
            title: 'Представительство в суде',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 293,
            icon: 'about2',
            title: 'Страховой юрист',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },

        { id: 31, icon: 'about1', title: 'Представительство в суде', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { id: 32, icon: 'about2', title: 'Уголовные дела', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { id: 33, icon: 'about3', title: 'Гражданские дела', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { id: 34, icon: 'about4', title: 'Юридические консультации', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' }
    ];

    const object = data.find(item => item.id === Number(id));

    return (
        <div className="page">
            <Intro title={object.title}/>
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

        </div>
    )
}

export default ReadMorePage;
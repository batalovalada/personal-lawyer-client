import React, {useState} from "react";
import Filter from "./Filter";
import { usePosts } from "../hooks/usePosts";
import ServicesList from "./ServicesList";

const Services = () => {
    const services1 = [
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
        }
    ]

    const services2 = [
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
        }
    ]

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const sortedSearchedPosts1 = usePosts(services1, filter.sort, filter.query);
    const sortedSearchedPosts2 = usePosts(services2, filter.sort, filter.query);

    return (
        <div className="services">
            <div className="container">
                <div className="filter">
                    <Filter filter={filter} setFilter={setFilter} id='services-select' options={[
                        { value: 'title', name: 'По заголовку' }
                    ]} />
                </div>

                {(() => {
                    if (!sortedSearchedPosts1.length && !sortedSearchedPosts2.length) {
                    return (<h2 className="error__sm-title">По запросу ничего не найдено.</h2>)
                    } else if (sortedSearchedPosts1.length && !sortedSearchedPosts2.length) {
                    return (<ServicesList suptitle="Отрасли экономики" services={sortedSearchedPosts1} />)
                    } else if (!sortedSearchedPosts1.length && sortedSearchedPosts2.length) {
                    return (<ServicesList suptitle="Отрасли права" services={sortedSearchedPosts2} />)
                } else {
                    return (
                        <>
                            <ServicesList suptitle="Отрасли экономики" services={sortedSearchedPosts1} />
                            <ServicesList suptitle="Отрасли права" services={sortedSearchedPosts2} />
                        </>
                    )
                }
                })()}

            </div>
        </div>
    )
}

export default Services;
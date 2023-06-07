import React, {useState} from "react";
import Filter from "./Filter";
import { usePosts } from "../hooks/usePosts";
import ServicesList from "./ServicesList";

const Services = () => {
    const services = [
        {   id: 1,
            icon: 'about1',
            href: '#',
            title: 'Корпоративное право',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {   id: 2,
            icon: 'about4',
            href: '#',
            title: 'Уголовно-правовая защита бизнеса',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {   id: 3,
            icon: 'about2',
            href: '#',
            title: 'Законопроектная работа',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {   id: 4,
            icon: 'about3',
            href: '#',
            title: 'Правовая защита информации',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {   id: 5,
            icon: 'about1',
            href: '#',
            title: 'Банковская и финансовая практика',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {   id: 6,
            icon: 'about3',
            href: '#',
            title: 'Правовой мониторинг',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        }
    ]

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const sortedSearchedPosts = usePosts(services, filter.sort, filter.query);

    return (
        <div className="services">
            <div className="container">
                <div className="filter">
                    <Filter filter={filter} setFilter={setFilter} id='services-select' options={[
                        { value: 'title', name: 'По заголовку' }
                    ]} />
                </div>
                <ServicesList services={sortedSearchedPosts}/>
            </div>
        </div>
    )
}

export default Services;
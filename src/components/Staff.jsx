import React, {useState} from "react";
import Filter from "./Filter";
import { usePosts } from "../hooks/usePosts";
import StaffList from "./StaffList";

const Staff = () => {
    const allStaff = [
        { id: 41, img: 'https://placehold.it/130', title: 'Иван Иванов', job: 'Партнёр', email: 'ivan.ivanov@gmail.com' },
        { id: 42, img: 'https://placehold.it/130', title: 'Светлана Сергеева', job: 'Партнёр', email: 'svetlana_serg@gmail.com' },
        { id: 43, img: 'https://placehold.it/130', title: 'Пётр Смирнов', job: 'Руководитель группы корпоративного права', email: 'petr.smirnov@gmail.com' },
        { id: 44, img: 'https://placehold.it/130', title: 'Александр Иванов', job: 'Ведущий эксперт', email: 'al_ivanov@gmail.com' },
        { id: 45, img: 'https://placehold.it/130', title: 'Мария Смирнова', job: 'Партнёр', email: 'mariasmirnova@gmail.com' },
        { id: 46, img: 'https://placehold.it/130', title: 'Татьяна Ильина', job: 'Старший партнёр', email: 'tatiana_ilina@gmail.com' },
        { id: 47, img: 'https://placehold.it/130', title: 'Роман Фёдоров', job: 'Управляющий партнёр', email: 'roman.fedorov@gmail.com' },
        { id: 48, img: 'https://placehold.it/130', title: 'Александр Иванов', job: 'Ведущий эксперт', email: 'al_ivanov@gmail.com' },
        { id: 49, img: 'https://placehold.it/130', title: 'Мария Смирнова', job: 'Партнёр', email: 'mariasmirnova@gmail.com' },
        { id: 491, img: 'https://placehold.it/130', title: 'Татьяна Ильина', job: 'Старший партнёр', email: 'tatiana_ilina@gmail.com' },
        { id: 492, img: 'https://placehold.it/130', title: 'Роман Фёдоров', job: 'Управляющий партнёр', email: 'roman.fedorov@gmail.com' }
    ]

    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedSearchedPosts = usePosts(allStaff, filter.sort, filter.query);

    return (
        <div className="staff">
            <div className="container">
                <div className="filter">
                    <Filter filter={filter} setFilter={setFilter} id='staff-select' options={[
                        { value: 'title', name: 'По имени' },
                        { value: 'job', name: 'По занимаемой должности' }
                    ]} />
                </div>
                <StaffList allStaff={sortedSearchedPosts} />
            </div>
        </div>
    )
}

export default Staff;
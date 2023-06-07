import React, {useState} from "react";
import Filter from "./Filter";
import { usePosts } from "../hooks/usePosts";
import StaffList from "./StaffList";

const Staff = () => {
    const allStaff = [
        { id: 1, img: 'https://placehold.it/130', title: 'Иван Иванов', job: 'Партнёр', email: 'ivan.ivanov@gmail.com' },
        { id: 2, img: 'https://placehold.it/130', title: 'Светлана Сергеева', job: 'Партнёр', email: 'svetlana_serg@gmail.com' },
        { id: 3, img: 'https://placehold.it/130', title: 'Пётр Смирнов', job: 'Руководитель группы корпоративного права', email: 'petr.smirnov@gmail.com' },
        { id: 4, img: 'https://placehold.it/130', title: 'Александр Иванов', job: 'Ведущий эксперт', email: 'al_ivanov@gmail.com' },
        { id: 5, img: 'https://placehold.it/130', title: 'Мария Смирнова', job: 'Партнёр', email: 'mariasmirnova@gmail.com' },
        { id: 6, img: 'https://placehold.it/130', title: 'Татьяна Ильина', job: 'Старший партнёр', email: 'tatiana_ilina@gmail.com' },
        { id: 7, img: 'https://placehold.it/130', title: 'Роман Фёдоров', job: 'Управляющий партнёр', email: 'roman.fedorov@gmail.com' }
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
import React, {useState} from "react";
import Filter from "./Filter";
import { usePosts } from "../hooks/usePosts";
import StaffList from "./StaffList";
import allStaff from "../tpl/data/allStaff.json";

const Staff = () => {
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
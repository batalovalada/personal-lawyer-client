import React, {useState, useEffect} from "react";
import Loader from "./UI/loader/Loader";
import Filter from "./Filter";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import StaffList from "./StaffList";
import { IFilter } from "../types/IFilter";
import { IStaff } from "../types/IStaff";

const Staff = (): JSX.Element => {
    const [staff, setStaff] = useState<IStaff[]>([]);
    const [filter, setFilter] = useState<IFilter>({sort: '', query: ''});
    const sortedSearchedPosts = usePosts(staff, filter.sort, filter.query);

    const [fetchStaff, isStaffsLoading, staffError] = useFetching(async () => {
        await fetch('/staff')
            .then(response => response.json())
            .then(data => setStaff(data))

    })

    useEffect(() => {
        fetchStaff()
    }, [])


    return (
        <div className="staff">
            <div className="container">
                <div className="filter">
                    <Filter filter={filter} setFilter={setFilter} id='staff-select' options={[
                        { value: 'title', name: 'По имени' },
                        { value: 'job', name: 'По занимаемой должности' }
                    ]} />
                </div>
                {
                    staffError &&
                    <div className="error">
                        <h1 className="error__title">{`Произошла ошибка! ${staffError}`}</h1>
                    </div>
                }
                {
                    isStaffsLoading
                        ? 
                        <div className="error">
                            <Loader/>
                        </div>
                        :
                        <StaffList allStaff={sortedSearchedPosts} />
                }
            </div>
        </div>
    )
}

export default Staff;
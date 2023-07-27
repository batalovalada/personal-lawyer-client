import React, {useState} from "react";
import Filter from "./Filter";
import { usePosts } from "../hooks/usePosts";
import ServicesList from "./ServicesList";
import services1 from "../tpl/data/services1.json";
import services2 from "../tpl/data/services2.json";
import { IFilter } from "../types/IFilter";

const Services = (): JSX.Element => {
    const [filter, setFilter] = useState<IFilter>({ sort: '', query: '' })
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

                {((): React.ReactNode => {
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
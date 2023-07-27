import React from "react";
import { IFilter} from "../types/IFilter";
import { IOption } from "../types/ISelect";
import SearchForm from "./SearchForm";
import MySelect from "./UI/select/MySelect";

interface FilterProps {
    filter: IFilter;
    id: string;
    options: IOption[];
    setFilter: (filter: IFilter) => void;
}

const Filter = ({ filter, setFilter, options, id }: FilterProps): JSX.Element => {
    return (
        <div className="filter__inner">
            <div className="filter__select">
                <MySelect
                    id={id}
                    value={filter.sort}
                    onChange={(selectedSort : string) => setFilter({ ...filter, sort: selectedSort })}
                    defaultValue='Сортировка'
                    options={options}
                />
            </div>
            <div className="filter__form">
                <SearchForm filter={filter} setFilter={setFilter} />
            </div>
        </div>
    )
}

export default Filter;


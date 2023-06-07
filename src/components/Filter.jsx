import React from "react";
import SearchForm from "./SearchForm";
import MySelect from "./UI/select/MySelect";

const Filter = ({filter, setFilter, options, id}) => {
    return (
        <div className="filter__inner">
            <div className="filter__select">
                <MySelect
                    id={id}
                    value={filter.sort}
                    onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
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


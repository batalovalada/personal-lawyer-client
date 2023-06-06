import React from "react";
import SearchForm from "./SearchForm";
import MySelect from "./UI/select/MySelect";

const ArticlesFilter = ({filter, setFilter}) => {
    return (
        <div className="add-post__sort">
            <MySelect
                id='add-post'
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Сортировка'
                options={[
                    { value: 'title', name: 'По заголовку' },
                    { value: 'date', name: 'По дате добавления' }
                ]}
            />
            <SearchForm filter={filter} setFilter={setFilter} />
        </div>
    )
}

export default ArticlesFilter;


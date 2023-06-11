import React from "react";
import MyInput from "./UI/input/MyInput";
import Icons from "./Icons";

const SearchForm = ({filter, setFilter}) => {
    return (
        <form className="form-search" action="/" method="get">
            <MyInput type="text" placeholder="Поиск" 
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <button className="btn btn--search" type="button">
                <Icons icon={{ id: 'search', nameClass: 'header__icon header__icon--search' }} />
            </button>
        </form>
    )
}

export default SearchForm;
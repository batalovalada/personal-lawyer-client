import React from "react";
import MyInput from "./UI/input/MyInput";
import Icons from "./Icons";
import { IFilter } from "../types/IFilter";

interface SearchFormProps {
    filter: IFilter;
    setFilter: (filter: IFilter) => void;
}

const SearchForm = ({ filter, setFilter }: SearchFormProps): JSX.Element => {
    return (
        <form className="form-search" action="/" method="get">
            <MyInput
                type="search"
                placeholder="Поиск" 
                value={filter.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})}
            />
            <button className="btn btn--search" type="button">
                <Icons icon={{ id: 'search', nameClass: 'header__icon header__icon--search' }} />
            </button>
        </form>
    )
}

export default SearchForm;
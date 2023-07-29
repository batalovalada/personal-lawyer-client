import React from "react";
import MyInput from "../../../../shared/UI/input/MyInput";
import Icon from "../../../../shared/UI/icon/Icon";
import { IFilter } from "../../../../shared/types/IFilter";

interface SearchFormProps {
    filter: IFilter;
    setFilter: (filter: IFilter) => void;
}

export const SearchForm = ({ filter, setFilter }: SearchFormProps): JSX.Element => {
    return (
        <form className="form-search" action="/" method="get">
            <MyInput
                type="search"
                placeholder="Поиск" 
                value={filter.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})}
            />
            <button className="btn btn--search" type="button">
                <Icon icon={{ id: 'search', nameClass: 'header__icon header__icon--search' }} />
            </button>
        </form>
    )
}

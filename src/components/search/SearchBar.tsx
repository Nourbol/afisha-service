import React, {useState} from 'react';
import './SearchBar.css';

type PropsType = {
    initialValue?: string;
    onSearch: (value: string) => void;
}

export const SearchBar = ({onSearch, initialValue = ''}: PropsType) => {
    const [query, setQuery] = useState(initialValue);

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Найти среди 1000 событий..."
                value={query}
                onChange={handleInputChange}
            />
        </form>
    );
};

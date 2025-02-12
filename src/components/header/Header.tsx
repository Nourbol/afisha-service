import {MenuButton} from '../button';
import {useNavigate, useSearchParams} from "react-router-dom";
import {SearchBar} from "../search/SearchBar.tsx";
import {SEARCH_QUERY} from "../../constants/queryParams.ts";
import {UserIdentity} from "../user/UserIdentity.tsx";
import {Category} from "../../types/category.ts";
import './Header.css'

type PropsType = {
    categories?: Category[];
    onMenuButtonClick?: () => void;
};

export const Header = ({categories = [], onMenuButtonClick = () => {}}: PropsType) => {
    const navigate = useNavigate();
    const [params] = useSearchParams();

    const handleSearch = (search: string) => {
        navigate(`/search?${SEARCH_QUERY}=${search}`);
    }

    const searchQuery = params.get(SEARCH_QUERY) || undefined;

    return (
        <header className="header">
            <div className="header-utility-line">
                <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
                <div className="header-action-button-container">
                    <UserIdentity/>
                    <MenuButton onClick={onMenuButtonClick} />
                </div>
            </div>
            <div className="header-categories">
                {categories.map(category => (<a key={category.id}>{category.name}</a>))}
            </div>
        </header>
    );
};

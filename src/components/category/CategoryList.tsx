import {Category} from "../../types/category.ts";
import './CategoryList.css';

type PropsType = {
    categories: Category[];
    onCategoryClick: (category: Category) => void;
};

export const CategoryList = ({categories, onCategoryClick = () => {}}: PropsType) =>
    (
        <ul className="category-list">
            {categories.map(category => (
                <li key={category.id} className="category-name" onClick={() => onCategoryClick(category)}>
                    <p>{category.name}</p>
                </li>
            ))}
        </ul>
    );

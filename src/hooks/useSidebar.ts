import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Category} from "../types/category.ts";
import {getCategories} from "../service/categories.ts";

export const useSidebar = () => {
    const navigate = useNavigate();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);

    const handleCategoryClick = (category: Category) => {
        navigate(`/category/${category.id}`);
        setIsSidebarOpen(false);
    };

    const handleMenuButtonClick = () => setIsSidebarOpen(prevState => !prevState);

    useEffect(() => {
        getCategories().then(response => setCategories(response));
    }, []);

    return {
        isSidebarOpen,
        categories,
        handleCategoryClick,
        handleMenuButtonClick,
    }
}
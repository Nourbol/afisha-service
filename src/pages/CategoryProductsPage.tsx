import {useEffect, useState} from "react";
import {AfishaPreview} from "../types/afisha.ts";
import {useNavigate, useParams} from "react-router-dom";
import {getCategoryAfishas} from "../service/afishas.ts";
import {Catalog} from "../components/catalog/Catalog.tsx";
import {getCategory} from "../service/categories.ts";

export const CategoryProductsPage = () => {
    const [afisha, setAfisha] = useState<AfishaPreview[]>([]);
    const [page, setPage] = useState(0);
    const [categoryName, setCategoryName] = useState('');
    const navigate = useNavigate();
    const { categoryId } = useParams();

    const handleAfishaClick = (product: AfishaPreview) => {
        navigate(`/afisha/${product.id}`);
    };

    const handleLoadMore = () => setPage(prevState => prevState + 1);

    useEffect(() => {
        if (categoryId) {
            getCategoryAfishas(categoryId, { size: 24, page })
                .then(response => setAfisha(prevState => [...prevState, ...response.content]));
        }
    }, [categoryId, page]);

    useEffect(() => {
        if (categoryId) {
            getCategory(categoryId).then(response => setCategoryName(response.name));
        }
    }, [categoryId]);

    return (
        <div className="page">
            <h1>{categoryName}</h1>
            <Catalog afishas={afisha} onAfishaClick={handleAfishaClick} onLoadMore={handleLoadMore}/>
        </div>
    );
}
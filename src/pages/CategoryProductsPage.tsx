import {useEffect, useState} from "react";
import {AfishaPreview} from "../types/afisha.ts";
import {useNavigate, useParams} from "react-router-dom";
import {getCategoryProducts} from "../service/products.ts";
import {Catalog} from "../components/catalog/Catalog.tsx";
import {getCategory} from "../service/categories.ts";

export const CategoryProductsPage = () => {
    const [products, setProducts] = useState<AfishaPreview[]>([]);
    const [page, setPage] = useState(0);
    const [categoryName, setCategoryName] = useState('');
    const navigate = useNavigate();
    const { categoryId } = useParams();

    const handleProductClick = (product: AfishaPreview) => {
        navigate(`/product/${product.id}`);
    };

    const handleLoadMore = () => setPage(prevState => prevState + 1);

    useEffect(() => {
        if (categoryId) {
            getCategoryProducts(categoryId, { size: 24, page })
                .then(response => setProducts(prevState => [...prevState, ...response]));
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
            <Catalog afishas={products} onAfishaClick={handleProductClick} onLoadMore={handleLoadMore}/>
        </div>
    );
}
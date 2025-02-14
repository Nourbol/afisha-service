import {Catalog} from "../components/catalog/Catalog.tsx";
import {useEffect, useState} from "react";
import {AfishaPreview} from "../types/afisha.ts";
import {useNavigate, useSearchParams} from "react-router-dom";
import {searchAfishas} from "../service/afishas.ts";

export const SearchProductsPage = () => {
    const [products, setProducts] = useState<AfishaPreview[]>([]);
    const navigate = useNavigate();
    const [parameters] = useSearchParams();

    const handleProductClick = (product: AfishaPreview) => {
        navigate(`/product/${product.id}`);
    };

    useEffect(() => {
        // const query = parameters.get('query');
        searchAfishas().then(response => setProducts(response.content));
    }, [parameters]);

    return (
        <div className="page">
            <Catalog afishas={products} onAfishaClick={handleProductClick}/>
        </div>
    );
};

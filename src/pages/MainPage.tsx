import {Catalog} from "../components/catalog/Catalog.tsx";
import {AfishaPreview} from "../types/afisha.ts";
import {useEffect, useState} from "react";
import {searchAfishas} from "../service/products.ts";
import {useNavigate} from "react-router-dom";
import {Heading} from "../components/heading/Heading.tsx";

export const MainPage = () => {
    const [afishas, setAfishas] = useState<AfishaPreview[]>([]);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const handleAfishaClick = (afisha: AfishaPreview) => {
        navigate(`/afisha/${afisha.id}`);
    };

    const handleLoadMore = () => setPage(prevState => prevState + 1);

    useEffect(() => {
        searchAfishas()
            .then(response => setAfishas(prevState => [...prevState, ...response.content]));
    }, [page]);

    return (
        <div className="page">
            <Heading text="ПОПУЛЯРНОЕ" />
            <Catalog afishas={afishas} onAfishaClick={handleAfishaClick} onLoadMore={handleLoadMore} />
        </div>
    );
};

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAfisha} from "../service/afishas.ts";
import {Afisha} from "../types/afisha.ts";
import {DetailedAfishaCard} from "../components/product/DetailedAfishaCard.tsx";

export const ProductPage = () => {
    const { productId } = useParams();
    const [afisha, setAfisha] = useState<Afisha | null>(null);

    useEffect(() => {
        if (productId) {
            getAfisha(productId).then(response => setAfisha(response));
        }
    }, [productId]);

    return (
        <div className="page">
            {afisha && <DetailedAfishaCard {...afisha} />}
        </div>
    );
};

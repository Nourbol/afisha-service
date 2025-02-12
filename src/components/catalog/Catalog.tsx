import {AfishaPreview} from "../../types/afisha.ts";
import {AfishaPreviewCard} from "../product/AfishaPreviewCard.tsx";
import './Catalog.css';
import {Button} from "../button";

type PropsType = {
    afishas: AfishaPreview[];
    onAfishaClick?: (product: AfishaPreview) => void;
    onLoadMore?: () => void;
};

export const Catalog = ({
                            afishas,
                            onAfishaClick = () => {},
                            onLoadMore = () => {}
}: PropsType) => (
    <>
        <div className="catalog-container">
            {afishas.map((afisha) => (
                <AfishaPreviewCard key={afisha.id} afisha={afisha} onClick={onAfishaClick} />
            ))}
        </div>
        <br />
        <Button onClick={onLoadMore} className="button text-button">Показать еще</Button>
    </>
);

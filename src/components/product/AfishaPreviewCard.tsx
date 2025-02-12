import {AfishaPreview} from "../../types/afisha.ts";
import './AfishaPreviewCard.css'
import {formatDate} from "../../utils/date.ts";

type PropsType = {
    afisha: AfishaPreview;
    onClick?: (afisha: AfishaPreview) => void;
};

export const AfishaPreviewCard = ({afisha, onClick = () => {}}: PropsType) => (
    <div className="afisha-preview-card" onClick={() => onClick(afisha)}>
        <img src={`http://localhost:8082/api/v1/events/${afisha.id}/covers`} alt={afisha.title} className="afisha-preview-image" />
        <div className="afisha-preview-title">{afisha.title}</div>
        <div className="afisha-preview-details-container">
            <p>{formatDate(afisha.startTime)}</p>
            <p>{afisha.location}</p>
            <p>от {afisha.price}</p>
        </div>
    </div>
);

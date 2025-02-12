import './DetailedAfishaCard.css'
import {Afisha} from "../../types/afisha.ts";
import {formatDate} from "../../utils/date.ts";

type PropsType = Afisha;

export const DetailedAfishaCard =
    ({
         id,
         description,
         title,
         category,
         location,
         startTime,
         price,
    }: PropsType) => {
    return (
            <div className="detailed-afisha-card">
                <img src={`http://localhost:8082/api/v1/events/${id}/covers`} alt={title} className="afisha-image"/>
                <div className="afisha-content">
                    <p className="afisha-title">{title}</p>
                    <div className="afisha-description">
                        <h1 className="afisha-section-heading">Описание</h1>
                        <p>{description}</p>
                    </div>
                    <div className="afisha-details">
                        <div>
                            <h2 className="afisha-section-heading">Место проведения</h2>
                            <p>{location}</p>
                        </div>
                        <div>
                            <h2 className="afisha-section-heading">Дата и время проведения</h2>
                            <p>{formatDate(startTime)}</p>
                        </div>
                        <div>
                            <h2 className="afisha-section-heading">Цена</h2>
                            <p>{price} тенге</p>
                        </div>
                        <div>
                            <h2 className="afisha-section-heading">Жанр</h2>
                            <p>{category.name}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
    };

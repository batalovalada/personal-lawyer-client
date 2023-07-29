import React, {FC} from "react";
import { IReview } from "../../../../shared/types/IReview";

interface ReviewsItemProps {
    review: IReview;
}

export const ReviewsItem = ({ review }: ReviewsItemProps): JSX.Element => {
    return (
        <div className="reviews__item">
            <div className="reviews__photo">
                <img className="reviews__img" src={review.img} alt={review.name} />
            </div>
            <div className="reviews__content">
                <div className="reviews__name">{review.name}</div>
                <div className="reviews__service">{review.service}</div>
                <div className="reviews__text">{review.text}</div>
            </div>
        </div>
    )
}

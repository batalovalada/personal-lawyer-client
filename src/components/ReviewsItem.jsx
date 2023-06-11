import React from "react";

const ReviewsItem = (props) => {
    return (
        <div className="reviews__item">
            <div className="reviews__photo">
                <img className="reviews__img" src={props.review.img} alt={props.review.name} />
            </div>
            <div className="reviews__content">
                <div className="reviews__name">{props.review.name}</div>
                <div className="reviews__service">{props.review.service}</div>
                <div className="reviews__text">{props.review.text}</div>
            </div>
        </div>
    )
}

export default ReviewsItem;
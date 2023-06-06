import React from 'react';

const StaffItem = (props) => {
    return (
        <div className="staff__item">
            <div className="staff__photo">
                <img className="staff__img" src={props.staff.img} alt={props.staff.name} />
            </div>
            <div className="staff__content">
                <h3 className="staff__title">{props.staff.name}</h3>
                <div className="staff__job">{props.staff.job}</div>
                <a className="staff__email" href={`mailto:${props.staff.email}`}>{props.staff.email}</a>
            </div>
        </div>
    )
}

export default StaffItem;
import React from 'react';
import { IStaff } from '../types/IStaff';

interface StaffItemProps {
    staff: IStaff;
}

const StaffItem = ({ staff }: StaffItemProps): JSX.Element => {
    return (
        <div className="staff__item">
            <div className="staff__photo">
                <img className="staff__img" src={staff.img} alt={staff.title} />
            </div>
            <div className="staff__content">
                <h3 className="staff__title">{staff.title}</h3>
                <div className="staff__job">{staff.job}</div>
                <a className="staff__email" href={`mailto:${staff.email}`}>{staff.email}</a>
            </div>
        </div>
    )
}

export default StaffItem;
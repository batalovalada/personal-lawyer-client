import React from "react";
import { IStaff } from "../../../../shared/types/IStaff";
import {StaffItem} from "../..";

interface StaffListProps {
    allStaff: IStaff[];
}

export const StaffList = ({ allStaff }: StaffListProps): JSX.Element => {
    if (!allStaff.length) {
        return (<h2 className="error__sm-title">Ничего не найдено!</h2>)
    }

    return (
        <div className="staff__inner">
            {allStaff.map(item => <StaffItem staff={item} key={item.id}/>)}
        </div>
    )
}

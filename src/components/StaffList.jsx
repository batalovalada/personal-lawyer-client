import React from "react";
import StaffItem from "./StaffItem";

const StaffList = ({allStaff}) => {
    return (
        <div className="staff__inner">
            {allStaff.map(item => <StaffItem staff={item} key={item.id}/>)}
        </div>
    )
}

export default StaffList;
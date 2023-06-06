import React from "react";
import StaffItem from "./StaffItem";

const Staff = () => {
    return (
        <div className="staff">
            <div className="container">
                <div className="staff__inner">
                    <StaffItem staff={{img: 'https://placehold.it/130', name: 'Ivan Ivanov', job: 'Partner', email: 'ivan.ivanov@gmail.com'}}/>
                    <StaffItem staff={{ img: 'https://placehold.it/130', name: 'Ivan Ivanov', job: 'Partner', email: 'ivan.ivanov@gmail.com' }} />
                    <StaffItem staff={{ img: 'https://placehold.it/130', name: 'Ivan Ivanov', job: 'Partner', email: 'ivan.ivanov@gmail.com' }} />
                    <StaffItem staff={{ img: 'https://placehold.it/130', name: 'Ivan Ivanov', job: 'Partner', email: 'ivan.ivanov@gmail.com' }} />
                    <StaffItem staff={{ img: 'https://placehold.it/130', name: 'Ivan Ivanov', job: 'Partner', email: 'ivan.ivanov@gmail.com' }} />
                </div>
            </div>
        </div>
    )
}

export default Staff;
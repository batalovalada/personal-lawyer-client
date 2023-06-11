import React from "react";
import classes from "./MyLink.module.css";
import { Link } from "react-router-dom";

const MyLink = ({to, children, ...props}) => {
    return (
        <Link className={classes.myLink} to={to} {...props}>
            {children}
        </Link>
    )
}

export default MyLink;

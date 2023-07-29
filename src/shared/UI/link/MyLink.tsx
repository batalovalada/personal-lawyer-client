import React from "react";
import classes from "./MyLink.module.css";
import { Link } from "react-router-dom";

interface MyLinkProps {
    to: string;
    children?: React.ReactNode;
}

const MyLink = ({ to, children, ...props }: MyLinkProps): JSX.Element => {
    return (
        <Link className={classes.myLink} to={to} {...props}>
            {children}
        </Link>
    )
}

export default MyLink;

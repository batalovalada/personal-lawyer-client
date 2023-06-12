import React from "react";
import Intro from "../Intro";
import Articles from "../Articles";

const ArticlesPage = () => {
    return (
        <div className="page">
            <Intro title='Статьи' />
            <Articles />
        </div>
    )
}

export default ArticlesPage;
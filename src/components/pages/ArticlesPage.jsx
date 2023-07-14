import React from "react";
import Intro from "../Intro";
import Articles from "../Articles";
import ScrollToTop from "../../scrollToTop";

const ArticlesPage = () => {
    ScrollToTop()
    return (
        <div className="page">
            <Intro title='Статьи' />
            <Articles />
        </div>
    )
}

export default ArticlesPage;
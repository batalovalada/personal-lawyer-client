import React from "react";
import Intro from "../components/Intro";
import Articles from "../components/Articles";

const ArticlesPage = () => {
    return (
        <div className="page">
            <Intro title={'Статьи'} />
            <Articles />
        </div>
    )
}

export default ArticlesPage;
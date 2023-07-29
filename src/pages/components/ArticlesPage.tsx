import React from "react";
import {Intro} from "../../entities/Intro";
import {Articles} from "../../features/Articles";
import {ScrollToTop} from "../lib/scroll";

const ArticlesPage: React.FC = () => {
    ScrollToTop()
    return (
        <div className="page">
            <Intro title='Статьи' />
            <Articles />
        </div>
    )
}

export default ArticlesPage;
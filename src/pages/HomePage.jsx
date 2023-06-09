import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Promo from "../components/Promo";
import Articles from "../components/Articles";

const HomePage = () => {
    return (
        <div className="page">
            <Intro title={'Главная'}/>
            <About/>
            <Articles/>
            <Promo/>
        </div>
    )
}

export default HomePage;
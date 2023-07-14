import React from "react";
import Intro from "../Intro";
import Staff from "../Staff";
import Section from '../Section';
import QuestionsForm from "../QuestionsForm";
import ScrollToTop from "../../scrollToTop";

const AboutUsPage = () => {
    ScrollToTop();
    return (
        <div className="page page--mb">
            <Intro title='О нас' />
            <Section section={{ 
                title: 'О нас',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.',
                contentClassName: "section__content--text" }} />
            <Staff/>
            <div className="container">
                <QuestionsForm title="Задать вопрос" />
            </div>
        </div>
    )
}

export default AboutUsPage;
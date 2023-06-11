import React from "react";
import Intro from "../components/Intro";
import Staff from "../components/Staff";
import Section from '../components/Section';
import QuestionsForm from "../components/QuestionsForm";

const AboutUsPage = () => {
    return (
        <div className="page page--mb">
            <Intro title='О нас' />
            <Section section={{ title: 'О нас', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.' }} />
            <Staff/>
            <QuestionsForm title="Задать вопрос"/>
        </div>
    )
}

export default AboutUsPage;
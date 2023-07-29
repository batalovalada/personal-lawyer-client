import React from "react";
import { SectionVariant, Section } from "../../entities/Section";
import {Intro} from "../../entities/Intro";
import {Staff} from "../../features/Staff";
import {QuestionsForm} from "../../features/QuestionsUser";
import {ScrollToTop} from "../lib/scroll";

const AboutUsPage: React.FC = () => {
    ScrollToTop();
    return (
        <div className="page page--mb">
            <Intro title='О нас' />
            <Section title= 'О нас' contentName={SectionVariant.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.
            </Section>
            <Staff/>
            <div className="container">
                <QuestionsForm title="Задать вопрос" />
            </div>
        </div>
    )
}

export default AboutUsPage;
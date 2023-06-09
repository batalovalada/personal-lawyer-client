import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Staff from "../components/Staff";
import Section from '../components/Section'

const AboutUsPage = () => {
    return (
        <div className="page">
            <Intro title={'О нас'} />
            <About />
            <Section section={{ title: 'Title Title title', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.' }} />
            <Staff/>
        </div>
    )
}

export default AboutUsPage;
import React from 'react';
import AboutItem from './AboutItem';

const About = () => {
    const aboutItems = [
        { id: 31, icon: 'about1', title: 'Представительство в суде', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { id: 32, icon: 'about2', title: 'Уголовные дела', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { id: 33, icon: 'about3', title: 'Гражданские дела', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { id: 34, icon: 'about4', title: 'Юридические консультации', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' }
    ];

    return (
        <div className="about">
            <div className="container">
                <div className="about__inner">
                    {aboutItems.map(item => <AboutItem item={item} key={item.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default About;
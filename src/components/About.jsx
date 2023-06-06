import React from 'react';
import AboutItem from './AboutItem';

const About = () => {
    const items = [
        { icon: 'about1', title: 'Представительство в суде', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'},
        { icon: 'about2', title: 'Уголовные дела', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { icon: 'about3', title: 'Гражданские дела', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { icon: 'about4', title: 'Юридические консультации', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' }
    ];

    return (
        <div className="about">
            <div className="container">
                <div className="about__inner">
                    {items.map(item => <AboutItem item={item} key={item.icon}/>)}
                </div>
            </div>
        </div>
    )
}

export default About;
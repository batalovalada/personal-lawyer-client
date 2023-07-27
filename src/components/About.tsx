import React from 'react';
import AboutItem from './AboutItem';
import aboutItems from '../tpl/data/allAbout.json';

const About = (): JSX.Element => {
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
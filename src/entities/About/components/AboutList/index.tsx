import React from 'react';
import {AboutItem} from '../..';
import aboutItems from '../../../../app/assets/data/allAbout.json';

export const AboutList = (): JSX.Element => {
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

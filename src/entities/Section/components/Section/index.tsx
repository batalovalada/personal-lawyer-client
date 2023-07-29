import React, {FC} from "react";

export enum SectionVariant {
    default = 'section__content',
    text = 'section__content section__content--text',
    slider = 'section__content section__content--slider'
}

interface SectionProps {
    title: string;
    contentName: SectionVariant;
    children: React.ReactNode;
}

export const Section: FC<SectionProps> = ({ title, contentName, children }) => {
    return (
        <section className="section">
            <div className="container">
                <div className="section__inner">
                    <h1 className="section__title">{title}</h1>
                    <div className={contentName}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}
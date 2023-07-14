import React from "react";

const Section = ({section}) => {
    return (
        <section className="section">
            <div className="container">
                <div className="section__inner">
                    <h1 className="section__title">{section.title}</h1>
                    <div className={section.contentClassName === "" ? "section__content" : `section__content ${section.contentClassName}`}>
                        {section.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;
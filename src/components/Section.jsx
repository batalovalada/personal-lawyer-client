import React from "react";

const Section = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="section__inner">
                    <h1 className="section__title">{props.section.title}</h1>
                    <div className="section__content">{props.section.content}</div>
                </div>
            </div>
        </section>
    )
}

export default Section;
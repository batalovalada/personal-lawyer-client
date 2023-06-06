import React from "react";
import ServicesItem from "./ServicesItem";

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="services__inner">
                    <ServicesItem service={{icon: 'about1', href: '#', title: 'Service title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'}}/>
                    <ServicesItem service={{ icon: 'about2', href: '#', title: 'Service title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' }} />
                    <ServicesItem service={{ icon: 'about3', href: '#', title: 'Service title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' }} />
                    <ServicesItem service={{ icon: 'about2', href: '#', title: 'Service title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' }} />
                    <ServicesItem service={{ icon: 'about4', href: '#', title: 'Service title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' }} />
                    <ServicesItem service={{ icon: 'about3', href: '#', title: 'Service title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' }} />
                </div>
            </div>
        </div>
    )
}

export default Services;
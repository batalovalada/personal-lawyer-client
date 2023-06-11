import React from "react";
import HomeIntro from "../components/HomeIntro";
import About from "../components/About";
import Promo from "../components/Promo";
import Section from "../components/Section";
import ReviewsItem from "../components/ReviewsItem";
import ServicesItem from "../components/ServicesItem";
import StaffItem from "../components/StaffItem";
import Contacts from "../components/Contacts";

const HomePage = () => {
    const homeServices = [
        {
            id: 21,
            icon: 'about1',
            title: 'Корпоративное право',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 22,
            icon: 'about4',
            title: 'Уголовно-правовая защита бизнеса',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 23,
            icon: 'about2',
            title: 'Законопроектная работа',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        }

    ]

    const homeStaff = [
        { id: 41, img: 'https://placehold.it/130', title: 'Иван Иванов', job: 'Партнёр', email: 'ivan.ivanov@gmail.com' },
        { id: 42, img: 'https://placehold.it/130', title: 'Светлана Сергеева', job: 'Партнёр', email: 'svetlana_serg@gmail.com' },
        { id: 43, img: 'https://placehold.it/130', title: 'Пётр Смирнов', job: 'Руководитель группы корпоративного права', email: 'petr.smirnov@gmail.com' },
        { id: 44, img: 'https://placehold.it/130', title: 'Александр Иванов', job: 'Ведущий эксперт', email: 'al_ivanov@gmail.com' },
        { id: 45, img: 'https://placehold.it/130', title: 'Мария Смирнова', job: 'Партнёр', email: 'mariasmirnova@gmail.com' },
        { id: 46, img: 'https://placehold.it/130', title: 'Татьяна Ильина', job: 'Старший партнёр', email: 'tatiana_ilina@gmail.com' }
    ]

    return (
        <div className="page">
            <HomeIntro title="Квалифицированные юристы" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
            <About/>
            <Section section={{ title: "Качественные правовые услуги", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas."}}/>

            <Promo/>

            <Section section={
                {
                    title: "Команда",
                    content: <div className="staff__inner">
                        {homeStaff.map(item =>
                            <StaffItem staff={item} key={item.id} />
                        )}
                    </div>
                }
            } />

            <Section section={
                {
                    title: "Услуги",
                    content: <div className="services__content services__content--home">
                                {homeServices.map(service => 
                                    <ServicesItem service={service} key={service.id} />
                                )}
                             </div>
                }
            } />

            <Section section={
                { 
                    title: "Отзывы",
                    content: <ReviewsItem review={{ name: "Ivan Ivanov", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas.", img: 'https://placehold.it/130', service: 'Уголовно-правовая защита бизнеса' }}/> 
                }
            }/>

            <Contacts/>
            
        </div>
    )
}

export default HomePage;
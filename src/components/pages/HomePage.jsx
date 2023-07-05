import React from "react";
import HomeIntro from "../HomeIntro";
import About from "../About";
import Promo from "../Promo";
import Section from "../Section";
import ReviewsItem from "../ReviewsItem";
import ServicesItem from "../ServicesItem";
import StaffList from "../StaffList";
import Contacts from "../Contacts";
import Slider from 'react-slick';
import introImg1 from '../../assets/images/intro/1.jpg';
import introImg2 from '../../assets/images/intro/5.jpg';
import introImg3 from '../../assets/images/intro/3.jpg';
import introImg4 from '../../assets/images/intro/4.jpg';

const HomePage = () => {
    //content===============================================================================
    const homeIntro = [
        {   
            image: introImg1,
            title: "Квалифицированные юристы",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            image: introImg2,
            title: "Многолетний опыт",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            image: introImg3,
            title: "Конфиденциально",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            image: introImg4,
            title: "Скорость решения проблем",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
    ]

    const homeServices = [
        {
            id: 21,
            icon: 'about1',
            title: 'Корпоративное право',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 23,
            icon: 'about2',
            title: 'Законопроектная работа',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 29,
            icon: 'about2',
            title: 'Юрист по недвижимости',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 291,
            icon: 'about1',
            title: 'Составление договоров',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 22,
            icon: 'about4',
            title: 'Уголовно-правовая защита бизнеса',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'
        },
        {
            id: 292,
            icon: 'about4',
            title: 'Представительство в суде',
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

    const reviews = [
        {   
            id: 1,
            name: "Иван Иванов",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas.",
            img: 'https://placehold.it/130',
            service: 'Уголовно-правовая защита бизнеса' 
        },
        {
            id: 2,
            name: "Светлана Сергеева",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas.",
            img: 'https://placehold.it/130',
            service: 'Банковская и финансовая практика'
        },
        {
            id: 3,
            name: "Пётр Смирнов",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas.",
            img: 'https://placehold.it/130',
            service: 'Представительство в суде'
        },
        {
            id: 4,
            name: "Мария Смирнова",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas.",
            img: 'https://placehold.it/130',
            service: 'Составление договоров'
        }
    ]

    //sliders======================================================================================
    const introSettings ={
        className: "slick-intro",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const reviewsSettings = {
        className: "slick-section",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const servicesSettings = {
        className: "slick-section",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="page">
            <Slider {...introSettings}>
                {homeIntro.map(item => 
                <HomeIntro intro={item} key={item.title}/>
                )}
            </Slider>
            
            <About/>
            <Section section={{ title: "Качественные правовые услуги", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas."}}/>

            <Promo/>

            <Section section={
                {
                    title: "Команда",
                    content: <StaffList allStaff={homeStaff}/>
                }
            } />

            <Section section={
                {
                    title: "Услуги",
                    content: 
                    <Slider {...servicesSettings}>
                        {homeServices.map(service => 
                            <ServicesItem service={service} key={service.id} />
                        )}
                    </Slider>
                }
            } />

            <Section section={
                { 
                    title: "Отзывы",
                    content: 
                    <Slider {...reviewsSettings}>
                        { reviews.map(review => 
                                <ReviewsItem review={review} key={review.id}/>
                            )}
                    </Slider>
                }
            }/>

            <Contacts/>
            
        </div>
    )
}

export default HomePage;
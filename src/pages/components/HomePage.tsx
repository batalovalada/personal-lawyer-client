import React, {useState} from "react";
import { SectionVariant } from "../../entities/Section";
import MyModal from "../../shared/UI/modal/MyModal";
import {OrderForm} from "../../entities/Intro";
import {HomeIntro} from "../../entities/Intro";
import {AboutList} from "../../entities/About";
import {PromoList} from "../../entities/Promo";
import {Section} from "../../entities/Section";
import {ReviewsItem } from "../../entities/Reviews";
import {ServicesItem} from "../../entities/Services";
import {StaffList} from "../../entities/Staff";
import {Contacts} from "../../widgets/Contacts";
import Slider from 'react-slick';
import {ScrollToTop} from "../lib/scroll";

//types
import {IHomeIntro} from '../../shared/types/IHomeIntro';
import { IService } from "../../shared/types/IService";
import { IReview } from "../../shared/types/IReview";

//content
import { homeIntro } from "../consts/homeIntro";
import { homeServices } from "../consts/homeServices";
import { homeStaff } from "../consts/homeStaff";
import { reviews } from "../consts/reviews";

const HomePage: React.FC = () => {
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

    //======================modal===================================
    const [modal, setModal] = useState<boolean>(false);

    //scroll to top
    ScrollToTop();

    return (
        <div className="page">
            <Slider {...introSettings}>
                {homeIntro.map((item: IHomeIntro): React.ReactNode => 
                <HomeIntro intro={item} setModal={setModal} key={item.title}/>
                )}
            </Slider>
            <MyModal active={modal} setActive={setModal}>
                <div className="form-order__modal">
                    <OrderForm active={modal} setActive={setModal} />
                </div>
            </MyModal>
            
            <AboutList/>
            <Section title= "Качественные правовые услуги" contentName={SectionVariant.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur. Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas. Dolores accusantium corrupti voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi dicta soluta accusamus rerum voluptatem ab, odio pariatur.Perspiciatis aspernatur corporis quis, corrupti vero explicabo magnam voluptas.Dolores accusantium corrupti voluptas.
            </Section>

            <PromoList/>

            <Section title= "Команда" contentName={SectionVariant.default}> 
                <StaffList allStaff={homeStaff}/>
            </Section>

            <Section title= "Услуги" contentName={SectionVariant.slider}>
                <Slider {...servicesSettings}>
                    {homeServices.map((service: IService): React.ReactNode => 
                        <ServicesItem service={service} key={service.id} />
                    )}
                </Slider>
            </Section>

            <Section title= "Отзывы" contentName={SectionVariant.slider}>
                <Slider {...reviewsSettings}>
                    {reviews.map((review: IReview): React.ReactNode => 
                            <ReviewsItem review={review} key={review.id}/>
                        )}
                </Slider>
            </Section>
    
            <Contacts/>
            
        </div>
    )
}

export default HomePage;
import React from 'react';
import styles from './Find.module.css';
import {data} from "../../data";
import Card from './Card';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const Find = () => {
    return (
        <div className={styles.find}>
            <div className={styles.heading}>
                <h1>Find your drive</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore the world's largest car sharing marketplace</span>
                    </p>
                </div>
            </div>
            <div className={styles.slider_container}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                    breakpoints={{
                        // when window width is >= 340px
                        340: {
                            width: 200,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 4,
                        },
                        // when window width is >= 1040px
                        1040: {
                            width: 1040,
                            slidesPerView: 5,
                        },
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {data.map(element =>
                        <SwiperSlide>
                            <Card
                                key={element.id}
                                image={element.image}
                                make={element.make}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default Find;
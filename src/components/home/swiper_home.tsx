'use client';

import { homeSlides } from "@/components/constants/home-slides";

import { EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    slides: Array<{ slide: string }>;
}

export const Swipper = (props: Props) => {

    const { slides } = props;

    return (
        <>
            <Swiper
                // install Swiper modules
                className="min-w-full min-h-fit mt-10 text-black"
                modules={[EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                speed={1000}
                effect={'fade'}
                autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}>
                {
                    slides.map((s, index) => (
                        <SwiperSlide key={index}>
                            <img src={s.slide} className="object-cover"/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
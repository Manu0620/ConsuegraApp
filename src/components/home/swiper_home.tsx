import { homeSlides } from "@/components/constants/home-slides";

import { EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperHome = () => {
    return (
        <>
            <Swiper
                // install Swiper modules
                className="min-w-full min-h-fit mt-10 border border-transparent rounded-bl-[60px] rounded-br-[30px] "
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
                    homeSlides.map((s, index) => (
                    <SwiperSlide key={index}>
                        <img src={s.slide} className="object-cover"/>
                    </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
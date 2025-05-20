import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import {useEffect, useState} from "react";
import axios from "axios";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Carousel = ({banners, bannersLoading}) => {
    return (
        <>

            <div className="max-w-[90vw] mx-auto rounded-lg relative">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    className="rounded-lg overflow-hidden"
                >
                    {bannersLoading
                        ?
                        <>
                            <SwiperSlide key="id2">
                                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                                    <img
                                        src='https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE='
                                        alt="Banner"
                                        className="absolute top-0 left-0 w-full h-full object-fill transition-transform duration-500 hover:scale-105 animate-pulse"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key="id1">
                                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                                    <img
                                        src='https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE='
                                        alt="Banner"
                                        className="absolute top-0 left-0 w-full h-full object-fill transition-transform duration-500 hover:scale-105 animate-pulse"
                                    />
                                </div>
                            </SwiperSlide>
                        </>

                        : banners.map((banner) => (
                            <SwiperSlide key={banner._id}>
                                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                                    <a href={banner.redirectUrl}>
                                        <img
                                            src={banner.imageUrl}
                                            alt="Banner"
                                            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"

                                        />
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>


        </>
    )
}

export default Carousel


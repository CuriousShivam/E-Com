import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {useNavigate} from "react-router-dom";

const MainProducts = ({mainProducts, mainProductsLoading}) => {
    const navigate = useNavigate()

    const loadingSkeleton = () => {
        return Array.from({ length: 5 }, (_, i) => (
            <SwiperSlide key={`skeleton-${i}`}>
                <div className="flex justify-center flex-col items-center overflow-hidden relative">
                    <div className="overflow-hidden">
                        <img
                            src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="
                            alt="loading"
                            className="h-full object-contain transition-transform duration-300 transform hover:scale-105 animate-pulse"
                        />
                    </div>
                    <h1 className="p-3 animate-pulse">Loading...</h1>
                </div>
            </SwiperSlide>
        ));
    };

    return (<>
        <div className="max-w-[90vw] mx-auto rounded-lg relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                className="rounded-lg overflow-hidden"
            >
                {mainProductsLoading
                    ? loadingSkeleton()
                    : mainProducts?.map((product) => (
                        <SwiperSlide key={product._id}>
                            <div className="flex justify-center flex-col items-center overflow-hidden relative h-full "
                                 onClick={() => navigate(`/product-info/${product._id}`)}
                            >
                                <div className="overflow-hidden ">
                                    <img
                                        src={product.images?.[0]?`https://ik.imagekit.io/0Shivams${product.images?.[0]}` : "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="}
                                        alt={product.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "../../../../public/no-img.png";
                                        }}
                                        className="h-[200px] object-contain transition-transform duration-300 transform hover:scale-105"
                                    />
                                </div>
                                <h1 className="p-3 mb-10">{product.name}</h1>
                            </div>

                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    </>)
}

export default MainProducts;
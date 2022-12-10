import { Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

const SwiperPage = () => {
    return <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoPlay
        className="text-white max-w-screen-md mx-auto h-screen grid place-items-center"
        spaceBetween={150}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide className="h-20 border border-white">Slide 1</SwiperSlide>
        <SwiperSlide className="h-20 border border-white">Slide 2</SwiperSlide>
        <SwiperSlide className="h-20 border border-white">Slide 3</SwiperSlide>
        <SwiperSlide className="h-20 border border-white">Slide 4</SwiperSlide>
    </Swiper>
}

export default SwiperPage

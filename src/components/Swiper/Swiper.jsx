import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper as SwiperJs } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.scss';

const Swiper = ({ slides }) => {
  return (
    <SwiperJs
      pagination={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="swiper"
    >
      {slides}
    </SwiperJs>
  );
};

export default Swiper;

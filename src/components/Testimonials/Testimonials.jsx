import { useSelector } from 'react-redux';
import Swiper from '../Swiper/Swiper.jsx';
import { SwiperSlide } from 'swiper/react';
import { Testimonial } from './Testimonial.jsx';
import Icon from '../Icon/icon.jsx';

import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = useSelector((state) => state.testimonials.items);

  const renderSlides = () => {
    return testimonials?.map((testimonial) => (
      <SwiperSlide key={testimonial.id}>
        <Testimonial testimonial={testimonial} />
      </SwiperSlide>
    ));
  };

  return (
    <div className="container">
      <section className="testimonials">
        <p className="testimonials-subtitle">What our customer say</p>
        <h2 className="testimonials-title">Testimonials</h2>
        <Icon name="quote" color="#BFBEBE" className="testimonials-icon" />

        <Swiper slides={renderSlides()} />
      </section>
    </div>
  );
};

export default Testimonials;

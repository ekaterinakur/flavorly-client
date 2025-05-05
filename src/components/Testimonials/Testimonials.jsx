import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swiper from '../Swiper/Swiper.jsx';
import { SwiperSlide } from 'swiper/react';
import { Testimonial } from './Testimonial.jsx';
import Icon from '../Icon/Icon.jsx';
import { fetchTestimonials } from '../../api/testimonials.js';

import './Testimonials.scss';

const Testimonials = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector((state) => state.testimonials.items);

  const renderSlides = () => {
    return testimonials?.map((testimonial) => (
      <SwiperSlide key={testimonial.id}>
        <Testimonial testimonial={testimonial} />
      </SwiperSlide>
    ));
  };

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  return testimonials?.length > 0 && (
    <section className="testimonials section">
      <div className="container ">
        <p className="testimonials-subtitle">What our customer say</p>
        <h2 className="testimonials-title">Testimonials</h2>
        <Icon name="quote" color="#BFBEBE" className="testimonials-icon" />

        <Swiper slides={renderSlides()} />
      </div>
    </section>
  );
};

export default Testimonials;

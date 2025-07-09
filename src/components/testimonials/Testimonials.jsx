import React from 'react';
import './Testimonials.css';

import Image1 from '../../assets/avatar-4.svg'; // placeholder avatar

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "Mr. N. Venkateswarlu",
      subtitle: "Faculty Mentor @ Malla Reddy Engineering College",
      comment:
        "Vinay showed impressive dedication while developing the NearbyOFF platform. His project stood out for solving a real-world problem through technical innovation and creativity.",
    },
  ];

  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => (
          <SwiperSlide className="testimonial__item" key={id}>
            <div className="thumb">
              <img src={image} alt={title} />
            </div>
            <h3 className="testimonial__title">{title}</h3>
            <span className="subtitle">{subtitle}</span>
            <div className="comment">{comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

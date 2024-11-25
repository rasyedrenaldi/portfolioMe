// Import Swiper React components
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import testimonials from './data';
import Testimonial from './Testimonial';
import './testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testmonials from some of my clients</p>
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

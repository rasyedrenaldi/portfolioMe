// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Pagination } from "swiper";


import testimonials from './data'
import Testimonial from "./Testimonial";
import './testimonials.css'



import './testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say </h2>
      <p>
        These are unbiased testimonials from some of my clients
      </p>
      <div className="container">

      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import Slider from 'react-slick';
import { topmeals } from './TopMeals';
import CarouselItem from './carouselItems'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MultipleItemCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    authplaySpeed:2000,
    arrows:false

  };

  return (
    <div>
      <Slider {...settings}>
        {topmeals.map((item) => ( 
          <CarouselItem image={item.Image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItemCarousel;

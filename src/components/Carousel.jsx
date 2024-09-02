import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [image1, image2, image3];

const Carousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      {mounted && (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;


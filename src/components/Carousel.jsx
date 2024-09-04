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
    arrows: false,
    customPaging: (i) => (
      <button className="w-3 h-3 bg-customYellow rounded-full"></button>
    ),
  };

  const getTextStyle = (index) => {
    switch (index) {
      case 0:
        return "text-4xl font-playfair";
      case 1:
        return "text-5xl font-montserrat";
      case 2:
        return "text-3xl font-roboto";
      default:
        return "text-4xl font-playfair";
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto my-8">
      {mounted && (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg p-4">
                <p className={`text-white ${getTextStyle(index)}`}>
                  Discover Our Flavor
                </p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;
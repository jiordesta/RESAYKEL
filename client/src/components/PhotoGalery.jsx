import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhotoGalery({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full overflow-hidden rounded-lg">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="h-[300px] sm:h-[400px] md:h-[500px]">
            <div
              className="h-full rounded-b-lg"
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

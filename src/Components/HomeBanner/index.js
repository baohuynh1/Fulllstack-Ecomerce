import React from "react";
import Slider from "react-slick";
const HomeBanner =()=> {
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="homeBannerSection">
        <Slider {...settings}>
        <div className="item">
            <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" className="w-100"/>
            

        </div>
        <div className="item">
            <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" className="w-100"/>
            

        </div>

        </Slider>

    </div>

  )}
  export default HomeBanner;
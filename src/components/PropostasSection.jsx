// src/components/PropostasSection.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PropostasSection = ({ config }) => {
  const { proposals, primary, secondary, text } = config.candidate || {};

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <section id="propostas" className="p-6" >
      <div className="slider-container">
        <Slider {...settings}>
          {proposals && proposals.map((proposal, index) => (
            <div key={index} className="p-4">
              <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: secondary }} >
                <h3 className="text-xl font-bold mb-2 text-center"  style={{color: text}}>{proposal.title}</h3>
                <p className="text-base text-center"  style={{color: text}}>{proposal.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PropostasSection;

import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import imageFallBack from '../../../../../assets/images/fallBack.jpg';

import './styles.scss';

const CourtSlider = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const contentToRender = items.length >= 8 ? items : new Array(8).fill(imageFallBack);

  const onHandleImageLoadError = (e) => {
    e.target.src = imageFallBack;
  };

  return (
    <Slider {...settings}>
      {contentToRender.map((item, index) => (
        <div className="slider-image-container" key={item}>
          <img className="slider-image" src={item} alt={`product-${index}`} onError={onHandleImageLoadError} />
        </div>
      ))}
    </Slider>
  );
};

CourtSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CourtSlider;

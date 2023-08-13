import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './settings';
import * as S from './styles';

const Carousel = ({
  children
}) => {
  const slider = useRef();

  return (
    <S.Wrapper>
      <S.CarouselWrapper>
        <Slider ref={slider} {...settings}>
          {children}
        </Slider>
      </S.CarouselWrapper>
    </S.Wrapper>
  );
};

Carousel.propTypes = {
  children: PropTypes.node
};

export default React.memo(Carousel);

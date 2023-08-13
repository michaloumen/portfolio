import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 74rem;
`;

export const CarouselWrapper = styled.div`
  .button-next, .button-prev {
    position: absolute;
    top: 60%;
    transform: translate(0, -50%);
    z-index: 1;
  }
  .button-prev {
    left: -12px;
  }
  .button-next {
    right: -18px;
  }
  .slick-track {
    margin-left: -15px;
  }
  .slick-slide > div {
    margin-left: 15px;
  }
  .slick-list {
    margin: 0 3px;
  }
`;


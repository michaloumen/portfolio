import ButtonArrow from '../../atoms/ButtonArrow';

const CustomArrow = ({
  invertDirection, onClick, customClass, testId
}) => (
  <ButtonArrow
    invertDirection={invertDirection}
    onClick={onClick}
    className={customClass}
  />
);

const settings = {
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  variableWidth: true,
  nextArrow: <CustomArrow invertDirection customClass='button-next'/>,
  prevArrow: <CustomArrow customClass='button-prev'/>,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

export default settings;

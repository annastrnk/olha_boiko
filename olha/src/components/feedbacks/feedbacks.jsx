import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './feedbacks.scss'
import feedback from '../../../public/feedback.json'

export default function Feedbacks() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    // dots: true,
  };
  return (
    <div className="slider-container">
      <h4 className="title">Відгуки</h4>
      <Slider {...settings}>
       {feedback.map((item)=>(
        <img key={item.id} src={item.url}
        >
        </img> 
       ))}
      </Slider>
    </div>
  );
}


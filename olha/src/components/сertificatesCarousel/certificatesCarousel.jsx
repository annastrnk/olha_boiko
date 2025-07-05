import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./certificatesCarousel.scss";
import certificates from "../../../public/certificates.json";

export default function CertificatesCarousel() {
  const settings = {
    nfinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="certificates accent-block">
      <div className="container">
        <h4 className="title">Сертифікати</h4>
        <div className="certificates-carousel">
          <Slider {...settings}>
            {certificates.map((item) => (
              <img key={item.id} src={item.url}></img>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

import "./home.scss";
import image from "../../../public/images/IMG_9144.jpg";
import { useSelector } from "react-redux";
import Services from "../../components/services/services";

export default function Home() {


  const fetchData = useSelector((state) => state.data.data);

  return (
    <>
      <div className="main-info">
        <img src={image} alt="main-photo" />
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio earum
          distinctio cupiditate officiis in, obcaecati sapiente labore itaque
          porro esse maxime aut numquam, consequuntur fugit culpa. Possimus quod
          a soluta.
        </div>
      </div>
      <div className="services-wrapper">
        {!fetchData
          ? "Loading"
          : fetchData.map((info) => <Services key={info.id} info={info} />)}
      </div>
    </>
  );
}

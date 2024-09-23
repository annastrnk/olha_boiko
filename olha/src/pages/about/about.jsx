import image from "../../../public/images/IMG_9144.jpg";
import './about.scss'


export default function AboutMe() {
  return (
    <div className="info-wrapper">
      <div className="info-box">
        <img src={image} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quas, voluptatem quis sed reprehenderit cumque? Aperiam molestiae
          nihil facilis tenetur?
        </p>
      </div >
      <div className="info-box"> 
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quas, voluptatem quis sed reprehenderit cumque? Aperiam molestiae
          nihil facilis tenetur?
        </p>
        <img src={image} alt="" />
       
      </div>
      <di className="info-box">
        <img src={image} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quas, voluptatem quis sed reprehenderit cumque? Aperiam molestiae
          nihil facilis tenetur?
        </p>
      </di>
      <div className="info-box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quas, voluptatem quis sed reprehenderit cumque? Aperiam molestiae
          nihil facilis tenetur?
        </p>
        <img src={image} alt="" />
        
      </div>
    </div>
  );
}

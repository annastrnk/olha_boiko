import Feedbacks from "../../components/feedbacks/feedbacks";
import ImageDiploma from "../../components/imageDiploma/imageDiploma";
import "./about.scss";

export default function AboutMe() {
  return (
    <div className="info-wrapper">
      <div className="info-about">
<img className="info-photo"  src="../../../public/images/Фото144_resized.jpg" alt="" />
<div>
  Щось напишемо цікаве
</div>
      </div>
      <ImageDiploma />
      <Feedbacks />
    </div>
  );
}

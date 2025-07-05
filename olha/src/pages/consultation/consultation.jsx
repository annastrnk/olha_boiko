import ConsultationRules from "../../components/consultationRules/consultationRules";
import "./consultation.scss";

import { NavLink } from "react-router-dom";

export default function Consultation() {
  return (
    <section className="container">
      <div className="consult-wrapper">
        <div className="online-cons">
          <img src="../../../public/images/Фото131_resized.jpg" alt="" />
          <h2>Онлайн консультації </h2>
          <NavLink to="/consultation/online" className="learn-more">
            Дізнатись більше
          </NavLink>
        </div>
        <div className="offline-cons">
          <img src="../../../public/images/Фото162_resized.jpg" alt="" />
          <h2>Очні консультації</h2>
          <NavLink to="/consultation/offline" className="learn-more">
            Дізнатись більше
          </NavLink>
        </div>
      </div>
      <ConsultationRules />
    </section>
  );
}

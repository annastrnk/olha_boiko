import ConsultationRules from "../../components/consultationRules/consultationRules";
import "./consultation.scss";

import { NavLink } from "react-router-dom";

export default function Consultation() {
  return (
    <section className="consult container">
      <div className="consult-wrapper">
        <div className="consult-wrapper-online">
          <img src="/images/Фото131_resized.jpg" alt="" />
          <h2>Онлайн консультації </h2>
          <button className="btn-main">
          <NavLink to="/consultation/online" className="learn-more">
            Дізнатись більше
          </NavLink>
          </button>
        </div>
        <div className="consult-wrapper-offline">
          <img src="/images/Фото162_resized.jpg" alt="" />
          <h2>Очні консультації</h2>
          <button className="btn-main">
          <NavLink to="/consultation/offline" className="learn-more">
            Дізнатись більше
          </NavLink>
          </button>
        </div>
      </div>
      <ConsultationRules />
    </section>
  );
}

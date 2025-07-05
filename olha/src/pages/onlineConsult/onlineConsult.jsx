import ConsultationSection from "../../components/consultationSection/ConsultationSection";

import { onlineConsultData } from '../../../public/onlineConsultData'

export default function OnlineConsult() {
  return (
    <ConsultationSection {...onlineConsultData}/>
  );
}

import ConsultationSection from "../../components/consultationSection/ConsultationSection";
import { offlineConsultData } from '../../../public/offlineConsultData'

export default function OfflineConsultation() {
  return (
    <ConsultationSection {...offlineConsultData}/>
  );
}

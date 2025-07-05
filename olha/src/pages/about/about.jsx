import BioBlock from "../../components/bioBlock/bioBlock";
import RazomRehabBlock from "../../components/razomRehabBlock/razomRehabBlock";
import WorkScope from "../../components/workScope/workScope";
import CertificatesCarousel from "../../components/сertificatesCarousel/certificatesCarousel";
import Feedbacks from "../../components/сertificatesCarousel/certificatesCarousel";
import "./about.scss";

export default function AboutMe() {
  return (
    <section className="about-me">
      <BioBlock/>
      <RazomRehabBlock/>
      <WorkScope/>
      <CertificatesCarousel/>
    </section>
  );
}

import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const KutaCentralArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.kutaCentral} />;
};

export default KutaCentralArea;

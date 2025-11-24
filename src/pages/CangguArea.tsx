import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const CangguArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.canggu} />;
};

export default CangguArea;

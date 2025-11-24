import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const SeminyakArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.seminyak} />;
};

export default SeminyakArea;

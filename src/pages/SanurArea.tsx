import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const SanurArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.sanur} />;
};

export default SanurArea;

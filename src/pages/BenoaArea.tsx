import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const BenoaArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.benoa} />;
};

export default BenoaArea;

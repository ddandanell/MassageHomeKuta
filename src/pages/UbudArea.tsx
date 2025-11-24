import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const UbudArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.ubud} />;
};

export default UbudArea;

import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const DreamlandArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.dreamland} />;
};

export default DreamlandArea;

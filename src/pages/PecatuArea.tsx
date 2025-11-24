import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const PecatuArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.pecatu} />;
};

export default PecatuArea;

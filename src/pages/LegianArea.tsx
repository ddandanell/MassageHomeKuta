import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const LegianArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.legian} />;
};

export default LegianArea;

import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const TubanArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.tuban} />;
};

export default TubanArea;

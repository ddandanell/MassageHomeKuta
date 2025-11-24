import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const BerawaArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.berawa} />;
};

export default BerawaArea;

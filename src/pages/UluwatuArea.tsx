import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const UluwatuArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.uluwatu} />;
};

export default UluwatuArea;

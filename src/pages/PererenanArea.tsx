import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const PererenanArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.pererenan} />;
};

export default PererenanArea;

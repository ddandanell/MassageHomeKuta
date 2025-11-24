import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const JimbaranArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.jimbaran} />;
};

export default JimbaranArea;

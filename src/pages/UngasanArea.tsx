import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const UngasanArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.ungasan} />;
};

export default UngasanArea;

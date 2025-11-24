import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const TanjungBenoaArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.tanjungBenoa} />;
};

export default TanjungBenoaArea;

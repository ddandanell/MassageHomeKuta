import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const BukitPeninsulaArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.bukit} />;
};

export default BukitPeninsulaArea;

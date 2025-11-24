import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const KerobokanArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.kerobokan} />;
};

export default KerobokanArea;

import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const DenpasarArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.denpasar} />;
};

export default DenpasarArea;

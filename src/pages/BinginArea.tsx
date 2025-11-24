import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const BinginArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.bingin} />;
};

export default BinginArea;

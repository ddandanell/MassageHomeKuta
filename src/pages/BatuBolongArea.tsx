import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const BatuBolongArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.batuBolong} />;
};

export default BatuBolongArea;

import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const NusaDuaArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.nusaDua} />;
};

export default NusaDuaArea;

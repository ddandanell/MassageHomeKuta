import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const PadangPadangArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.padangPadang} />;
};

export default PadangPadangArea;

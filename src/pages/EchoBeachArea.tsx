import ServiceAreaLandingPage from "@/templates/ServiceAreaLandingPage";
import { serviceAreas } from "@/data/serviceAreas";

const EchoBeachArea = () => {
  return <ServiceAreaLandingPage data={serviceAreas.echoBeach} />;
};

export default EchoBeachArea;

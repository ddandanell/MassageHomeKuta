import MassageTypeLandingPage from "@/templates/MassageTypeLandingPage";
import { massageTypes } from "@/data/massageTypes";

const ThaiMassage = () => {
  return <MassageTypeLandingPage data={massageTypes.thai} />;
};

export default ThaiMassage;

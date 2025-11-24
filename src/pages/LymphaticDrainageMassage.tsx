import MassageTypeLandingPage from "@/templates/MassageTypeLandingPage";
import { massageTypes } from "@/data/massageTypes";

const LymphaticDrainageMassage = () => {
  return <MassageTypeLandingPage data={massageTypes.lymphatic} />;
};

export default LymphaticDrainageMassage;

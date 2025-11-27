import MassageTypeLandingPage from "@/templates/MassageTypeLandingPage";
import { healingMassageData } from "@/data/specialtyMassageTypes";

const HealingMassage = () => {
  return <MassageTypeLandingPage data={healingMassageData} />;
};

export default HealingMassage;

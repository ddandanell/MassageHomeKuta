import MassageTypeLandingPage from "@/templates/MassageTypeLandingPage";
import { massageTypes } from "@/data/massageTypes";

const PregnancyMassage = () => {
  return <MassageTypeLandingPage data={massageTypes.pregnancy} />;
};

export default PregnancyMassage;

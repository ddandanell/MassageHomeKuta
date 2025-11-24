import MassageTypeLandingPage from "@/templates/MassageTypeLandingPage";
import { massageTypes } from "@/data/massageTypes";

const FourHandsMassage = () => {
  return <MassageTypeLandingPage data={massageTypes.fourHands} />;
};

export default FourHandsMassage;

import { FormLayout } from "../components/common/FormLayout";
import { CountrySelector } from "../components/signup/CountrySelector";
import { StepIndicator } from "../components/signup/StepIndicator";
import { useSignupFormStore } from "../store/signupFormStore";

export default function App() {
  const { step } = useSignupFormStore();

  console.log(step);
  const getStepComponent = () => {
    switch (step) {
      case 1:
        return <CountrySelector />;
      default:
        return null;
    }
  };
  return (
    <FormLayout title="Sign Up">
      <StepIndicator />
      {getStepComponent()}
    </FormLayout>
  );
}

import { FormLayout } from "../components/common/FormLayout";
import { CountrySelector } from "../components/signup/CountrySelector";
import { DynamicFormStep } from "../components/signup/DynamicFormStep";
import { ReviewSubmit } from "../components/signup/ReviewSubmit";
import { StepIndicator } from "../components/signup/StepIndicator";
import { UploadImage } from "../components/signup/UploadImage";
import { useSignupFormStore } from "../store/signupFormStore";

export default function App() {
  const { step } = useSignupFormStore();

  const getStepComponent = () => {
    switch (step) {
      case 1:
        return <CountrySelector />;
      case 2:
      case 3:
      case 4:
        return <DynamicFormStep />;
      case 5:
        return <UploadImage />;
      case 6:
        return <ReviewSubmit />;
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

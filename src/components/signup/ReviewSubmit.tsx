import { useSignupFormStore } from "../../store/signupFormStore";
import { ArrowButton } from "../common/ArrowButton";

const formatFieldName = (field: string): string =>
  field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

export const ReviewSubmit = () => {
  const { data, prevStep, reset } = useSignupFormStore();

  const handleSubmit = () => {
    alert("Form Submitted!");
    reset();
    localStorage.removeItem("multi-step-form");
  };

  const stored = localStorage.getItem("multi-step-form");

  if (stored) {
    const parsed = JSON.parse(stored);
    console.log("Form data from localStorage:", parsed.state.data);
  }

  const renderField = (key: string, value: any) => {
    if (key === "profileImage") {
      return value ? (
        <img
          src={URL.createObjectURL(value)}
          alt="Profile"
          className="w-32 h-32 object-cover rounded"
        />
      ) : (
        <span className="text-gray-500">No image uploaded</span>
      );
    }
    return <span>{value}</span>;
  };

  const fields = Object.entries(data).filter(([key]) => key !== "country");

  return (
    <div className="mx-auto bg-white rounded space-y-4">
      <h2 className="text-2xl font-bold text-center">
        Review Your Information
      </h2>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-1 text-sm text-gray-600">
          Selected Country
        </h3>
        <p className="text-gray-800 font-medium">{data.country}</p>
      </div>

      {fields.map(([key, value]) => (
        <div key={key} className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-1 text-sm text-gray-600">
            {formatFieldName(key)}
          </h3>
          <div className="text-gray-800">{renderField(key, value)}</div>
        </div>
      ))}

      <div className="flex justify-between mt-6">
        <ArrowButton direction="left" onClick={prevStep}>
          Back
        </ArrowButton>
        <ArrowButton direction="right" type="submit" onClick={handleSubmit}>
          Submit
        </ArrowButton>
      </div>
    </div>
  );
};

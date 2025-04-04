import { useSignupFormStore } from "../../store/signupFormStore";
import { Check } from "lucide-react";

const steps = [1, 2, 3, 4, 5, 6];

export const StepIndicator = () => {
  const { step } = useSignupFormStore();

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <div className="flex items-center justify-between">
        {steps.map((_, index) => {
          const isCompleted = index + 1 < step;
          const isCurrent = index + 1 === step;

          return (
            <div
              key={index}
              className={`flex items-center ${
                index !== steps.length - 1 ? "w-full" : ""
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm 
                ${
                  isCompleted
                    ? "bg-green-600 text-white"
                    : isCurrent
                    ? "border-2 border-blue-600 text-blue-600 bg-white"
                    : "bg-gray-300 text-white"
                }`}
              >
                {isCompleted ? <Check size={16} /> : index + 1}
              </div>

              {index !== steps.length - 1 && (
                <div className="flex-1 h-1 relative">
                  <div className="w-full h-full bg-gray-300 rounded" />
                  {step > index + 1 && (
                    <div className="absolute top-0 left-0 h-full bg-blue-600 w-full rounded transition-all" />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

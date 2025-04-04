import { useState } from "react";
import { useSignupFormStore } from "../../store/signupFormStore";
import { ImageUploader } from "../common/ImageUploader";
import { ArrowButton } from "../common/ArrowButton";

export const UploadImage = () => {
  const { updateData, data, nextStep, prevStep } = useSignupFormStore();
  const [error, setError] = useState("");

  const handleNext = () => {
    if (data.profileImage) {
      nextStep();
    } else {
      setError("Please upload a profile image");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Upload Profile Image
      </h2>

      <ImageUploader
        value={data.profileImage}
        onFileChange={(file) => {
          updateData({ profileImage: file });
          setError("");
        }}
        error={error}
        setError={setError}
      />

      <div className="flex justify-between mt-6">
        <ArrowButton direction="left" onClick={prevStep}>
          Back
        </ArrowButton>
        <ArrowButton direction="right" onClick={handleNext}>
          Next
        </ArrowButton>
      </div>
    </div>
  );
};

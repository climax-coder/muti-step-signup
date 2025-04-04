import { useState } from "react";
import { useSignupFormStore } from "../../store/signupFormStore";
import { contryFormSchemas } from "../../config/countryFormConfig";
import { FormError } from "../common/FormError";
import { ArrowButton } from "../common/ArrowButton";

export const CountrySelector = () => {
  const { country, setCountry, nextStep } = useSignupFormStore();
  const countries = Object.keys(contryFormSchemas);
  const [selectedCountry, setSelectedCountry] = useState(country);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setError("");
  };

  const handleNext = () => {
    if (!selectedCountry) {
      setError("Please select a country to proceed.");
      return;
    }

    setCountry(selectedCountry);
    nextStep();
  };

  return (
    <div className="space-y-4">
      <select
        onChange={handleChange}
        value={selectedCountry}
        className="w-full border border-gray-300 rounded p-2"
      >
        <option value="" disabled>
          Select Country
        </option>
        {countries.map((countryOption) => (
          <option key={countryOption} value={countryOption}>
            {countryOption}
          </option>
        ))}
      </select>

      <FormError message={error} />

      <div className="flex justify-end">
        <ArrowButton direction="right" type="submit" onClick={handleNext}>
          Next
        </ArrowButton>
      </div>
    </div>
  );
};

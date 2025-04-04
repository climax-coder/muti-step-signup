import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignupFormStore } from "../../store/signupFormStore";
import { contryFormSchemas } from "../../config/countryFormConfig";
import { getZodSchema } from "../../utils/getStepSchema";
import { ArrowButton } from "../common/ArrowButton";
import { FormField } from "../common/FormField";

export const DynamicFormStep = () => {
  const { country, step, updateData, nextStep, prevStep, data } =
    useSignupFormStore();

  const fieldDefs = contryFormSchemas[country]?.[step - 2];

  const schema = getZodSchema(fieldDefs);

  const defaultValues = useMemo(() => {
    return fieldDefs?.reduce((acc, field) => {
      acc[field.name] = data?.[field.name] ?? "";
      return acc;
    }, {} as Record<string, any>);
  }, [fieldDefs, data]);

  const {
    register,
    formState: { errors, isValid },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues, step, country]);

  const handleSubmit = () => {
    if (isValid) {
      const values = getValues();
      updateData(values);
      nextStep();
    }
    return;
  };

  const handleBack = () => {
    const values = getValues();
    const updatedValues: Record<string, any> = {};

    for (const key in values) {
      const value = values[key];
      const hasError = !!errors[key];

      if (value === "" || !hasError) {
        updatedValues[key] = value;
      } else {
        updatedValues[key] = "";
      }
    }

    updateData(updatedValues);
    prevStep();
  };

  if (!fieldDefs) return null;

  return (
    <div>
      {fieldDefs.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          placeholder={field.placeholder}
          register={register(field.name)}
          error={errors[field.name]}
        />
      ))}

      <div className="flex justify-between mt-6">
        <ArrowButton direction="left" onClick={handleBack}>
          Back
        </ArrowButton>
        <ArrowButton direction="right" type="submit" onClick={handleSubmit}>
          Next
        </ArrowButton>
      </div>
    </div>
  );
};

import { z } from "zod";
import { CountryFieldStep } from "../config/countryFormConfig";

export const getZodSchema = (fields: CountryFieldStep[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};
  fields.forEach((field) => (shape[field.name] = field.schema));
  return z.object(shape);
};

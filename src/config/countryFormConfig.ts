import * as z from "zod";

export type CountryFieldStep = {
  label: string;
  name: string;
  schema: z.ZodTypeAny;
  placeholder?: string;
};

export const contryFormSchemas: Record<string, CountryFieldStep[][]> = {
  USA: [
    [
      {
        name: "ssn",
        label: "Social Security Number",
        placeholder: "123-45-6789",
        schema: z.string().regex(/\d{3}-\d{2}-\d{4}/, "Invalid SSN"),
      },
    ],
    [{ name: "state", label: "State", schema: z.string().min(2) }],
    [
      {
        name: "zip",
        label: "Zip Code",
        schema: z.string().regex(/\d{5}/, "Invalid Zip Code"),
      },
    ],
  ],
  UAE: [
    [{ name: "emiratesId", label: "Emirates ID", schema: z.string().min(15) }],
    [{ name: "visaType", label: "Visa Type", schema: z.string().min(1) }],
    [{ name: "city", label: "City", schema: z.string().min(2) }],
  ],
  India: [
    [
      {
        name: "aadhaar",
        label: "Aadhaar Number",
        schema: z.string().regex(/^\d{12}$/, "Invalid Aadhaar"),
      },
    ],
    [{ name: "state", label: "State", schema: z.string().min(2) }],
    [
      {
        name: "pin",
        label: "PIN Code",
        schema: z.string().regex(/^\d{6}$/, "Invalid PIN"),
      },
    ],
  ],
  Germany: [
    [
      {
        name: "taxId",
        label: "Tax ID",
        schema: z.string().regex(/^\d{11}$/, "Invalid Tax ID"),
      },
    ],
    [{ name: "bundesland", label: "Bundesland", schema: z.string().min(2) }],
    [
      {
        name: "postalCode",
        label: "Postal Code",
        schema: z.string().regex(/^\d{5}$/, "Invalid Postal Code"),
      },
    ],
  ],
  Canada: [
    [
      {
        name: "sin",
        label: "SIN",
        schema: z.string().regex(/^\d{3}-\d{3}-\d{3}$/, "Invalid SIN"),
      },
    ],
    [{ name: "province", label: "Province", schema: z.string().min(2) }],
    [
      {
        name: "postalCode",
        label: "Postal Code",
        schema: z
          .string()
          .regex(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/, "Invalid Postal Code"),
      },
    ],
  ],
};

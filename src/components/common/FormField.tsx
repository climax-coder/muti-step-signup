import { UseFormRegisterReturn } from "react-hook-form";
import { FormError } from "./FormError";

interface FormFieldProps {
  label: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  error?: { message?: string };
}

export const FormField = ({
  label,
  register,
  placeholder,
  error,
}: FormFieldProps) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      {...register}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <FormError message={error?.message as string} />
  </div>
);

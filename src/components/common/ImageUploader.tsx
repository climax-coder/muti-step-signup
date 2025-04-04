import React, { useRef, useState, useEffect } from "react";
import { FormError } from "./FormError";

interface ImageUploaderProps {
  onFileChange: (file: File) => void;
  value?: File;
  maxSizeMB?: number;
  maxDimensions?: number;
  error?: string;
  setError?: (msg: string) => void;
}

export const ImageUploader = ({
  onFileChange,
  value,
  maxSizeMB = 1,
  maxDimensions = 600,
  error,
  setError,
}: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [value]);

  const validateImage = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(img.src);
        resolve(img.width <= maxDimensions && img.height <= maxDimensions);
      };
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file || !setError) return;

    setError("");

    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`Image size should be less than ${maxSizeMB}MB`);
      return;
    }

    const valid = await validateImage(file);
    if (!valid) {
      setError(
        `Image dimensions must be ${maxDimensions}x${maxDimensions}px or less`
      );
      return;
    }

    onFileChange(file);
  };

  return (
    <div>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500"
        onClick={() => fileInputRef.current?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="max-w-full max-h-[300px] mx-auto rounded"
          />
        ) : (
          <div className="text-gray-500">
            <p>Click to upload or drag and drop</p>
            <p className="text-sm">
              Max size: {maxSizeMB}MB, Max dimensions: {maxDimensions}px
            </p>
          </div>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      <FormError message={error} />
    </div>
  );
};

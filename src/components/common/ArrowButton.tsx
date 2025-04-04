import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArrowButtonProps {
  direction: "left" | "right";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const ArrowButton = ({
  direction,
  children,
  onClick,
  type = "button",
  className = "",
}: ArrowButtonProps) => {
  const isLeft = direction === "left";

  const baseStyles = "flex items-center gap-2 px-4 py-2 rounded";
  const variantStyles = isLeft
    ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
    : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {isLeft && <ArrowLeft size={16} />}
      {children}
      {!isLeft && <ArrowRight size={16} />}
    </button>
  );
};

import { type ButtonProps } from "@/interfaces";

const Button = ({ size, shape, children }: ButtonProps) => {
  // Size styles
  const sizeClasses =
    size === "small"
      ? "px-3 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-base"
      : "px-5 py-3 text-lg"; // large

  // Shape styles
  const shapeClasses =
    shape === "rounded-sm"
      ? "rounded-sm"
      : shape === "rounded-md"
      ? "rounded-md"
      : "rounded-full";

  return (
    <button
      className={`bg-blue-600 text-white ${sizeClasses} ${shapeClasses} hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  );
};

export default Button;

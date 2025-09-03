import React from "react";
import classNames from "classnames";

export type ButtonVariant =
  | "outline"
  | "primary"
  | "secondary"
  | "outline-secondary";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  containerClassName?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  squaered?: boolean;
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  className = "",
  containerClassName = "",
  type = "button",
  variant = "outline",
  squaered = false,
  disabled = false,
}: ButtonProps) => {
  const baseClass =
    "px-6 py-2 transition text-lg sm:text-xl w-full sm:min-w-[220px] sm:w-auto ";

  const variantClasses = {
    outline:
      "border border-white text-white hover:bg-white hover:text-secondary",
    primary:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    secondary:
      "bg-secondary border border-secondary text-white hover:bg-white hover:text-secondary",
    "outline-secondary":
      "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white",
  };

  return (
    <div className={classNames("", containerClassName)}>
      <button
        type={type}
        onClick={onClick}
        className={classNames(baseClass, variantClasses[variant], className, {
          "rounded-none": squaered,
          "rounded-full": !squaered,
        })}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

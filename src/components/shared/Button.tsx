import React from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  containerClassName?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "outline-secondary";
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
  const baseClass = "px-6 py-2 transition text-lg sm:text-xl w-full sm:w-auto ";

  const variantClasses = {
    outline:
      "border border-white text-white hover:bg-white hover:text-secondary",
    primary: "",
    secondary:
      "bg-secondary border border-secondary text-white hover:bg-white hover:text-secondary",
    "outline-secondary": "",
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

import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const baseStyle = `
      px-4 py-[7px] rounded-[10px] w-[100px] text-white font-semibold focus:outline-none
      transition duration-200 ease-in-out bg-primary 
  `;

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", className = "", disabled = false }) => {
  return (
    <button type={type} onClick={onClick} className={twMerge(baseStyle, className)} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

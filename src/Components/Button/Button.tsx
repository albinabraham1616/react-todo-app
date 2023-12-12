import { ButtonProps } from "../Modal/types";

export const Button = ({ children, onClick, className }: ButtonProps) => (
  <button
    className={`h-10 w-20 font-bold rounded-md transform hover:scale-110 hover:text-slate-100 hover:shadow-shadow${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

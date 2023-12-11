import { NavButtonProps } from "../types";
function NavButton({ value, isActive, onNavClick }: NavButtonProps) {
  const buttonClass = isActive ? "text-yellow-500" : "text-blue-700";

  return (
    <button
      className={` text-3xl font-bold font-serif ${buttonClass} pr-10 ml-10`}
      onClick={() => onNavClick(value)}
      data-testid={`${value}`}
    >
      {value}
    </button>
  );
}

export default NavButton;

import styles from "./Navbar.module.css";
interface NavButtonProps {
  value: string;
  isActive: boolean;
  onNavClick: (value: string) => void;
}
function NavButton({ value, isActive, onNavClick }: NavButtonProps) {
  const buttonClass = isActive ? styles.activeButton : styles.text;

  return (
    <button className={buttonClass} onClick={() => onNavClick(value)}>
      {value}
    </button>
  );
}

export default NavButton;

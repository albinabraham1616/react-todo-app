import styles from "./Navbar.module.css";
function NavButton({ value, isActive, onNavClick }) {
  const buttonClass = isActive ? styles.activeButton : styles.text;

  return (
    <button className={buttonClass} onClick={() => onNavClick(value)}>
      {value}
    </button>
  );
}

export default NavButton;

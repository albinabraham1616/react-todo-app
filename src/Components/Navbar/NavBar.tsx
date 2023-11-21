import { useState } from "react";
import styles from "./Navbar.module.css";
import { NavButton } from "..";
/**
 * Props for the NavBar component.
 * @interface
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setShowModal - Function to set the modal visibility state.
 */
interface NavBarProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
/**
 * Functional component representing a navigation bar.
 * @component
 * @param {NavBarProps} props - The props for the NavBar component.
 * if we click the add todo button createTodo ui will come,for that i set a state as true.
 */

function NavBar({ setShowModal }: NavBarProps) {
  const [activeItem, setActiveItem] = useState<string>("All");
  const handleItemClick = (value: string) => {
    if (value === "+") {
      setActiveItem("Add-Todo");
      setShowModal(true);
    } else {
      setActiveItem(value);
    }
  };
  return (
    <div>
      <nav className={styles.container}>
        <header className={styles.heading}>{activeItem}</header>
        <div className={styles.navbar_container}>
          <div className={styles.navbar}>
            <ul className={styles.textbutton}>
              <li>
                <NavButton
                  value="All"
                  isActive={activeItem === "All"}
                  onNavClick={handleItemClick}
                />
              </li>
              <li>
                <NavButton
                  value="In Progress"
                  isActive={activeItem === "In Progress"}
                  onNavClick={handleItemClick}
                />
              </li>
              <li>
                <NavButton
                  value="Completed"
                  isActive={activeItem === "Completed"}
                  onNavClick={handleItemClick}
                />
              </li>
              <li className={styles.button}>
                <NavButton
                  value="+"
                  isActive={activeItem === "Add-Todo"}
                  onNavClick={handleItemClick}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

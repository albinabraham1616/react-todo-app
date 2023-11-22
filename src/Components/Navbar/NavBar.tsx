import { useState } from "react";
import styles from "./Navbar.module.css";
import { NavButton } from "..";
import { IProps } from "../types";

function NavBar({ setShowModal }: IProps) {
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
    <main className={styles.container}>
      <header className={styles.heading}>{activeItem}</header>
      <nav className={styles.navbar_container}>
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
      </nav>
    </main>
  );
}

export default NavBar;

import { useState } from "react";
import styles from "./Navbar.module.css";
import { NavButton } from "..";

function NavBar() {
  const [activeItem, setActiveItem] = useState("All");
  const handleItemClick = (value) => {
    if (value === "+") {
      setActiveItem("Add-Todo");
    } else {
      setActiveItem(value);
    }
  };
  return (
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
  );
}

export default NavBar;

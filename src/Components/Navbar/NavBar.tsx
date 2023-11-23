import styles from "./Navbar.module.css";
import { NavButton } from "..";
import { INavProps } from "../types";

function NavBar({ handleClick, navType }: INavProps) {
  return (
    <main className={styles.container}>
      <header className={styles.heading}>{navType}</header>
      <nav className={styles.navbar_container}>
        <div className={styles.navbar}>
          <ul className={styles.textbutton}>
            <li>
              <NavButton
                value="All"
                isActive={navType === "All"}
                onNavClick={handleClick}
              />
            </li>
            <li>
              <NavButton
                value="In Progress"
                isActive={navType === "In Progress"}
                onNavClick={handleClick}
              />
            </li>
            <li>
              <NavButton
                value="Completed"
                isActive={navType === "Completed"}
                onNavClick={handleClick}
              />
            </li>
            <li className={styles.button}>
              <NavButton
                value="+"
                isActive={navType === "Add-Todo"}
                onNavClick={handleClick}
              />
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}

export default NavBar;

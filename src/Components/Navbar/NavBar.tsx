import styles from "./Navbar.module.css";
import { NavButton } from "..";
import { INavProps } from "../types";

function NavBar({ handleClick, activate }: INavProps) {
  return (
    <main className={styles.container}>
      <header className={styles.heading}>{activate}</header>
      <nav className={styles.navbar_container}>
        <div className={styles.navbar}>
          <ul className={styles.textbutton}>
            <li>
              <NavButton
                value="All"
                isActive={activate === "All"}
                onNavClick={handleClick}
              />
            </li>
            <li>
              <NavButton
                value="In Progress"
                isActive={activate === "In Progress"}
                onNavClick={handleClick}
              />
            </li>
            <li>
              <NavButton
                value="Completed"
                isActive={activate === "Completed"}
                onNavClick={handleClick}
              />
            </li>
            <li className={styles.button}>
              <NavButton
                value="+"
                isActive={activate === "Add-Todo"}
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

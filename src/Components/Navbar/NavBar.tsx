import styles from "./Navbar.module.css";
import { NavButton } from "..";
import { INavProps } from "../types";
import { Link } from "react-router-dom";

function NavBar({ handleClick, navType }: INavProps) {
  return (
    <main className={styles.container} data-testid="NavBar">
      <header className={styles.heading} data-testid="header">
        {navType}
      </header>
      <nav className={styles.navbar_container}>
        <div className={styles.navbar}>
          <ul className={styles.textbutton}>
            <li>
              <Link to="/">
                <NavButton
                  value="All"
                  isActive={navType === "All"}
                  onNavClick={handleClick}
                />
              </Link>
            </li>
            <li>
              <Link to="/pending">
                <NavButton
                  value="Pending"
                  isActive={navType === "Pending"}
                  onNavClick={handleClick}
                />
              </Link>
            </li>
            <li>
              <Link to="/completed">
                <NavButton
                  value="Completed"
                  isActive={navType === "Completed"}
                  onNavClick={handleClick}
                />
              </Link>
            </li>
            <li className={styles.button}>
              <Link to="/add-todo">
                <NavButton
                  value="+"
                  isActive={navType === "Add-Todo"}
                  onNavClick={handleClick}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}

export default NavBar;

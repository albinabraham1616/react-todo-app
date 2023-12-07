import styles from "./Navbar.module.css";
import { NavButton, CreateTodo } from "..";
import { INavProps } from "../types";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
function NavBar({ handleClick, navType, setShowModal }: INavProps) {
  const [modalOpen, setModalOpen] = useState(false);
  function isOpenCreateModal() {
    setModalOpen(true);
    setShowModal("create");
  }
  function onCloseModal() {
    setModalOpen(false);
    setShowModal("");
  }
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
              <NavButton
                value="+"
                isActive={navType === "Add-Todo"}
                onNavClick={isOpenCreateModal}
              />
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        isOpen={modalOpen}
        onRequestClose={onCloseModal}
        className={styles.addmodal}
      >
        <CreateTodo
          setShowModal={setShowModal}
          selectedTodo={undefined}
          isUpdate={false}
          handleCancel={onCloseModal}
          setModalOpen={setModalOpen}
        />
      </Modal>
    </main>
  );
}

export default NavBar;

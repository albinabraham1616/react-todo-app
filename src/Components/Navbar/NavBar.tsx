import { NavButton, CreateTodo } from "..";
import { INavProps } from "../types";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import AuthServices from "../../TodoService/auth.service";

/**
 * React component for the navigation bar.
 * Displays a header indicating the current navigation type.
 * Provides navigation buttons for "All," "Pending," and "Completed" todos.
 * Includes a button to open a modal for creating a new todo.
 * Allows the user to log out.
 * Uses a modal for creating new todos.
 * */

function NavBar({ handleClick, navType, setShowModal, setIsLogin }: INavProps) {
  const [modalOpen, setModalOpen] = useState(false);
  function isOpenCreateModal() {
    setModalOpen(true);
    setShowModal("create");
  }

  function onCloseModal() {
    setModalOpen(false);
    setShowModal("");
  }
  async function handleLogout() {
    try {
      await AuthServices.logout();
      setIsLogin(false);
    } catch (error) {
      throw new Error("Logout failed");
    }
  }
  return (
    <main className=" bg-black  rounded-md  mt-2" data-testid="NavBar">
      <header
        className="  text-5xl text-white text-center pt-3 font-bold font-mono "
        data-testid="header"
      >
        {navType}
      </header>

      <div className="flex justify-end mr-5">
        <button
          onClick={handleLogout}
          className=" text-slate-100 h-10 w-16 bg-gray-400 flex items-center justify-center rounded-md"
        >
          logout
        </button>
      </div>
      <nav className=" border-2 text-4xl mt-6">
        <div className=" h-20 pt-5">
          <ul className="flex items-center justify-evenly ">
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
            <li className="h-10 w-24 text-2.5xl bg-blue-300 rounded-md flex hover:bg-teal-400 transform  hover:scale-110 cursor-pointer ">
              <NavButton
                value="+"
                isActive={navType === "Add-Todo"}
                onNavClick={isOpenCreateModal}
              />
            </li>
          </ul>
        </div>
      </nav>
      <Modal isOpen={modalOpen} onRequestClose={onCloseModal} className="mt-40">
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

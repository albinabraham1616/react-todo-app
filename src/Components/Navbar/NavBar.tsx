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
    <main className=" bg-black  rounded-md  mt-2" data-testid="NavBar">
      <header
        className="  text-5xl text-white text-center pt-3 font-bold font-mono"
        data-testid="header"
      >
        {navType}
      </header>
      <nav className=" border-2 text-4xl mt-6">
        <div className=" h-20 pt-5">
          <ul className="flex items-center justify-evenly">
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

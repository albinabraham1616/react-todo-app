import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { TodoItems } from "../types";
import TodoCard from "./TodoCard";
import DeleteModal from "../Modal/DeleteModal";
import { CreateTodo } from "..";
import { useLocation } from "react-router";
Modal.setAppElement("#root");

function TodoList({
  todos,
  setShowModal,
  onDelete,
}: {
  todos: TodoItems[];
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  onDelete: (todoId: number) => void;
  showModal: string;
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<TodoItems | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<TodoItems | null>(null);
  const [search, setSearch] = useState("");
  const [filteredTodosDisplay, setFilteredTodosDisplay] =
    useState<TodoItems[]>(todos);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    setFilteredTodosDisplay(todos);
  }, [todos]);

  const filteredTodos =
    pathname === "/"
      ? filteredTodosDisplay
      : filteredTodosDisplay.filter(
          (todo) =>
            todo.status.toLowerCase() ===
            pathname.replace("/", "").toLowerCase(),
        );

  function handleSearch(userInput: string) {
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(userInput.toLowerCase()),
    );
    setFilteredTodosDisplay(filteredTodos);
  }

  function isOpenEditModal(todo: TodoItems) {
    setIsEditModalOpen(true);
    setTodoToEdit(todo);
    setShowModal("update");
  }

  function isCloseModal() {
    setIsEditModalOpen(false);
  }

  function openDeleteModal(todo: TodoItems) {
    setTodoToDelete(todo);
    setIsDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setTodoToDelete(null);
    setIsDeleteModalOpen(false);
  }

  function confirmDelete() {
    if (todoToDelete) {
      onDelete(todoToDelete.id);
      closeDeleteModal();
    }
  }

  return (
    <main data-testid="TodoItem">
      <div className="flex justify-end mr-6 mb-4">
        <input
          type="text"
          placeholder="Search here...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-4 mr-2"
        />
        <button
          onClick={() => handleSearch(search)}
          className="bg-blue-500 rounded-md h-9 px-4 text-white"
        >
          Search
        </button>
      </div>
      <div>
        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onDelete={openDeleteModal}
            onEdit={isOpenEditModal}
          />
        ))}
      </div>

      <Modal isOpen={isEditModalOpen} className="mt-32">
        <CreateTodo
          setShowModal={setShowModal}
          selectedTodo={todoToEdit}
          isUpdate={true}
          handleCancel={isCloseModal}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      </Modal>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        confirmDelete={confirmDelete}
      />
    </main>
  );
}

export default TodoList;

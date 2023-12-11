import React, { useState } from "react";
import Modal from "react-modal";
import { TodoItems } from "../types";
import styles from "./TodoItem.module.css";
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
  const location = useLocation();
  const pathname = location.pathname;
  const filteredTodos =
    pathname === "/"
      ? todos
      : todos.filter(
          (todo) =>
            todo.status.toLowerCase() ===
            pathname.replace("/", "").toLowerCase(),
        );

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
    <main className={styles.container} data-testid="TodoItem">
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

      <Modal isOpen={isEditModalOpen} className={styles.updatemodal}>
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

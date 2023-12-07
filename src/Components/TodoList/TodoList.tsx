import React, { useState } from "react";
import Modal from "react-modal";
import { TodoItems } from "../types";
import styles from "./TodoItem.module.css";
import TodoCard from "./TodoCard";
import DeleteModal from "../Modal/DeleteModal";
import { CreateTodo } from "..";

Modal.setAppElement("#root");

function TodoList({
  todos,
  setShowModal,
  onDelete,
}: {
  todos: TodoItems[];
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  onDelete: (todoId: number) => void;
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<TodoItems | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<TodoItems | null>(null);

  function isOpenEditModal(todo: TodoItems) {
    setIsEditModalOpen(true);
    setTodoToEdit(todo);
    setShowModal("update");
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
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onDelete={openDeleteModal}
            onEdit={isOpenEditModal}
          />
        ))}
      </div>

      <Modal isOpen={isEditModalOpen} className={styles.updatemodal}>
        {
          (setShowModal = "update" && (
            <CreateTodo selectedTodo={todoToEdit} isUpdate={true} />
          ))
        }
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

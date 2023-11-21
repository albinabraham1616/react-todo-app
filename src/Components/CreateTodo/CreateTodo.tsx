import styles from "./CreateTodo.module.css";
import React, { useState } from "react";

/**
 * Represents the data structure for creating a new Todo.
 * @interface
 * @property {string} title - The title of the Todo.
 * @property {string} description - The description of the Todo.
 * @property {string} dueDate - The due date of the Todo.
 */
interface CreateTodoData {
  title: string;
  description: string;
  dueDate: string;
}
/**
 * Props for the CreateTodo component.
 * @interface
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setShowModal - Function to set the modal visibility state.
 */

interface CreateTodoProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateTodo({ setShowModal }: CreateTodoProps) {
  const [formData, setFormData] = useState<CreateTodoData>({
    title: "",
    description: "",
    dueDate: "",
  });

  /**
   * Handles input changes in the form fields.
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  /**
   * Handles the submission to create a new Todo.
   * for create button we set a state as false
   */
  const handleCreate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(false);
    console.log("Form Data:", formData);
  };
  /**
   * Handles the cancellation of Todo creation.
   * For cancel button we set a state as false
   */
  function handleCancel() {
    console.log("cancelled");
    setShowModal(false);
  }
  return (
    <div className={styles.todo_card_container}>
      <form className={styles.todo_card}>
        <label>
          Title:
          <br></br>
          <br></br>
          <input
            className={styles.title}
            type="text"
            name="title"
            placeholder="Todo title here"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br></br>

        <label>
          Description:
          <br></br>
          <br></br>
          <textarea
            className={styles.description}
            name="description"
            placeholder="Todo Details"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br></br>

        <label>
          Due Date:
          <br></br>
          <br></br>
          <input
            className={styles.dueDate}
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br></br>

        <button
          type="submit"
          onClick={handleCancel}
          className={styles.cancel_button}
        >
          CANCEL
        </button>
        <button
          type="submit"
          onClick={handleCreate}
          className={styles.create_button}
        >
          CREATE
        </button>
      </form>
    </div>
  );
}
export default CreateTodo;

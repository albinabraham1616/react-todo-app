import React, { useState } from "react";
import styles from "./CreateTodo.module.css";
import { CreateTodoData, IProps } from "../types";

function CreateTodo({ setShowModal }: IProps) {
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
   */
  const handleCreate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setShowModal(false);
  };
  /**
   * Handles the cancellation of Todo creation.
   */
  function handleCancel() {
    console.log("cancelled");
    setShowModal(false);
  }
  return (
    <div className={styles.todo_card_container} data-testid="createTodo">
      <form className={styles.todo_card}>
        <label>
          Title:
          <div className={styles.gap}></div>
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
          <div className={styles.gap}></div>
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
          <div className={styles.gap}></div>
          <input
            data-testid="dueDate"
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

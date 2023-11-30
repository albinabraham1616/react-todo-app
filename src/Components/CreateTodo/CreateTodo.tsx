import React, { useState } from "react";
import styles from "./CreateTodo.module.css";
import { CreateTodoData, CreateTodoProps } from "../types";
import TodoService from "../../TodoService/todo.service";

function CreateTodo({ setShowModal, selectedTodo, isUpdate }: CreateTodoProps) {
  const [formData, setFormData] = useState<CreateTodoData>({
    title: isUpdate ? selectedTodo?.title : "",
    description: isUpdate ? selectedTodo?.description : "",
    dueDate: isUpdate ? selectedTodo?.dueDate : "",
  });
  const [completed, setCompleted] = useState<boolean>(
    isUpdate ? selectedTodo?.status === "Completed" : false,
  );

  /**
   * Handles input changes in the form fields.
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = () => {
    setCompleted((prevCompleted) => !prevCompleted);
  };
  /**
   * Handles the submission to create a new Todo.
   */
  const handleCreate = () => {
    // e.preventDefault();
    console.log(formData);

    if (isUpdate) {
      const reqBody = {
        status: completed ? "Completed" : "Pending",
        description:
          formData.description.length > 0
            ? formData.description
            : selectedTodo?.description,
        dueDate:
          formData.dueDate.length > 0
            ? formData.dueDate
            : selectedTodo?.dueDate,
        title: formData.title.length > 0 ? formData.title : selectedTodo?.title,
      };

      TodoService.updateTodo(selectedTodo?.id, reqBody)
        .then((res) => {
          if (res.status === 200) {
            setShowModal("");
          }
        })
        .catch((error) => {
          console.error("Error updating todo:", error);
        });
    } else {
      const reqBody = {
        status: "Pending",
        description: formData.description,
        dueDate: formData.dueDate,
        title: formData.title,
      };
      console.log("Update Mode:", reqBody);
      TodoService.createTodo(reqBody).then((res) => {
        if (res.status === 201) {
          setShowModal("");
        }
      });
    }
  };
  /**
   * Handles the cancellation of Todo creation.
   */
  function handleCancel() {
    setShowModal("");
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
            value={
              formData.title.length > 0 ? formData.title : selectedTodo?.title
            }
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
            value={
              formData.description.length > 0
                ? formData.description
                : selectedTodo?.description
            }
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
            value={
              formData.dueDate.length > 0
                ? formData.dueDate
                : selectedTodo?.dueDate
            }
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <div className={styles.checkbox}>
          {isUpdate && (
            <label>
              <div className={styles.gap}></div>
              Completed:
              <input
                className={styles.completedCheckbox}
                type="checkbox"
                name="completed"
                checked={completed}
                onChange={handleCheckboxChange}
              />
            </label>
          )}
        </div>
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
          {isUpdate ? "UPDATE" : "CREATE"}
        </button>
      </form>
    </div>
  );
}
export default CreateTodo;

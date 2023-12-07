import React, { useState } from "react";
import styles from "./CreateTodo.module.css";
import { CreateTodoData, CreateTodoProps } from "../types";
import TodoService from "../../TodoService/todo.service";
import { useNavigate } from "react-router";
import { validateFormData } from "../todoSchema";
function CreateTodo({
  setShowModal,
  selectedTodo,
  isUpdate,
  handleCancel,
  setIsEditModalOpen,
  setModalOpen,
}: CreateTodoProps) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CreateTodoData>({
    title: isUpdate ? selectedTodo?.title || "" : "",
    description: isUpdate ? selectedTodo?.description || "" : "",
    dueDate: isUpdate ? selectedTodo?.dueDate || "" : "",
  });

  const [completed, setCompleted] = useState<boolean>(
    isUpdate ? selectedTodo?.status === "Completed" : false,
  );
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
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
    if (isUpdate) {
      const reqBody = {
        id: selectedTodo?.id,
        title:
          formData.title.length > 0
            ? formData.title
            : selectedTodo?.title || "",
        status: completed ? "Completed" : "Pending",
        description:
          formData.description.length > 0
            ? formData.description
            : selectedTodo?.description || "",
        dueDate:
          formData.dueDate.length > 0
            ? formData.dueDate
            : selectedTodo?.dueDate || "",
      };

      TodoService.updateTodo(selectedTodo?.id, reqBody)
        .then((res) => {
          if (res.status === 200) {
            setShowModal("");
            setIsEditModalOpen(false);
          }
        })

        .catch((error) => {
          console.error("Error updating todo:", error);
        });
    } else {
      const reqBody = {
        id: selectedTodo?.id,
        status: "Pending",
        description: formData.description || "",
        dueDate: formData.dueDate || "",
        title: formData.title || "",
      };

      const validate = validateFormData(reqBody);

      if (validate.success) {
        console.log(validate.success);
        TodoService.createTodo(reqBody).then((res) => {
          if (res.status === 201) {
            setModalOpen(false);
            setShowModal("");
          }
        });
      } else {
        validate.error.errors.forEach((error) => {
          error.message.includes("Title") ? setTitleError(error.message) : "";
          error.message.includes("Description")
            ? setDescriptionError(error.message)
            : "";
        });
      }
    }
    navigate("/");
  };
  return (
    <div className={styles.todo_card_container} data-testid="createTodo">
      <div className={styles.todo_card}>
        <label>
          Title:
          <div className={styles.gap}></div>
          <input
            className={styles.title}
            type="text"
            name="title"
            placeholder="Todo title here"
            value={formData.title || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br></br>
        {titleError.length > 0 ? (
          <div style={{ color: "hsl(0, 100%, 50%)" }}>{titleError}</div>
        ) : (
          ""
        )}
        <label>
          Description:
          <div className={styles.gap}></div>
          <textarea
            className={styles.description}
            name="description"
            placeholder="Todo Details"
            value={formData.description || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br></br>
        {descriptionError.length > 0 ? (
          <div style={{ color: "hsl(0, 100%, 50%)" }}>{descriptionError}</div>
        ) : (
          ""
        )}
        <label>
          Due Date:
          <div className={styles.gap}></div>
          <input
            data-testid="dueDate"
            className={styles.dueDate}
            type="date"
            name="dueDate"
            value={formData.dueDate || ""}
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
          type="button"
          onClick={handleCancel}
          className={styles.cancel_button}
        >
          CANCEL
        </button>
        <button className={styles.create_button} onClick={handleCreate}>
          {isUpdate ? "UPDATE" : "CREATE"}
        </button>
      </div>
    </div>
  );
}
export default CreateTodo;

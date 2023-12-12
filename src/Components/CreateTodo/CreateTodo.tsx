import React, { useState } from "react";
import { CreateTodoData, CreateTodoProps } from "../types";
import TodoService from "../../TodoService/todo.service";
import { useNavigate } from "react-router";
import { validateFormData } from "../todoSchema";
import { Button } from "../Button/Button";

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
      const validate = validateFormData(reqBody);
      if (validate.success) {
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
        validate.error.errors.forEach((error) => {
          error.message.includes("Title") ? setTitleError(error.message) : "";
          error.message.includes("Description")
            ? setDescriptionError(error.message)
            : "";
        });
      }
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
    <div
      className=" flex  justify-center bg-black  mb-24 h-3/4  w-2/5 rounded-md text-blue-700 mx-auto"
      data-testid="createTodo"
    >
      <div className=" text-2xl font-bold">
        <label>
          Title:
          <div className="p-2.5"></div>
          <input
            className=" h-12 w-full bottom-1 text-2xl text-black"
            type="text"
            name="title"
            placeholder="Todo title here"
            value={formData.title || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br />
        {titleError.length > 0 ? (
          <div style={{ color: "hsl(0, 100%, 50%)" }}>{titleError}</div>
        ) : (
          ""
        )}
        <label>
          Description:
          <div className="p-2.5"></div>
          <textarea
            className=" h-28 w-full text-2xl text-black"
            name="description"
            placeholder="Todo Details"
            value={formData.description || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br />
        {descriptionError.length > 0 ? (
          <div style={{ color: "hsl(0, 100%, 50%)" }}>{descriptionError}</div>
        ) : (
          ""
        )}
        <label>
          Due Date:
          <div className="p-2.5"></div>
          <input
            data-testid="dueDate"
            className=" h-12 w-full text-2xl text-black"
            type="date"
            name="dueDate"
            value={formData.dueDate || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br />
        <div className=" flex flex-row">
          {isUpdate && (
            <label>
              <div className="p-2.5"></div>
              Completed:
              <input
                type="checkbox"
                name="completed"
                checked={completed}
                onChange={handleCheckboxChange}
              />
            </label>
          )}
        </div>
        <Button
          onClick={handleCancel}
          className=" h-12 w-28  ml-40 hover:text-zinc-950 text-blue-500 bg-yellow-300 mb-4 "
        >
          CANCEL
        </Button>
        <Button
          className=" h-12 w-28  ml-20 hover:text-zinc-950 text-blue-500 mx-auto bg-yellow-300 mb-4  "
          onClick={handleCreate}
        >
          {isUpdate ? "UPDATE" : "CREATE"}
        </Button>
      </div>
    </div>
  );
}
export default CreateTodo;

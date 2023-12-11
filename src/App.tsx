import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, TodoList } from "./Components";
import { TodoItems } from "./Components/types";
import TodoService from "./TodoService/todo.service";
import "./reset.css";

function App() {
  const [activeItem, setActiveItem] = useState("All");
  const [todos, setTodos] = useState<TodoItems[]>([]);
  const [showModal, setShowModal] = useState("");

  useEffect(() => {
    TodoService.getAllTodos()
      .then((res) => {
        setTodos(res.data);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }, [showModal]);

  const handleItemClick = (value: string) => {
    if (value === "+") {
      setActiveItem("Add-Todo");
      setShowModal("create");
    } else {
      setActiveItem(value);
      setShowModal("");
    }
  };
  function handleDeleteClick(todoId: number) {
    TodoService.deleteTodo(todoId);
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  }
  return (
    <div>
      <NavBar
        handleClick={handleItemClick}
        navType={activeItem}
        setShowModal={setShowModal}
      />

      <Routes>
        <Route
          path="/"
          element={
            <TodoList
              todos={todos}
              setShowModal={setShowModal}
              showModal={showModal}
              onDelete={handleDeleteClick}
            />
          }
        />
        <Route
          path="/pending"
          element={
            <TodoList
              todos={todos}
              setShowModal={setShowModal}
              showModal={showModal}
              onDelete={handleDeleteClick}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <TodoList
              todos={todos}
              setShowModal={setShowModal}
              showModal={showModal}
              onDelete={handleDeleteClick}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;

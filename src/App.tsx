import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar, CreateTodo, TodoList } from "./Components";
import { TodoItems } from "./Components/types";
import TodoService from "./TodoService/todo.service";

function App() {
  const [activeItem, setActiveItem] = useState("All");
  const [todos, setTodos] = useState<TodoItems[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoItems | null>(null);
  const [showModal, setShowModal] = useState("");

  const filteredTodos =
    activeItem === "All"
      ? todos
      : todos.filter((todo) => todo.status === activeItem);

  useEffect(() => {
    TodoService.getAllTodos()
      .then((res) => {
        setTodos(res.data);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }, []);

  const handleItemClick = (value: string) => {
    if (value === "+") {
      setActiveItem("Add-Todo");
      setShowModal("create");
      setSelectedTodo(null);
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
    <BrowserRouter>
      <div>
        <NavBar handleClick={handleItemClick} navType={activeItem} />

        <Routes>
          <Route
            path="/"
            element={
              <TodoList
                todos={filteredTodos}
                setShowModal={setShowModal}
                onDelete={handleDeleteClick}
              />
            }
          />
          <Route
            path="/pending"
            element={
              <TodoList
                todos={filteredTodos}
                setShowModal={setShowModal}
                onDelete={handleDeleteClick}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <TodoList
                todos={filteredTodos}
                setShowModal={setShowModal}
                onDelete={handleDeleteClick}
              />
            }
          />

          <Route
            path="/add-todo"
            element={
              <TodoList
                todos={filteredTodos}
                setShowModal={setShowModal}
                onDelete={handleDeleteClick}
              />
            }
          />
        </Routes>

        {showModal === "create" && (
          <CreateTodo
            setShowModal={setShowModal}
            selectedTodo={null}
            isUpdate={false}
          />
        )}
        {showModal === "update" && (
          <CreateTodo
            setShowModal={setShowModal}
            selectedTodo={selectedTodo}
            isUpdate={true}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
export default App;

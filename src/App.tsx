import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar, TodoList, RegisterForm, LoginForm } from "./Components";
import { TodoItems } from "./Components/types";
import TodoService from "./TodoService/todo.service";
import { useErrorBoundary } from "react-error-boundary";

function App() {
  const [activeItem, setActiveItem] = useState("All");
  const [todos, setTodos] = useState<TodoItems[]>([]);
  const [showModal, setShowModal] = useState("");
  const { showBoundary } = useErrorBoundary();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (isLogin) {
      const getTodos = async () => {
        try {
          await TodoService.getAllTodos().then((res) => {
            setTodos(res.data);
          });
        } catch (error) {
          showBoundary(error);
        }
      };
      getTodos();
    }
  }, [isLogin, showBoundary, showModal]);

  const handleItemClick = (value: string) => {
    if (value === "+") {
      setActiveItem("Add-Todo");
      setShowModal("create");
    } else {
      setActiveItem(value);
      setShowModal("");
    }
  };

  async function handleDeleteClick(todoId: number) {
    try {
      await TodoService.deleteTodo(todoId);
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    } catch (error) {
      showBoundary(error);
    }
  }

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <NavBar
            setIsLogin={setIsLogin}
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
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={<LoginForm setIsLogin={handleLogin} />}
          />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

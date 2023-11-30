import { useState, useEffect } from "react";
import { NavBar, CreateTodo, TodoItem } from "./Components";
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
  function handleEditClick(todo: TodoItems | null) {
    setSelectedTodo(todo);
    setShowModal("update");
  }
  function handleDeleteClick(todoId: number) {
    TodoService.deleteTodo(todoId);

    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  }
  return (
    <div style={{ position: "relative" }}>
      <NavBar handleClick={handleItemClick} navType={activeItem} />
      {showModal === "create" && <CreateTodo setShowModal={setShowModal} />}
      {showModal === "update" && (
        <CreateTodo
          setShowModal={setShowModal}
          selectedTodo={selectedTodo}
          isUpdate={true}
        />
      )}

      {!showModal && (
        <>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onEdit={() => handleEditClick(todo)}
              onDelete={handleDeleteClick}
            />
          ))}
        </>
      )}
    </div>
  );
}
export default App;

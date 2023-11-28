import { useState } from "react";
import { NavBar, CreateTodo, DisplayTodo } from "./Components";
import { todos } from "./Components/todosData";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState("All");
  const filteredTodos =
    activeItem === "All"
      ? todos
      : todos.filter((todo) => todo.status === activeItem);

  const handleItemClick = (value: string) => {
    if (value === "+") {
      setActiveItem("Add-Todo");
      setShowModal(true);
    } else {
      setActiveItem(value);
      setShowModal(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <NavBar handleClick={handleItemClick} navType={activeItem} />
      {showModal && <CreateTodo setShowModal={setShowModal} />}
      {filteredTodos.map((todo, index) => (
        <DisplayTodo key={index} todo={todo} />
      ))}
    </div>
  );
}
export default App;

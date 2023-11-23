import { useState } from "react";
import { NavBar, CreateTodo, DispalyTodo } from "./Components";
function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("All");

  const todos = [
    {
      title: "Complete React Tutorial",
      description: "Learn React and build cool projects.",
      dueDate: "2023-12-31",
      status: "In Progress",
    },
    {
      title: "Create Todo App",
      description: "Build a Todo application using React.",
      dueDate: "2023-11-30",
      status: "Completed",
    },
    {
      title: "Master CSS Flexbox",
      description: "Improve skills in CSS Flexbox layout.",
      dueDate: "2024-01-15",
      status: "Completed",
    },
    {
      title: "Build Portfolio Website",
      description: "Create a personal portfolio using React.",
      dueDate: "2024-03-15",
      status: "In Progress",
    },
  ];
  const [todoList, setTodoList] = useState(todos);
  const handleItemClick = (value: string) => {
    if (value === "+") {
      setActiveItem("Add-Todo");
      setShowModal(true);
    } else {
      setActiveItem(value);
      setShowModal(false);
      if (value === "All") {
        setTodoList(todos);
      } else {
        const newTodoList = todos.filter((todo) => todo.status === value);
        setTodoList(newTodoList);
      }
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <NavBar handleClick={handleItemClick} activate={activeItem} />
      {showModal && <CreateTodo setShowModal={setShowModal} />}
      {todoList.map((todo, index) => (
        <DispalyTodo key={index} {...todo} />
      ))}
    </div>
  );
}
export default App;

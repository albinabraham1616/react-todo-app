import { useState } from "react";
import { NavBar, CreateTodo } from "./Components";
import "./App.css";
function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div style={{ position: "relative" }}>
      <NavBar setShowModal={setShowModal} />
      {showModal && <CreateTodo setShowModal={setShowModal} />}
    </div>
  );
}
export default App;

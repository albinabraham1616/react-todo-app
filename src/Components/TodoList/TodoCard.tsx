import { TodoCardProps } from "../types";
import { Button } from "../Button/Button";

function TodoCard({ todo, onDelete, onEdit }: TodoCardProps) {
  return (
    <div
      key={todo.id}
      className=" min-h-screen-40 w-96 text-xl font-courier py-2.5 px-8 border-2 border-red-700  mx-auto mt-2.5 rounded-md bg-gray-300 leading-10 transform hover:scale-110 ease-out duration-500"
    >
      <h2 className="underline font-bold ">{todo.title}</h2>
      <h4 className=" w-full break-words font-normal leading-6">
        {todo.description}
      </h4>
      <h3 className="font-bold">Due Date: {todo.dueDate}</h3>
      <p className=" font-bold">Status: {todo.status}</p>
      <Button className=" ml-10 bg-red-600" onClick={() => onDelete(todo)}>
        Delete
      </Button>
      <Button className=" ml-16  bg-green-600" onClick={() => onEdit(todo)}>
        Edit
      </Button>
    </div>
  );
}

export default TodoCard;

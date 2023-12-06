import { TodoCardProps } from "../types";
import styles from "./TodoItem.module.css";

function TodoCard({ todo, onDelete, onEdit }: TodoCardProps) {
  return (
    <div key={todo.id} className={styles.display}>
      <h2 className={styles.title}>{todo.title}</h2>
      <h4 className={styles.h4}>{todo.description}</h4>
      <h3 className={styles.dueDate_button}>Due Date: {todo.dueDate}</h3>
      <p>Status: {todo.status}</p>
      <button className={styles.delete_button} onClick={() => onDelete(todo)}>
        Delete
      </button>
      <button className={styles.edit_button} onClick={() => onEdit(todo)}>
        Edit
      </button>
    </div>
  );
}

export default TodoCard;

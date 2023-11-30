import { TodoItems } from "../types";
import styles from "./TodoItem.module.css";
/**
 * This is for display component to show information about a todo item.
 * In that we are pasing title,description,dueDate and status.
 */
function TodoItem({
  todo,
  onEdit,
  onDelete,
}: {
  todo: TodoItems;
  onEdit: (todo) => void;
  onDelete: (todoId: number) => void;
}) {
  return (
    <main className={styles.container} data-testid="TodoItem">
      <div className={styles.display}>
        <h2 className={styles.title}>{todo.title}</h2>
        <h4>{todo.description}</h4>
        <h3 className={styles.dueDate_button}>Due Date: {todo.dueDate}</h3>
        <p>Status: {todo.status}</p>
        <button
          className={styles.delete_button}
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
        <button className={styles.edit_button} onClick={onEdit}>
          Edit
        </button>
      </div>
    </main>
  );
}
export default TodoItem;

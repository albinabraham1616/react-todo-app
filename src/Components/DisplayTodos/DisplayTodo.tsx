import { DisplayProps } from "../types";
import styles from "./Display.module.css";
/**
 * This is for display component to show information about a todo item.
 * In that we are pasing title,description,dueDate and status.
 */
function DisplayTodo({ todo }: { todo: DisplayProps }) {
  return (
    <main className={styles.container} data-testid="DisplayTodo">
      <div className={styles.display}>
        <h2 className={styles.title}>{todo.title}</h2>
        <h4>{todo.description}</h4>
        <h3 className={styles.dueDate_button}>Due Date: {todo.dueDate}</h3>
        <p>Status: {todo.status}</p>
        <button className={styles.delete_button}>Delete</button>
        <button className={styles.edit_button}>Edit</button>
      </div>
    </main>
  );
}
export default DisplayTodo;

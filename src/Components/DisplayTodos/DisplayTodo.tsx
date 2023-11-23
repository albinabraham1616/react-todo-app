import { DisplayProps } from "../types";
import styles from "./Display.module.css";
/**
 * Display component to show information about a todo item.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the todo item.
 * @param {string} props.description - The description of the todo item.
 * @param {string} props.dueDate - The due date of the todo item.
 * @param {string} props.status - The status of the todo item.
 */
function Display({ title, description, dueDate, status }: DisplayProps) {
  return (
    <main className={styles.container}>
      <div className={styles.display}>
        <h2 className={styles.title}>{title}</h2>
        <h4>{description}</h4>
        <h3 className={styles.dueDate_button}>Due Date: {dueDate}</h3>
        <p>Status: {status}</p>
        <button className={styles.delete_button}>Delete</button>
        <button className={styles.edit_button}>Edit</button>
      </div>
    </main>
  );
}
export default Display;

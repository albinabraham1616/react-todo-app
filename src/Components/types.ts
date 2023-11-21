/**
 * Props for the NavButton component.
 * @interface
 * @property {string} value - The value of the button.
 * @property {boolean} isActive - Indicates whether the button is active.
 * @property {(value: string) => void} onNavClick - Callback function for button click event.
 */
export interface NavButtonProps {
  value: string;
  isActive: boolean;
  onNavClick: (value: string) => void;
}

/**
 * Represents the data structure for creating a new Todo.
 * @interface
 * @property {string} title - The title of the Todo.
 * @property {string} description - The description of the Todo.
 * @property {string} dueDate - The due date of the Todo.
 */
export interface CreateTodoData {
  title: string;
  description: string;
  dueDate: string;
}

/**
 * Props for the NavBar component.
 * @interface
 *  setShowModal - Function to set the visibility state of the "Add Todo" modal.
 */
export interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

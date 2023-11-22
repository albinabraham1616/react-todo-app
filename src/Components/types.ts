/**
 * This interface Props for the NavButton component.
 */
export interface NavButtonProps {
  /**
   * The value of the button.
   */
  value: string;

  /**
   * Indicates whether the button is active.
   */
  isActive: boolean;

  /**
   * Callback function for button click event.
   */
  onNavClick: (value: string) => void;
}

/**
 * This interface is represents the data structure for creating a new Todo.
 */
export interface CreateTodoData {
  /**
   * The title of the Todo.
   */
  title: string;

  /**
   * The description of the Todo.
   */
  description: string;

  /**
   * The due date of the Todo.
   */
  dueDate: string;
}

export interface IProps {
  /**
   * This is a function that you can use to control whether the "Add Todo" modal should be visible or hidden.
   * When we call this function and pass true as an argument,it shows the modal,
   * and when we pass false, it hides the modal
   */
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

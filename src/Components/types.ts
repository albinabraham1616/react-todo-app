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

/**
 * Represents the props for the display component.
 */
export interface TodoItems {
  id: number;
  /**
   * The title of the displayed item.
   */
  title: string;

  /**
   * The description of the displayed item.
   */
  description: string;

  /**
   * The due date of the displayed item.
   */
  dueDate: string;

  /**
   * The status of the displayed item.
   */
  status: string;
}

/**
 * Represents the props for the navigation component.
 */
export interface INavProps {
  /**
   * A function to handle click events on the navigation component
   */
  handleClick: (value: string) => void;
  /**
   * The currently activated item in the navigation component.if i click the value,the value will display in header.
   */
  navType: string;

  /**
   * Function to set the modal visibility state.
   */
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Props for the CreateTodo component.
 */
export interface CreateTodoProps {
  /**
   * Function to set the modal visibility state.
   */
  setShowModal: React.Dispatch<React.SetStateAction<string>>;

  /**
   * The selected todo item for updating, if in update mode.
   */
  selectedTodo: TodoItems;

  /**
   * A boolean flag indicating whether the component is in update mode.
   */
  isUpdate: boolean;

  /**
   * Callback function to handle the cancellation of Todo creation.
   */
  handleCancel: () => void;

  /**
   * Function to set the state controlling the visibility of the edit modal.
   */
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * Function to set the state controlling the visibility of a modal.
   */
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Interface representing props for the TodoCard component.
 */
export interface TodoCardProps {
  /**
   * The todo item to be displayed.
   */
  todo: TodoItems;

  /**
   * Callback function triggered when the delete button is clicked.
   */
  onDelete: (todo: TodoItems) => void;

  /**
   * Callback function triggered when the edit button is clicked.
   */
  onEdit: (todo: TodoItems) => void;
}

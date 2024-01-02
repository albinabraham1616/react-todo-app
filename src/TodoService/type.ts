/**
 * Represents the structure of a Todo item.
 */
export interface Todo {
  /**
   * The unique identifier for the Todo.
   */
  id: number;
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
  /**
   * The status of the Todo like"Pending" or "Completed".
   */
  status: string;
}

export interface ApiResponse {
  /**
   * The HTTP status code of the API response.
   */
  status: number;
  /**
   * An array of Todo items retrieved from the API.
   */
  data: Todo[];
}

/**
 * Represents the properties passed to the `Login` component.
 */
export interface LoginProps {
  /**
   * Callback function to update the login state.
   */
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Represents the data required for user login.
 */
export interface LoginData {
  /**
   * User's email for login.
   */
  userEmail: string;

  /**
   * User's password for login.
   */
  userPassword: string;
}

/**
 * Represents the data required for user registration.
 */
export interface RegisterData {
  /**
   * User's name for registration.
   */
  userName: string;
  /**
   * User's email for registration.
   */
  userEmail: string;

  /**
   * User's password for registration.
   */
  userPassword: string;
}

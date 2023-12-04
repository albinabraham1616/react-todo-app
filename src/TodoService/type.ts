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

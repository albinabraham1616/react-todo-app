import { Todo, ApiResponse } from "./type";

const BASE_URL = "http://localhost:3000";
const getAllTodos = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "GET",
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
      credentials: "include",
    });

    const data: Todo[] = await response.json();

    return {
      status: response.status,
      data,
    };
  } catch (error) {
    const apiError = `Error fetching todos: ${(error as Error).message}`;
    throw new Error(apiError);
  }
};

const createTodo = async (data: Todo): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    const apiError = `Error creating todo: ${(error as Error).message}`;
    throw new Error(apiError);
  }
};

const updateTodo = async (id: number, data: Todo): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    const apiError = `Error updating todo: ${(error as Error).message}`;
    throw new Error(apiError);
  }
};

const deleteTodo = async (id: number): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
      credentials: "include",
    });

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    const apiError = `Error deleting todo: ${(error as Error).message}`;
    throw new Error(apiError);
  }
};

const TodoService = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default TodoService;

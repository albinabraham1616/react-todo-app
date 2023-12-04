import { Todo, ApiResponse } from "./type";

const BASE_URL = "http://localhost:3000";
const getAllTodos = async (): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "GET",
    headers: {
      Authorization: import.meta.env.VITE_API_KEY,
    },
  });

  const data: Todo[] = await response.json();

  return {
    status: response.status,
    data,
  };
};

const createTodo = async (data: Todo): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      Authorization: import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return {
    status: response.status,
    data: await response.json(),
  };
};

const updateTodo = async (id: number, data: Todo): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      Authorization: import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return {
    status: response.status,
    data: await response.json(),
  };
};

const deleteTodo = async (id: number): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: import.meta.env.VITE_API_KEY,
    },
  });

  return {
    status: response.status,
    data: await response.json(),
  };
};

const TodoService = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default TodoService;

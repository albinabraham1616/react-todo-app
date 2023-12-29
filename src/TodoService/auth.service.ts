import { LoginData, RegisterData } from "./type";
import {
  ZodValidationError,
  UserConflictError,
} from "../error-handler/custom-error";

const BASE_URL = "http://localhost:3000/todos";
const login = async (loginData: LoginData) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    });

    if (response.status === 400) {
      const responseData = await response.json();
      throw new ZodValidationError(responseData.message);
    }
    if (response.status === 401) {
      const responseData = await response.json();
      throw new UserConflictError(responseData.message);
    }
  } catch (error) {
    if (
      error instanceof ZodValidationError ||
      error instanceof UserConflictError
    ) {
      throw error;
    }

    throw new Error("Registration failed");
  }
};
const register = async (registerData: RegisterData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
      credentials: "include",
    });

    if (response.status === 400) {
      const responseData = await response.json();
      throw new ZodValidationError(responseData.message);
    }
    if (response.status === 401) {
      const responseData = await response.json();
      throw new UserConflictError(responseData.message);
    }
  } catch (error) {
    if (
      error instanceof ZodValidationError ||
      error instanceof UserConflictError
    ) {
      throw error;
    }

    throw new Error("Registration failed");
  }
};

const logout = async () => {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  return await response.json();
};

const AuthServices = {
  login,
  register,
  logout,
};

export default AuthServices;

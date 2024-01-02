import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../TodoService/auth.service";
import { LoginProps } from "../../TodoService/type";
import { useErrorBoundary } from "react-error-boundary";
import {
  UserConflictError,
  ZodValidationError,
} from "../../error-handler/custom-error";

/**
 * React component for user login form.
 * Provides a login form with input fields for user email and password.
 * Handles form submission, sending login data to the server via AuthServices.
 * Updates the application state upon successful login and redirects to the home page.
 * Utilizes react-error-boundary for error handling and reporting.
 */
export default function LoginForm({ setIsLogin }: LoginProps) {
  const loginFormRef = useRef(null);
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  const [error, setError] = useState("");
  async function handleLoginFormSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loginCredentials = {
      userEmail: formData.get("userEmail") as string,
      userPassword: formData.get("userPassword") as string,
    };
    try {
      await AuthServices.login(loginCredentials);

      setIsLogin(true);
      navigate("/");
    } catch (error) {
      if (
        error instanceof ZodValidationError ||
        error instanceof UserConflictError
      ) {
        setError(error.message);
      } else {
        showBoundary(error);
      }
    }
  }
  return (
    <div className=" w-screen h-screen bg-register-background  bg-cover flex items-center  border-solid border-zinc-600  font-bold text-xl font-mono ">
      {error !== "" && <h3>{error}</h3>}
      <form
        ref={loginFormRef}
        className="max-w-md mx-auto mt-8 font-mono ml-40 mb-16 text-neutral-50 "
        onSubmit={handleLoginFormSubmit}
      >
        <div>
          <label>
            User Email:
            <input
              type="email"
              name="userEmail"
              placeholder="Enter your email"
              className=" px-3 py-2 rounded-md w-full mt-1 text-black"
            />
          </label>
          <br />
          <br />

          <label>
            Password:
            <input
              type="password"
              name="userPassword"
              placeholder="Enter your password"
              className=" px-3 py-2 rounded-md w-full mt-1 text-black"
            />
          </label>
          <br />
          <br />
        </div>
        <br />
        <div>
          <button
            type="submit"
            className=" h-10 w-40 bg-yellow-300 ml-28 font-bold rounded-md transform hover:scale-110 hover:text-orange-600 hover:shadow-shadow text-neutral-950 font-mono"
          >
            Login
          </button>
          <br />
          <br />
          <p className=" text-stone-50">New here?</p>

          <Link
            to="/register"
            className="text-stone-50 underline hover:text-red-500"
          >
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
}

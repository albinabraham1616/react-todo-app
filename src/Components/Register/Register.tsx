import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthServices from "../../TodoService/auth.service";
import { useErrorBoundary } from "react-error-boundary";
import {
  UserConflictError,
  ZodValidationError,
} from "../../error-handler/custom-error";

/**
 * React component for user registration form.
 * Provides a registration form with input fields for user name, email, and password.
 * Implements validation for name,email and password, displays error messages on validation failure.
 * Utilizes React Router for navigation between registration and login pages.
 * Handles form submission, sending registration data to the server via AuthServices.
 * Utilizes react-error-boundary for error handling and reporting.
 */
export default function RegisterForm() {
  const registerFormRef = useRef(null);
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  const [error, setError] = useState("");

  async function handleRegisterFormSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const registerCredentials = {
      userName: formData.get("userName") as string,
      userEmail: formData.get("userEmail") as string,
      userPassword: formData.get("userPassword") as string,
    };
    try {
      await AuthServices.register(registerCredentials);
      navigate("/login");
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
    <div className="  w-screen h-screen bg-register-background  bg-cover flex items-center  border-solid border-zinc-600  font-bold text-xl font-mono ">
      {error !== "" && <h3>{error}</h3>}
      <form
        ref={registerFormRef}
        className="max-w-md mx-auto mt-8 font-mono ml-40 mb-16 text-neutral-50 "
        onSubmit={handleRegisterFormSubmit}
      >
        <div className="">
          <label>
            User Name:
            <input
              type="text"
              name="userName"
              placeholder="Enter your name"
              className=" text-black px-3 py-2 rounded-md w-full mt-1"
            />
          </label>
          <br />
          <br />

          <label>
            User Email:
            <input
              type="email"
              name="userEmail"
              placeholder="Enter your email"
              className=" text-black px-3 py-2 rounded-md w-full mt-1"
            />
          </label>
          <br />
          <br />

          <label>
            Password:
            <input
              type="password"
              name="userPassword"
              placeholder="Enter you password"
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

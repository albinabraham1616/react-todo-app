import { render, screen } from "@testing-library/react";
import { DisplayTodo } from "..";

describe("DisplayTodo Component", () => {
  const todo = {
    title: "Test Title",
    description: "Test Description",
    dueDate: "2023-12-01",
    status: "Completed",
  };
  beforeEach(() => {
    render(<DisplayTodo todo={todo} />);
  });

  it("renders the CreateTodo component", () => {
    const displayTodoComponent = screen.getByTestId("DisplayTodo");
    expect(displayTodoComponent).toBeVisible();
  });

  it("renders the DisplayTodo component with the correct todo information", () => {
    const titleElement = screen.getByText(todo.title);
    const descriptionElement = screen.getByText(todo.description);
    const dueDateElement = screen.getByText(`Due Date: ${todo.dueDate}`);
    const statusElement = screen.getByText(`Status: ${todo.status}`);
    const deleteButton = screen.getByText("Delete");
    const editButton = screen.getByText("Edit");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(dueDateElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });
});

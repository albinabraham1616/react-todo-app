import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { NavBar } from "..";

describe("Testing NavBar Component ", () => {
  let allTodos: HTMLElement;
  let inProgressTodo: HTMLElement;
  let completedTodo: HTMLElement;
  let addTodo: HTMLElement;
  let header: HTMLElement;
  beforeEach(() => {
    const NavBarWrapper = () => {
      const [activeItem, setActiveItem] = useState("All");
      const handleItemClick = (value: string) => {
        if (value === "+") {
          setActiveItem("Add-Todo");
        } else {
          setActiveItem(value);
        }
      };
      return <NavBar handleClick={handleItemClick} navType={activeItem} />;
    };
    render(<NavBarWrapper />);
    allTodos = screen.getByTestId("All");
    inProgressTodo = screen.getByTestId("In Progress");
    completedTodo = screen.getByTestId("Completed");
    addTodo = screen.getByTestId("+");
    header = screen.getByTestId("header");
  });

  it("should render the NavBar component", () => {
    const navBarElement = screen.getByTestId("NavBar");
    expect(navBarElement).toBeInTheDocument();
  });

  it("should render all navigation buttons", () => {
    expect(allTodos).toBeInTheDocument();
    expect(inProgressTodo).toBeInTheDocument();
    expect(completedTodo).toBeInTheDocument();
  });

  it("should display All content when 'All' is clicked", async () => {
    await userEvent.click(allTodos);
    expect(header.textContent).toBe("All");
  });

  it("should display Completed content when 'Completed' is clicked", async () => {
    await userEvent.click(completedTodo);
    expect(header.textContent).toBe("Completed");
  });

  it("should display In Progress content when 'In Progress' is clicked", async () => {
    await userEvent.click(inProgressTodo);
    expect(header.textContent).toBe("In Progress");
  });

  it("should display Add-Todo content when '+' is clicked", async () => {
    await userEvent.click(addTodo);
    expect(header.textContent).toBe("Add-Todo");
  });
});

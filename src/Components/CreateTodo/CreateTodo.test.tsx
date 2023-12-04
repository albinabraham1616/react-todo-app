import { render, screen } from "@testing-library/react";
import { CreateTodo } from "..";
import userEvent from "@testing-library/user-event";

describe("Create Todo test component", () => {
  let titleLabel: HTMLElement;
  let descriptionLabel: HTMLElement;
  let dueDateLabel: HTMLElement;
  let cancelButton: HTMLElement;
  let createButton: HTMLElement;

  beforeEach(() => {
    render(<CreateTodo setShowModal={() => {}} />);
    titleLabel = screen.getByLabelText("Title:");
    descriptionLabel = screen.getByLabelText("Description:");
    dueDateLabel = screen.getByLabelText("Due Date:");
    cancelButton = screen.getByText("CANCEL");
    createButton = screen.getByText("CREATE");
  });

  it("renders the CreateTodo component", () => {
    const createTodoComponent = screen.getByTestId("createTodo");
    expect(createTodoComponent).toBeVisible();
  });

  it("should render all elements of the Create Todo form", () => {
    expect(titleLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
    expect(dueDateLabel).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
  });

  it("updates formData on input change", async () => {
    const titleInput = screen.getByPlaceholderText("Todo title here");
    const descriptionInput = screen.getByPlaceholderText("Todo Details");
    const dueDateInput = screen.getByTestId("dueDate");

    await userEvent.type(titleInput, "Checking Title");
    await userEvent.type(descriptionInput, "Checking Description");
    await userEvent.type(dueDateInput, "2023-12-02");

    expect(titleInput.value).toBe("Checking Title");
    expect(descriptionInput.value).toBe("Checking Description");
    expect(dueDateInput.value).toBe("2023-12-02");
  });
});

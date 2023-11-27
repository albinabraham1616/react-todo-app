import type { Meta, StoryObj } from "@storybook/react";
import { DisplayTodo } from "..";
import { todos } from "../todosData";
const meta: Meta<typeof DisplayTodo> = {
  component: DisplayTodo,
};
export default meta;

type Story = StoryObj<typeof DisplayTodo>;

export const AllTodo: Story = {
  args: {
    todo: [...todos],
  },
};

export const InProgressTodo: Story = {
  args: {
    todo: todos.slice(0, 2),
  },
};

export const CompletedTodo: Story = {
  args: {
    todo: todos.slice(2),
  },
};

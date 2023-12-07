import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "..";
import { todos } from "../todosData";
const meta: Meta<typeof TodoList> = {
  component: TodoList,
};
export default meta;

type Story = StoryObj<typeof TodoList>;

export const AllTodo: Story = {
  args: {
    todos: [...todos],
  },
};

export const PendingTodo: Story = {
  args: {
    todos: todos.slice(0, 2),
  },
};

export const CompletedTodo: Story = {
  args: {
    todos: todos.slice(2),
  },
};

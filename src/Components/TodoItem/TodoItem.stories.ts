import type { Meta, StoryObj } from "@storybook/react";
import { TodoItem } from "..";
import { todos } from "../todosData";
const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
};
export default meta;

type Story = StoryObj<typeof TodoItem>;

export const AllTodo: Story = {
  args: {
    todo: [...todos],
  },
};

export const PendingTodo: Story = {
  args: {
    todo: todos.slice(0, 2),
  },
};

export const CompletedTodo: Story = {
  args: {
    todo: todos.slice(2),
  },
};

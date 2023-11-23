import type { Meta, StoryObj } from "@storybook/react";
import { CreateTodo } from "..";

const meta: Meta<typeof CreateTodo> = {
  component: CreateTodo,
};

export default meta;

type Story = StoryObj<typeof CreateTodo>;

export const AddTodo: Story = {
  args: {},
};

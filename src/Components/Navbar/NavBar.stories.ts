import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "..";
const meta: Meta<typeof NavBar> = {
  component: NavBar,
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    navType: "All",
  },
};
export const ProgressState: Story = {
  args: {
    navType: "In Progress",
  },
};
export const CompletedState: Story = {
  args: {
    navType: "Completed",
  },
};
export const AddTodoState: Story = {
  args: {
    navType: "Add-Todo",
  },
};

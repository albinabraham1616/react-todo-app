import { MouseEventHandler, ReactNode } from "react";

/**
 * Interface representing the props for the DeleteModal component.
 */
export interface DeleteModalProps {
  /**
   * A boolean indicating whether the delete modal is open or not.
   */
  isOpen: boolean;

  /**
   * A callback function to be called when the delete modal is requested to be closed.
   */
  onRequestClose: () => void;
  /**
   * A callback function to be called when the user confirms the delete action.
   */
  confirmDelete: () => void;
}

/**
 * Interface representing props for a custom Button component.
 */
export interface ButtonProps {
  /**
   * A function to be called when the button is clicked.
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
  /**
   * The content to be displayed inside the button.
   */
  children: ReactNode;
  /**
   * Optional additional class names to apply to the button for custom styling.
   */
  className?: string;
}

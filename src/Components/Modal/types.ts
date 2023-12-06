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

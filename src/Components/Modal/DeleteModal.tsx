import Modal from "react-modal";
import styles from "../TodoList/TodoItem.module.css";
import { DeleteModalProps } from "./types";
const DeleteModal = ({
  isOpen,
  onRequestClose,
  confirmDelete,
}: DeleteModalProps) => {
  return (
    <Modal
      className={styles.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2 className={styles.message}>
        Are you sure you want to delete this item?
      </h2>
      <button className={styles.yesButton} onClick={confirmDelete}>
        Yes
      </button>
      <button className={styles.noButton} onClick={onRequestClose}>
        No
      </button>
    </Modal>
  );
};

export default DeleteModal;

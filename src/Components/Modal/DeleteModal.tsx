import Modal from "react-modal";
import { ButtonProps } from "./types";
import { DeleteModalProps } from "./types";

const Button = ({ onClick, children, className }: ButtonProps) => (
  <button
    className={`h-10 w-20 bg-red-300 font-bold text-xl transform hover:scale-110 mt-4 ml-16 rounded-md hover:text-red-500 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const DeleteModal = ({
  isOpen,
  onRequestClose,
  confirmDelete,
}: DeleteModalProps) => {
  return (
    <Modal
      className=" border-2 h-64 w-1/3 bg-white mx-auto p-16 pt-24 mt-72 rounded-md"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2 className="mb-1  font-bold text-xl ">
        Are you sure you want to delete this item?
      </h2>
      <Button onClick={confirmDelete} className="ml-16">
        Yes
      </Button>
      <Button onClick={onRequestClose} className="ml-16">
        No
      </Button>
    </Modal>
  );
};

export default DeleteModal;
